import Select from "react-select";
import styled, { css } from "styled-components";
import { rem } from "polished";
export const StyledSelect = styled(Select)(({ theme, showArrow, style, controlIcon }) => {
    const { error700, primary100, primary50, primary200, gray200, gray400, gray600, gray700 } = theme.palette;
    const borderColor = (style === null || style === void 0 ? void 0 : style.borderColor) || gray400;
    return css `
    width: 100%;
    height: auto;
    font-family: ${(style === null || style === void 0 ? void 0 : style.fontFamily) || (theme === null || theme === void 0 ? void 0 : theme.fontFamily.one)};

    // control
    .select__control {
      height: 100%;
      background-color: transparent;
      border: ${(style === null || style === void 0 ? void 0 : style.border) || `1px solid ${borderColor}`};
      border-radius: ${theme.borderRadius.lg || "0.5rem"};
      padding: ${rem("10px")} ${rem("14px")};
      svg {
        fill: ${(style === null || style === void 0 ? void 0 : style.color) || gray700};
      }
      ${Object.assign({}, style)}
    }
    .select__value-container {
      padding: 0;
      padding-left: ${controlIcon ? `${rem("8px")}` : 0};
    }
    .select__placeholder {
      font-size: ${rem("14px")};
      font-weight: 400;
      line-height: ${rem("20px")};
      color: ${gray700};
      margin: 0;
    }
    .select__input-container {
      margin: 0;
    }
    .select__indicator-separator {
      display: none;
    }
    .select__dropdown-indicator {
      padding: 0;
      display: ${showArrow ? "flex" : "none"};
      svg {
        transform: rotate(0deg);
        transition: transform 0.3s;
      }
    }
    .select__value-container .option-icon {
      display: none;
    }
    .select__control {
      display: flex;
      align-items: center;
      align-content: center;
    }
    .select__control:hover {
      border: ${(style === null || style === void 0 ? void 0 : style.border) || `1px solid ${borderColor}`};
    }
    .select__control--is-focused {
      border: 1px solid ${primary200};
    }
    .select__control--menu-is-open.select__control--is-focused,
    .select__control--is-focused,
    .select__control--is-focused:hover {
      border: 1px solid ${primary200};
      box-shadow: ${(style === null || style === void 0 ? void 0 : style.boxShadow) || `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${primary50}`};
    }
    .select__control--menu-is-open .select__dropdown-indicator svg {
      transform: rotate(180deg);
    }
    .select__multi-value {
      border-radius: ${theme.borderRadius.md || "0.5rem"};
      background-color: ${gray200};
      & > div {
        font-size: ${rem("14px")};
      }
      & > div:last-child:hover {
        border-radius: ${theme.borderRadius.md || "0.5rem"};
        padding: 0 0.25em;
        cursor: pointer;
        & > svg {
          fill: ${error700};
        }
      }
    }

    //menu
    .select__menu {
      box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03);
      border: 1px solid #dfd7d6;
      margin-top: 0.5em;
      border-radius: ${theme.borderRadius.lg || "0.5rem"};
      width: ${(style === null || style === void 0 ? void 0 : style.width) || "100%"};
    }
    .select__menu-list {
      margin: 0.5em 0;
      padding: 0;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    .select__option {
      font-size: ${rem("14px")};
      line-height: ${rem("20px")};
      padding: 0.5em 1rem;

      &:hover {
        background-color: ${primary50};
      }
    }
    .select__option--is-focused,
    .select__option--is-selected,
    .select__option--is-focused.select__option--is-selected,
    .select__option:active {
      background-color: ${primary100};
    }
    .select__menu-notice--no-options {
      font-size: ${rem("14px")};
      color: ${gray600};
    }
  `;
});
//# sourceMappingURL=select.js.map