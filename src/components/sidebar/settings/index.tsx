import React, { useState } from "react";
import { FolderIcon, SearchIcon, ThreeLayersIcon, TwoLayersIcon } from "../../icons";
import { SSSInput } from "../../input";
import { SSSTypography } from "../../typography";
import { SettingsItemsWrapper, SidebarContent, SidebarItem } from "../styles/itemsWrapper";
import { SettingsSidebarProps, SidebarItemProps } from "../types";
import { SettingsSidebarContainer } from "./styles/settingsSidebarContainer";

const SettingsSidebar = ({ data, onClick, open, mainSidebarCollapsed }: SettingsSidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [activeItem, setActiveItem] = useState<number>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClick = (item: SidebarItemProps) => {
    setActiveItem(item.id);
    onClick(item);

    if (item.parentId === undefined) {
      setExpandedItems((prev) => (prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [item.id]));
    } else {
      setExpandedItems((prev) => (prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]));
    }
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
          <SSSTypography content={item.title} variant="bodyMedium" />
        </SidebarItem>
        {item.children && item.children.length !== 0 && (
          <div className={`collapsible ${isExpanded ? "expanded" : ""}`}>
            <div className="collapsible-content">
              {item.children.map((child) => {
                return renderItem({ ...child, parentId: item.id }, paddingLeft, level + 1, collapsed);
              })}
            </div>
          </div>
        )}
      </SidebarContent>
    );
  };

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

  return (
    <SettingsSidebarContainer mainSidebarCollapsed={mainSidebarCollapsed} open={open} id="settings-sidebar">
      <SSSInput
        onChange={(e) => setSearchQuery(e.target.value)}
        name="sidebarSearch"
        leftContent={<SearchIcon style={{ marginLeft: 10, marginRight: 10 }} />}
      />

      <SettingsItemsWrapper collapsed={false}>
        {filterData(data, searchQuery).map((item: SidebarItemProps) => {
          return renderItem(item, 0, 0, false);
        })}
      </SettingsItemsWrapper>
    </SettingsSidebarContainer>
  );
};

export default SettingsSidebar;
