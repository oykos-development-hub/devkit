import styled from "styled-components";
import { Theme } from "../../../shared/theme";
import { Dropdown, ErrorContainer } from "@oykos-development/devkit-react-ts-styled-components";
export const StyledDropdown = styled(Dropdown) `
  font-family: Source Sans Pro, sans-serif;
  font-size: 14px;

  div.select__control {
    height: ${({ isMulti }) => (isMulti ? "auto" : "44px")};
    min-height: 44px;
    border: 1px solid
      ${(p) => { var _a, _b, _c; return (p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : p.error ? (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.error200 : (_c = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _c === void 0 ? void 0 : _c.gray400); }};
    color: ${(p) => { var _a, _b; return (p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray700); }};

    &:hover {
      border: 1px solid
        ${(p) => { var _a, _b, _c; return p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : p.error ? (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.error200 : (_c = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _c === void 0 ? void 0 : _c.gray400; }};
    }

    &:active,
    &:focus-within {
      color: ${(p) => { var _a, _b; return (p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray700); }};
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05),
        0 0 0 4px ${(p) => { var _a, _b; return (p.error ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.error50 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.primary50); }};
      border: 1px solid
        ${(p) => { var _a, _b, _c; return p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : p.error ? (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.error200 : (_c = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _c === void 0 ? void 0 : _c.primary200; }};
    }

    & * {
      color: ${(p) => { var _a, _b; return (p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray700); }};
    }

    & .select__indicators svg path {
      stroke: ${(p) => { var _a, _b; return (p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray700); }};
    }
  }

  & div.select__placeholder {
    color: ${(p) => { var _a, _b; return (p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray500); }};
    font-size: 14px;
  }
  & .select__dropdown-indicator {
    svg {
      fill: ${(p) => { var _a, _b; return (p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray700); }};
    }
  }

  .select__menu {
    overflow: hidden;

    .select__menu-list {
      padding-block: 0;
    }
  }

  ${ErrorContainer} {
    & p {
      color: ${(p) => { var _a, _b; return (p.isDisabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.error500); }};
      font-family: Source Sans Pro, sans-serif;
      font-weight: 400;
    }
  }

  .select__multi-value {
    border-radius: ${Theme.borderRadius.md};
    background-color: ${Theme.palette.gray50};

    & > div {
      padding: 1px 0.4rem;
    }

    & > div {
      color: ${Theme.palette.gray700};
      font-size: 1rem;

      &:last-child {
        padding: 0.25rem !important;
      }

      &:last-child:hover {
        border-radius: ${Theme.borderRadius.md};
        cursor: pointer;

        background-color: ${Theme.palette.error100};
        & > svg {
          fill: ${Theme.palette.error700};
          width: 12px;
        }
      }
    }
  }
`;
export const LabelWrapper = styled.div `
  display: flex;
`;
//# sourceMappingURL=styledDropdown.js.map