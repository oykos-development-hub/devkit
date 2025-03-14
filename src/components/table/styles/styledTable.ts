import styled from "styled-components";
import TableRow from "./tableRow";
import { Table } from "@oykos-development/devkit-react-ts-styled-components";

const StyledTable = styled(Table)`
  border: none;
  box-shadow: none;

  & > div {
    padding: unset;
  }

  thead {
    ${TableRow} {
      border-bottom: 1px solid ${({ theme }) => theme.palette.gray600};
      cursor: default;
    }
  }

  tbody {
    ${TableRow} {
      &:hover {
        background-color: ${({ theme }) => theme.palette.gray50};
      }

      td {
        height: auto;
        padding: 14px 12px;
      }
    }
  }
`;

export default StyledTable;
