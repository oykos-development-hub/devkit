import Select from "react-select";
import styled, { css } from "styled-components";
import { DropdownProps } from "../types";
import { rem } from "polished";

export const StyledSelect = styled(Select)<DropdownProps>(({ theme, showArrow, style, controlIcon, isSearchable }) => {
  const { error50, error700, primary50, primary200, primary100, gray100, gray200, gray300, gray400, gray600, gray700 } =
    theme.palette;

  return css`
    width: 100%;
    height: auto;

    // control (input field)
    .select__control {
      cursor: ${isSearchable ? "text" : "pointer"};
      background-color: #fff;
      border: ${style?.border || `1px solid ${gray400}`};
      border-radius: ${theme.borderRadius.lg || rem("8px")};
      padding: ${rem("12px")} ${rem("14px")};

      ${{ ...style }}
    }
    .select__value-container {
      padding-left: ${controlIcon ? "0.7rem" : 0};
    }
    .select__placeholder {
      margin: 0;
      padding: 0;
    }
    .select__input-container {
      margin: 0;
    }
    .select__indicator-separator {
      display: none;
    }

    // x icon on multi select
    .select__indicator {
      padding: 0;
      margin-right: ${rem("8px")};

      &.select__clear-indicator svg {
        cursor: pointer;
        border-radius: 50%;

        &:hover {
          fill: ${error700};
          background-color: ${error50};
        }
      }
    }

    .select__dropdown-indicator {
      padding: 0;
      display: ${showArrow ? "flex" : "none"};
      svg {
        fill: ${gray700};
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
      border: ${rem("1px")} solid ${gray400};
    }
    .select__control--menu-is-open.select__control--is-focused,
    .select__control--is-focused,
    .select__control--is-focused:hover {
      border: 1px solid ${primary200};
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px ${primary50};
    }

    .select__value-container {
      padding: 0 ${rem("8px")} 0 0;
    }

    ${!isSearchable &&
    showArrow &&
    `.select__control--menu-is-open .select__dropdown-indicator svg {
        transform: rotate(180deg);
      }`}
    .select__multi-value {
      border-radius: ${theme.borderRadius.md || "0.5rem"};
      background-color: ${gray200};
      & > div {
        padding: 0 ${rem("3px")} 0 ${rem("3px")};
      }
      & > div:last-child:hover {
        border-radius: ${theme.borderRadius.md || "0.5rem"};
        padding: 0 0.25em;
        cursor: pointer;
        background-color: ${error50};
        & > svg {
          fill: ${error700};
        }
      }
    }

    //dropdown menu
    .select__menu {
      flex-grow: 1;
      box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03);
      border: 1px solid ${gray100};
      margin-top: ${rem("8px")};
      padding: 0;
      border-radius: ${theme.borderRadius.lg || "0.5rem"};
      width: ${style?.width || "100%"};
    }
    .select__menu-list {
      padding: ${rem("4px")} 0;

      &::-webkit-scrollbar {
        width: ${rem("8px")};
        background-color: transparent;

        &-track {
          border-radius: ${rem("8px")};
          background-color: transparent;
        }

        &-thumb {
          background-color: ${gray300};
          border-radius: ${rem("8px")};

          &:hover {
            background-color: ${gray400};
          }
        }
      }
    }
    // option items
    .select__option {
      cursor: pointer;
      padding: ${"12px"} ${rem("14px")};

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
      //
    }
  `;
});
