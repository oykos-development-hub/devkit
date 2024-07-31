import styled from "styled-components";
import TableRow from "./tableRow";
import TableCell from "./tableCell";
const Container = styled.div `
  // TODO: replace with styled components from devkit
  & > div {
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

        ${TableCell} {
          height: auto;
          padding: 14px 12px;
        }
      }
    }
  }
`;
export default Container;
//# sourceMappingURL=container.js.map