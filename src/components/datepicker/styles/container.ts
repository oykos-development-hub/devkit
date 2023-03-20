import styled, { css, DefaultTheme } from "styled-components";
import { rem } from "polished";
import React from "react";

export const Container = styled.div<{
  style?: React.CSSProperties;
  theme?: DefaultTheme;
  error?: string;
}>(({ style, theme, error }) => {
  const { white, primary500, gray50, gray200, gray300, gray400, gray700, gray800, error600 } = theme!.palette;
  const { one } = theme!.fontFamily;
  const fontFamily = style?.fontFamily || one;
  const borderRadius = style?.borderRadius || rem("8px");

  return css`
    input {
      font-family: ${fontFamily};
      background-color: ${style?.backgroundColor || white};
      border-radius: ${borderRadius};
      border: ${rem("1px")} solid ${error ? error600 : gray300};
      font-style: normal;
      font-weight: ${style?.fontWeight || "400"};
      font-size: ${style?.fontSize || rem("16px")};
      color: ${gray800};
      width: 100%;

      &:active,
      &:focus-within {
        border: ${rem("1px")} solid ${error ? error600 : primary500};
        box-shadow: ${error
          ? `0 0 0 ${rem("3.2px")} rgb(229, 57, 53, 0.25)`
          : `0 0 0 ${rem("3.2px")} rgba(0, 79, 255, 0.25)`};
        outline: none;
        font-style: normal;
        font-weight: ${style?.fontWeight || "400"};
        font-size: ${style?.fontSize || rem("16px")};
        line-height: ${rem("24px")};
        color: ${gray800};
      }
    }

    & svg {
      width: ${rem("21px")} !important;
      top: ${rem("2px")};
      right: ${rem("16px")};

      & path {
        stroke: ${error ? error600 : gray800};
        stroke-width: 2;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }

    .react-datepicker-popper {
      font-family: ${fontFamily};
      margin-top: ${rem("-5px")};
    }

    .react-datepicker {
      font-family: ${fontFamily};
      background-color: ${white};
      border-radius: ${rem("8px")};
      display: inline-block;
      border: ${rem("1px")} solid ${gray200};
      box-shadow: 0 ${rem("12px")} ${rem("16px")} ${rem("-4px")} rgba(16, 24, 40, 0.08),
        0px ${rem("4px")} ${rem("6px")} ${rem("-2px")} rgba(16, 24, 40, 0.03);

      &__tab-loop {
        position: absolute;
        top: 0;
      }

      &__triangle {
        display: none !important;
      }

      &__month-container {
        float: unset;
      }

      &__header {
        background-color: ${white};
        border-top-left-radius: ${rem("8px")};
        border-top-right-radius: ${rem("8px")};
        border: none;
      }

      &__month {
        margin: 0;
      }

      &__day-names {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: ${gray50};
        margin-bottom: ${rem("6px")};
        height: ${rem("41px")};
      }

      &__week {
        display: flex;
        justify-content: space-around;
      }

      &__day {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: ${rem("8px")};
        font-size: ${rem("14px")};
        padding: 0;

        &:hover {
          border-radius: ${rem("8px")};
        }

        &--outside-month {
          color: ${gray400};
        }

        &-name {
          font-weight: 600;
          color: ${gray800};
        }

        &--today {
          color: ${primary500};
        }

        &--selected {
          background-color: ${primary500};
          color: ${white};

          &:hover {
            background-color: ${primary500};
          }
        }

        &--keyboard-selected {
          background-color: ${primary500};
          color: ${white};

          &:hover {
            background-color: ${primary500};
          }
        }
      }

      &__current-month {
        margin-top: ${rem("14px")};
        margin-bottom: ${rem("14px")};
        color: ${gray700};
        font-weight: 400;
        height: ${rem("24px")};
      }
    }

    .react-datepicker__navigation {
      top: ${rem("16px")};

      &--previous {
        left: 0;
      }

      &--next {
        right: 0;
      }

      &-icon::before {
        border-color: #000;
        width: ${rem("6.49px")};
        height: ${rem("6.49px")};
        border-width: ${rem("2px")} ${rem("2px")} 0 0;

        &:hover {
          border-color: #000;
        }
      }
    }
  `;
});
