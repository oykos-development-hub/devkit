import React, { forwardRef, useEffect, useState } from "react";
import { MainSidebar } from "./styles/mainSidebar";
import { Header, UserInfo } from "./styles/header";
import { ArrowRightCircleIcon, UserIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSTypography } from "../typography";
import { ItemsWrapper, SidebarContent, SidebarItem } from "./styles/itemsWrapper";
import { Footer } from "./styles/footer";
import { FolderIcon, InfoIcon, SearchIcon, SettingsIcon, ThreeLayersIcon, TwoLayersIcon, ArrowLeftCircleIcon, } from "../icons";
import { SSSInput } from "../input";
import SettingsSidebar from "./settings";
import { SearchIconContainer } from "./styles/searchIconContainer";
import { SidebarContainer } from "./styles/sidebarContainer";
import { SidebarTop } from "./styles/sidebarTop";
import { BackButton } from "./styles/backButton";
export const SSSSidebar = forwardRef(({ data, settingsData, user, onClick, onSettingsClick, logout, activeItemId }, ref) => {
    const [expandedItems, setExpandedItems] = useState([]);
    const [activeItem, setActiveItem] = useState(activeItemId || 0);
    const [searchQuery, setSearchQuery] = useState("");
    const [settingsSidebarOpen, setSettingsSidebarOpen] = useState(false);
    const [mainSidebarCollapsed, setMainSidebarCollapsed] = useState(false);
    useEffect(() => {
        if (activeItemId) {
            const item = data
                .flatMap((item) => {
                let array = [];
                const getChildItems = (item) => {
                    if (item.children) {
                        return item.children.flatMap((child) => [child, ...getChildItems(child)]);
                    }
                };
                array = [item, ...getChildItems(item)];
                return array;
            })
                .find((item) => item.id === activeItemId) || { id: 0 };
            if (item.parentId) {
                setExpandedItems((prev) => [...prev, item.parentId]);
            }
            else {
                setExpandedItems((prev) => [...prev, item.id]);
            }
            setActiveItem(item.id);
        }
    }, [activeItemId]);
    const footerItems = [
        {
            id: 1000,
            title: "Korisnička podrška",
            route: "/support",
        },
        {
            id: 1001,
            title: "Podešavanja",
        },
        {
            id: 1002,
            title: "Odjavi se",
        },
    ];
    const filterData = (data, query) => {
        if (!query) {
            return data;
        }
        return data
            .flatMap((item) => {
            if (item.children) {
                const filteredChildren = filterData(item.children, query);
                return item.title.toLowerCase().includes(query.toLowerCase())
                    ? [Object.assign(Object.assign({}, item), { children: [] }), ...filteredChildren]
                    : filteredChildren;
            }
            return item;
        })
            .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
    };
    const handleClick = (item) => {
        setActiveItem(item.id);
        onClick(item);
        setSettingsSidebarOpen(false);
        if (mainSidebarCollapsed) {
            setMainSidebarCollapsed(false);
        }
        else {
            if (item.parentId === undefined) {
                setExpandedItems((prev) => (prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [item.id]));
            }
            else {
                setExpandedItems((prev) => prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]);
            }
        }
    };
    const handleFooterItemClick = (item) => {
        setActiveItem(item.id);
        onClick(item);
    };
    const renderItem = (item, padding = 0, level = 0, collapsed) => {
        const paddingLeft = padding + 15;
        const isExpanded = expandedItems.includes(item.id);
        const itemLevel = level + 1;
        return (React.createElement(SidebarContent, { key: item === null || item === void 0 ? void 0 : item.id },
            React.createElement(SidebarItem, { onClick: () => handleClick(item), padding: paddingLeft, active: activeItem === item.id, collapsedSidebar: collapsed },
                itemLevel === 1 ? (React.createElement(ThreeLayersIcon, { width: "14px" })) : itemLevel === 2 ? (React.createElement(TwoLayersIcon, { width: "14px" })) : (React.createElement(FolderIcon, { width: "14px" })),
                !collapsed && React.createElement(SSSTypography, { content: item.title, variant: "bodyMedium" })),
            item.children && item.children.length !== 0 && (React.createElement("div", { className: `collapsible ${isExpanded ? "expanded" : ""}` },
                React.createElement("div", { className: "collapsible-content" },
                    " ",
                    item.children.map((child) => {
                        return renderItem(Object.assign(Object.assign({}, child), { parentId: item.id }), paddingLeft, level + 1, collapsed);
                    }))))));
    };
    const openSettingsSidebar = () => {
        setMainSidebarCollapsed(true);
        setSettingsSidebarOpen(true);
    };
    const onSearchClick = () => {
        setMainSidebarCollapsed(false);
    };
    return (React.createElement(SidebarContainer, null,
        settingsSidebarOpen && (React.createElement(BackButton, { onClick: () => {
                setSettingsSidebarOpen(false);
                setMainSidebarCollapsed(false);
            } },
            React.createElement(ArrowRightCircleIcon, { width: "18px", height: "18px" }))),
        React.createElement(MainSidebar, { collapsed: mainSidebarCollapsed, ref: ref },
            React.createElement(SidebarTop, null,
                React.createElement(Header, { collapsed: mainSidebarCollapsed },
                    (user === null || user === void 0 ? void 0 : user.avatar) ? user.avatar : React.createElement(UserIcon, { width: "32px", height: "35px" }),
                    !mainSidebarCollapsed && (React.createElement(UserInfo, null,
                        React.createElement(SSSTypography, { content: (user === null || user === void 0 ? void 0 : user.name) ? user.name : "Korisnicki broj", variant: "bodyMedium" }),
                        React.createElement(SSSTypography, { content: (user === null || user === void 0 ? void 0 : user.unit) ? user.unit : "Operativna jedinica", variant: "bodyMedium" })))),
                mainSidebarCollapsed ? (React.createElement(SearchIconContainer, { onClick: onSearchClick },
                    React.createElement(SearchIcon, { style: { marginLeft: 10, marginRight: 10 } }))) : (React.createElement(SSSInput, { onChange: (e) => setSearchQuery(e.target.value), name: "sidebarSearch", leftContent: React.createElement(SearchIcon, { style: { marginLeft: 10, marginRight: 10 } }) })),
                React.createElement(ItemsWrapper, { collapsed: mainSidebarCollapsed }, filterData(data, searchQuery).map((item) => {
                    return renderItem(item, 0, 0, mainSidebarCollapsed);
                }))),
            React.createElement(Footer, null,
                React.createElement(SidebarItem, { onClick: () => handleFooterItemClick(footerItems[0]), active: activeItem === footerItems[0].id, padding: 15, collapsedSidebar: mainSidebarCollapsed },
                    React.createElement(InfoIcon, null),
                    !mainSidebarCollapsed && React.createElement(SSSTypography, { content: footerItems[0].title, variant: "bodyMedium" })),
                !!onSettingsClick && (React.createElement(SidebarItem, { onClick: () => openSettingsSidebar(), active: activeItem === footerItems[1].id, padding: 15, collapsedSidebar: mainSidebarCollapsed },
                    React.createElement(SettingsIcon, null),
                    !mainSidebarCollapsed && React.createElement(SSSTypography, { content: footerItems[1].title, variant: "bodyMedium" }))),
                React.createElement(SidebarItem, { onClick: logout, active: activeItem === footerItems[2].id, padding: 15, collapsedSidebar: mainSidebarCollapsed },
                    React.createElement(ArrowLeftCircleIcon, null),
                    !mainSidebarCollapsed && React.createElement(SSSTypography, { content: footerItems[2].title, variant: "bodyMedium" })))),
        !!onSettingsClick && settingsSidebarOpen && (React.createElement(SettingsSidebar, { mainSidebarCollapsed: mainSidebarCollapsed, open: settingsSidebarOpen, onClick: onSettingsClick, data: settingsData }))));
});
SSSSidebar.displayName = "SSSSidebar";
//# sourceMappingURL=index.js.map