import React, { Ref, forwardRef, useEffect, useState } from "react";
import { MainSidebar } from "./styles/mainSidebar";
import { SSSSidebarProps, SidebarItemProps } from "./types";
import { Header, UserInfo } from "./styles/header";
import { ArrowRightCircleIcon, UserIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSTypography } from "../typography";
import { ItemsWrapper, SidebarContent, SidebarItem } from "./styles/itemsWrapper";
import { Footer } from "./styles/footer";
import {
  FolderIcon,
  InfoIcon,
  SearchIcon,
  SettingsIcon,
  ThreeLayersIcon,
  TwoLayersIcon,
  ArrowLeftCircleIcon,
} from "../icons";
import { SSSInput } from "../input";
import SettingsSidebar from "./settings";
import { SearchIconContainer } from "./styles/searchIconContainer";
import { SidebarContainer } from "./styles/sidebarContainer";
import { SidebarTop } from "./styles/sidebarTop";
import { BackButton } from "./styles/backButton";

export const SSSSidebar = forwardRef(
  (
    { data, settingsData, user, onClick, onSettingsClick, logout, activeItemId }: SSSSidebarProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const [expandedItems, setExpandedItems] = useState<number[]>([]);
    const [activeItem, setActiveItem] = useState<number>(activeItemId || 0);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [settingsSidebarOpen, setSettingsSidebarOpen] = useState(false);
    const [mainSidebarCollapsed, setMainSidebarCollapsed] = useState(false);

    useEffect(() => {
      if (activeItemId) {
        const item = data
          .flatMap((item) => {
            let array: any = [];
            const getChildItems = (item: any) => {
              if (item.children) {
                return item.children.flatMap((child: any) => [child, ...getChildItems(child)]);
              }
            };
            array = [item, ...getChildItems(item)];
            return array;
          })
          .find((item) => item.id === activeItemId) || { id: 0 };
        if (item.parentId) {
          setExpandedItems((prev) => [...prev, item.parentId]);
        } else {
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

    const filterData = (data: SidebarItemProps[], query: string) => {
      if (!query) {
        return data;
      }

      return data
        .flatMap((item: SidebarItemProps) => {
          if (item.children) {
            const filteredChildren: SidebarItemProps[] = filterData(item.children, query);
            return item.title.toLowerCase().includes(query.toLowerCase())
              ? [{ ...item, children: [] }, ...filteredChildren]
              : filteredChildren;
          }
          return item;
        })
        .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
    };

    const handleClick = (item: SidebarItemProps) => {
      setActiveItem(item.id);
      onClick(item);
      setSettingsSidebarOpen(false);
      if (mainSidebarCollapsed) {
        setMainSidebarCollapsed(false);
      } else {
        // Only expand if the settings sidebar is not opened
        if (item.parentId === undefined) {
          setExpandedItems((prev) => (prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [item.id]));
        } else {
          setExpandedItems((prev) =>
            prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id],
          );
        }
      }
    };

    const handleFooterItemClick = (item: SidebarItemProps) => {
      setActiveItem(item.id);
      onClick(item);
    };

    const renderItem = (item: SidebarItemProps, padding = 0, level = 0, collapsed: boolean) => {
      const paddingLeft = padding + 15;
      const isExpanded = expandedItems.includes(item.id);
      const itemLevel = level + 1;

      return (
        <SidebarContent key={item?.id}>
          <SidebarItem
            onClick={() => handleClick(item)}
            padding={paddingLeft}
            active={activeItem === item.id}
            collapsedSidebar={collapsed}
          >
            {itemLevel === 1 ? (
              <ThreeLayersIcon width={"14px"} />
            ) : itemLevel === 2 ? (
              <TwoLayersIcon width={"14px"} />
            ) : (
              <FolderIcon width={"14px"} />
            )}
            {!collapsed && <SSSTypography content={item.title} variant="bodyMedium" />}
          </SidebarItem>
          {item.children && item.children.length !== 0 && (
            <div className={`collapsible ${isExpanded ? "expanded" : ""}`}>
              <div className="collapsible-content">
                {" "}
                {item.children.map((child) => {
                  return renderItem({ ...child, parentId: item.id }, paddingLeft, level + 1, collapsed);
                })}
              </div>
            </div>
          )}
        </SidebarContent>
      );
    };

    const openSettingsSidebar = () => {
      setMainSidebarCollapsed(true);
      setSettingsSidebarOpen(true);
    };

    const onSearchClick = () => {
      setMainSidebarCollapsed(false);
    };

    return (
      <SidebarContainer>
        {settingsSidebarOpen && (
          <BackButton
            onClick={() => {
              setSettingsSidebarOpen(false);
              setMainSidebarCollapsed(false);
            }}
          >
            <ArrowRightCircleIcon width="18px" height="18px" />
          </BackButton>
        )}
        <MainSidebar collapsed={mainSidebarCollapsed} ref={ref}>
          <SidebarTop>
            <Header collapsed={mainSidebarCollapsed}>
              {user?.avatar ? user.avatar : <UserIcon width="32px" height="35px" />}
              {!mainSidebarCollapsed && (
                <UserInfo>
                  <SSSTypography content={user?.name ? user.name : "Korisnicki broj"} variant="bodyMedium" />
                  <SSSTypography content={user?.unit ? user.unit : "Operativna jedinica"} variant="bodyMedium" />
                </UserInfo>
              )}
            </Header>

            {mainSidebarCollapsed ? (
              <SearchIconContainer onClick={onSearchClick}>
                <SearchIcon style={{ marginLeft: 10, marginRight: 10 }} />
              </SearchIconContainer>
            ) : (
              <SSSInput
                onChange={(e) => setSearchQuery(e.target.value)}
                name="sidebarSearch"
                leftContent={<SearchIcon style={{ marginLeft: 10, marginRight: 10 }} />}
              />
            )}

            <ItemsWrapper collapsed={mainSidebarCollapsed}>
              {filterData(data, searchQuery).map((item: SidebarItemProps) => {
                return renderItem(item, 0, 0, mainSidebarCollapsed);
              })}
            </ItemsWrapper>
          </SidebarTop>
          <Footer>
            <SidebarItem
              onClick={() => handleFooterItemClick(footerItems[0])}
              active={activeItem === footerItems[0].id}
              padding={15}
              collapsedSidebar={mainSidebarCollapsed}
            >
              <InfoIcon />
              {!mainSidebarCollapsed && <SSSTypography content={footerItems[0].title} variant="bodyMedium" />}
            </SidebarItem>
            <SidebarItem
              onClick={() => openSettingsSidebar()}
              active={activeItem === footerItems[1].id}
              padding={15}
              collapsedSidebar={mainSidebarCollapsed}
            >
              <SettingsIcon />
              {!mainSidebarCollapsed && <SSSTypography content={footerItems[1].title} variant="bodyMedium" />}
            </SidebarItem>
            <SidebarItem
              onClick={logout}
              active={activeItem === footerItems[2].id}
              padding={15}
              collapsedSidebar={mainSidebarCollapsed}
            >
              <ArrowLeftCircleIcon />
              {!mainSidebarCollapsed && <SSSTypography content={footerItems[2].title} variant="bodyMedium" />}
            </SidebarItem>
          </Footer>
        </MainSidebar>
        {settingsSidebarOpen && (
          <SettingsSidebar
            mainSidebarCollapsed={mainSidebarCollapsed}
            open={settingsSidebarOpen}
            onClick={onSettingsClick}
            data={settingsData}
          />
        )}
      </SidebarContainer>
    );
  },
);

SSSSidebar.displayName = "SSSSidebar";
