import styled, { DefaultTheme } from "styled-components";
import { Theme } from "../../../shared/theme";

const TableRow = styled.tr<{ selected?: boolean }>`
  transition: background-color 0.2s;
  cursor: pointer;
  background-color: ${({ selected }) => selected && Theme.palette.gray100};

  &:not(:last-child) {
    border-bottom: 1px solid ${Theme.palette.gray100};
  }
  &.some-class {
    background-color: white;
  }
`;

export default TableRow;
