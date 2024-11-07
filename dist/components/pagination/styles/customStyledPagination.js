import styled from "styled-components";
import { Theme } from "../../../shared/theme";
import { Pagination } from "@oykos-development/devkit-react-ts-styled-components";
export const StyledPagination = styled(Pagination) `
  * {
    font-family: ${Theme.fontFamily.two} !important;
  }
  .next {
    border: none !important;
  }
  .previous {
    border: none !important;
  }
  .active {
    background-color: ${Theme.palette.primary50};
    color: ${Theme.palette.primary500};
  }
  ul {
    li a {
      font-size: 1rem;
    }
    & > li:first-child {
      margin-right: 1rem;
    }
    & > li:last-child {
      margin-left: 1rem;
    }
  }
`;
//# sourceMappingURL=customStyledPagination.js.map