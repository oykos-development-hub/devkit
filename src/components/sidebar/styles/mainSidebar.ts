import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
import { flexColumn } from "./shared";

const CollapsedStyles = css`
  width: 20px;
  padding-inline: 0;

  & > * {
    transition: visibility 0s linear;
    visibility: hidden;
  }
`;

export const MainSidebar = styled.div<{ collapsed: boolean }>`
  ${flexColumn};
  box-sizing: border-box;
  height: 100%;
  padding: 25px 20px;
  background-color: ${Theme.palette.white};
  gap: 2rem;
  transition: width 0.3s ease;
  position: relative;
  justify-content: space-between;

  & > * {
    transition: visibility 0.3s ease 0.1s;

    visibility: visible;
  }

  ${({ collapsed }) => (collapsed ? CollapsedStyles : "width: 350px; padding-inline: 25px;")};

  @media (max-width: 1440px) {
    gap: 0;
  }
`;
