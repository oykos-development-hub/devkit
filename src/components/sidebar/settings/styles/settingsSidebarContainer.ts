import styled from "styled-components";
import { Theme } from "../../../../shared/theme";

export const SettingsSidebarContainer = styled.div<{ open: boolean; mainSidebarCollapsed: boolean }>`
  box-sizing: border-box;
  height: calc(100vh - 157px);
  padding: 25px 20px;
  background-color: ${Theme.palette.gray100};
  left: ${({ mainSidebarCollapsed }) => (mainSidebarCollapsed ? "80px" : "350px")};
  transition: opacity 0.2s;
  transition-delay: 0.3s;

  ${({ open }) => (open ? "width: 300px; opacity: 1;" : "width: 0; visibility: hidden; opacity: 0;")}
`;
