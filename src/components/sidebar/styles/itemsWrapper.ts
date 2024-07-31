import styled, { css } from "styled-components";
import { flexColumn, hoverStyle } from "./shared";
import { Theme } from "../../../shared/theme";

export const CustomScroll = css`
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 4px;
    background-color: ${Theme.palette.gray100};
  }
  &::-webkit-scrollbar-thumb {
    height: auto;
    border-radius: 4px;
    background-color: ${Theme.palette.primary500};
  }
`;

export const ItemsWrapper = styled.div<{ collapsed: boolean }>`
  ${flexColumn}
  margin-top: 26px;
  overflow-y: auto;
  padding-right: 5px;

  ${CustomScroll}

  ${({ collapsed }) => collapsed && "padding: 0"}
`;

export const SettingsItemsWrapper = styled.div<{ collapsed: boolean }>`
  ${flexColumn}
  ${CustomScroll}
   margin-top: 26px;
  overflow-y: auto;
  max-height: calc(100vh - 281px);
`;

export const SidebarContent = styled.div`
  ${flexColumn}
  .collapsible {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
  }

  .collapsible.expanded {
    max-height: 2000px; /* Set a high value here to avoid collapsing issues */
  }

  .collapsible-content {
    transition: transform 0.3s ease-in-out;
  }

  .collapsible.expanded .collapsible-content {
    transform: translateY(0);
  }

  .collapsible:not(.expanded) .collapsible-content {
    transform: translateY(-100%);
  }
`;

export const SidebarItem = styled.div<{ padding?: number; active: boolean; collapsedSidebar: boolean }>`
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 5px 0;
  padding-left: ${(p) => (p.padding ? `calc(2px + ${p.padding}px)` : "2px")};
  padding-right: 17px;
  gap: 13px;
  &:hover {
    ${hoverStyle}
  }

  ${(p) => p.active && hoverStyle}

  ${({ collapsedSidebar }) =>
    collapsedSidebar && "justify-content: center; width: 100%; border-radius: 0; padding-inline: 0;"}
`;
