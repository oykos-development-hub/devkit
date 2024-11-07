import styled, { DefaultTheme } from "styled-components";

export const TableHead = styled.th<{ width?: number | string; sortable?: boolean }>`
  padding: 14px 12px !important;
  width: ${({ width }) => (width ? (typeof width === "number" ? `${width}px` : width) : "auto")};
  box-sizing: border-box;
  cursor: ${({ sortable }) => (sortable ? "pointer" : "default")};
`;

export const TableHeadContent = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div<{ direction: string }>`
  svg {
    transform: ${({ direction }) => (direction === "asc" ? "rotate(180deg)" : "none")};
  }
`;
