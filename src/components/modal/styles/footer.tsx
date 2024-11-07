import styled from "styled-components";
import { SSSTypography } from "../../typography";

export const Footer = styled.div`
  height: 114px;
  border-top: 1px solid ${({ theme }) => theme.palette.primary500};
  background-color: ${({ theme }) => theme.palette.gray50};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  box-sizing: border-box;
`;

export const HelpText = styled(SSSTypography)`
  align-self: flex-end;
`;
