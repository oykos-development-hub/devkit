import styled from "styled-components";
import { flexColumn } from "./shared";

export const Footer = styled.div`
  ${flexColumn}
  z-index: 9999;
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  cursor: pointer;
  padding: 10px 17px;
`;
