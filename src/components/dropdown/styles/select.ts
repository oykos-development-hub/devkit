import Select from "react-select";
import styled, { css } from "styled-components";
import { DropdownProps } from "../types";

export const StyledSelect = styled(Select)<DropdownProps>(() => ({ theme, showArrow, style, controlIcon }) => {
    const { primary200, gray50, gray100, gray700, gray400, gray600, gray900, white } = theme!.palette;

    return css`
    width: 100%;
    height: 3em;

    // control
    & .select__control {
      height: 100%;
      background-color: ${white};
      border: 1px solid ${gray400};
      border-radius: ${theme.borderRadius.lg || "0.5rem"};
      padding: 0 1em;
      & svg {
        fill: ${gray700};
      }
      .select__value-container {
        padding: 0;
        padding-left: ${controlIcon ? "0.75em" : 0};
        & .select__placeholder {
          font-size: 14px;
          color: ${gray600};
          margin: 0;
        }

        .select__input-container {
          margin: 0;
        }
        // multi value
        & .select__multi-value {
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
      }
      & .select__indicator-separator {
        display: none;
      }
      & .select__dropdown-indicator {
        padding: 0;
        display: ${showArrow ? "flex" : "none"};
        & svg {
          transform: rotate(0deg);
          transition: transform 0.3s;
        }
      }
      & .select__value-container .option-icon {
        display: none;
      }
      ${{ ...style }}
    }
    & .select__control:hover {
      border-color: ${gray400};
    }
    & .select__control--is-focused {
      box-shadow: none;
    }
    & .select__control--menu-is-open.select__control--is-focused,
    & .select__control--is-focused,
    & .select__control--is-focused:hover {
      border-color: ${primary200};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${gray100};
    }
    & .select__control--menu-is-open .select__dropdown-indicator svg {
      transform: rotate(180deg);
    }

    //menu
    & .select__menu {
      box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
      border: 1px solid ${gray100};
      margin-top: 0.5em;
      border-radius: ${theme.borderRadius.lg || "0.5rem"};
      & .select__menu-list {
        margin: 0.5em 0;
        padding: 0;
        &::-webkit-scrollbar {
          width: 0;
        }
      }
      & .select__option {
        font-size: 0.75em;
        color: ${gray900};
        padding: 0.5em 1rem;
      }
      & .select__option--is-focused,
      & .select__option--is-selected {
        background-color: ${white};
        color: ${gray900};
      }
      & .select__menu-notice--no-options {
        font-size: 14px;
        color: ${gray600};
      }
    }
  `;
});
