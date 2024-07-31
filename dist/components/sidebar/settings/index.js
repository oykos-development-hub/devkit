import React, { useState } from "react";
import { FolderIcon, SearchIcon, ThreeLayersIcon, TwoLayersIcon } from "../../icons";
import { SSSInput } from "../../input";
import { SSSTypography } from "../../typography";
import { SettingsItemsWrapper, SidebarContent, SidebarItem } from "../styles/itemsWrapper";
import { SettingsSidebarContainer } from "./styles/settingsSidebarContainer";
const SettingsSidebar = ({ data, onClick, open, mainSidebarCollapsed }) => {
    const [expandedItems, setExpandedItems] = useState([]);
    const [activeItem, setActiveItem] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const handleClick = (item) => {
        setActiveItem(item.id);
        onClick(item);
        if (item.parentId === undefined) {
            setExpandedItems((prev) => (prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [item.id]));
        }
        else {
            setExpandedItems((prev) => (prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]));
        }
    };
    const renderItem = (item, padding = 0, level = 0, collapsed) => {
        const paddingLeft = padding + 15;
        const isExpanded = expandedItems.includes(item.id);
        const itemLevel = level + 1;
        return (React.createElement(SidebarContent, { key: item === null || item === void 0 ? void 0 : item.id },
            React.createElement(SidebarItem, { onClick: () => handleClick(item), padding: paddingLeft, active: activeItem === item.id, collapsedSidebar: collapsed },
                itemLevel === 1 ? (React.createElement(ThreeLayersIcon, { width: "14px" })) : itemLevel === 2 ? (React.createElement(TwoLayersIcon, { width: "14px" })) : (React.createElement(FolderIcon, { width: "14px" })),
                React.createElement(SSSTypography, { content: item.title, variant: "bodyMedium" })),
            item.children && item.children.length !== 0 && (React.createElement("div", { className: `collapsible ${isExpanded ? "expanded" : ""}` },
                React.createElement("div", { className: "collapsible-content" }, item.children.map((child) => {
                    return renderItem(Object.assign(Object.assign({}, child), { parentId: item.id }), paddingLeft, level + 1, collapsed);
                }))))));
    };
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
    return (React.createElement(SettingsSidebarContainer, { mainSidebarCollapsed: mainSidebarCollapsed, open: open, id: "settings-sidebar" },
        React.createElement(SSSInput, { onChange: (e) => setSearchQuery(e.target.value), name: "sidebarSearch", leftContent: React.createElement(SearchIcon, { style: { marginLeft: 10, marginRight: 10 } }) }),
        React.createElement(SettingsItemsWrapper, { collapsed: false }, filterData(data, searchQuery).map((item) => {
            return renderItem(item, 0, 0, false);
        }))));
};
export default SettingsSidebar;
//# sourceMappingURL=index.js.map