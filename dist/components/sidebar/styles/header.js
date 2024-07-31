import styled from "styled-components";
import { flexColumn } from "./shared";
export const Header = styled.div `
  display: flex;
  align-items: center;
  & svg > path {
    stroke-width: 1;
  }
  margin-bottom: 30px;

  ${({ collapsed }) => collapsed && "justify-content: center;"}
`;
export const UserInfo = styled.div `
  ${flexColumn}
  margin-left: 16px;
`;
//# sourceMappingURL=header.js.map