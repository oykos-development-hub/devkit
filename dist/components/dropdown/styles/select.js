import Select from "react-select";
import styled, { css } from "styled-components";
export const StyledSelect = styled(Select)(({ theme, showArrow, style, controlIcon }) => {
    const { primary200, gray50, gray100, gray400, gray600, gray900, white } = theme.palette;
    const borderColor = (style === null || style === void 0 ? void 0 : style.borderColor) || gray400;
    return css `
    width: 100%;
    height: 3em;

    // control
    .select__control {
      height: 100%;
      background-color: transparent;
      border: ${(style === null || style === void 0 ? void 0 : style.border) || `1px solid ${borderColor}`};
      border-radius: ${theme.borderRadius.lg || "0.5rem"};
      padding: 0 1em;
      svg {
        fill: ${gray600};
      }
      ${Object.assign({}, style)}
    }
    .select__value-container {
      padding: 0;
      padding-left: ${controlIcon ? "0.75em" : 0};
    }
    .select__placeholder {
      font-size: 14px;
      color: ${gray600};
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
    .select__control:hover {
      border: ${(style === null || style === void 0 ? void 0 : style.border) || `1px solid ${borderColor}`};
    }
    .select__control--is-focused {
      box-shadow: none;
    }
    .select__control--menu-is-open.select__control--is-focused,
    .select__control--is-focused,
    .select__control--is-focused:hover {
      border-color: ${primary200};
      box-shadow: ${(style === null || style === void 0 ? void 0 : style.boxShadow) || "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff"};
    }
    .select__control--menu-is-open .select__dropdown-indicator svg {
      transform: rotate(180deg);
    }
    .select__multi-value {
      border-radius: ${theme.borderRadius.lg || "0.5rem"};
      background-color: ${gray50};
      & > div {
        font-size: 1em;
      }
      & > div:last-child:hover {
        border-radius: ${theme.borderRadius.lg || "0.5rem"};
        background-color: ${gray100};
        padding: 0px 0.25em;
      }
    }

    //menu
    .select__menu {
      box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
      border: 1px solid ${gray100};
      margin-top: 0.5em;
      border-radius: ${theme.borderRadius.lg || "0.5rem"};
    }
    .select__menu-list {
      margin: 0.5em 0;
      padding: 0;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    .select__option {
      font-size: 0.75em;
      color: ${gray900};
      padding: 0.5em 1rem;
    }
    .select__option--is-focused,
    .select__option--is-selected,
    .select__option--is-focused.select__option--is-selected,
    .select__option:active {
      background-color: ${white};
      color: ${gray900};
    }
    .select__menu-notice--no-options {
      font-size: 14px;
      color: ${gray600};
    }
  `;
});
//# sourceMappingURL=select.js.map