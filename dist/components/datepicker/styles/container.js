import styled, { css } from "styled-components";
import { rem } from "polished";
export const Container = styled.div(({ style, theme }) => {
    const { white, primary500, gray50, gray200, gray300, gray400, gray700, gray800 } = theme.palette;
    const { one } = theme.fontFamily;
    const fontFamily = (style === null || style === void 0 ? void 0 : style.fontFamily) || one;
    const borderRadius = (style === null || style === void 0 ? void 0 : style.borderRadius) || rem("8px");
    return css `
    input {
      font-family: ${fontFamily};
      background-color: ${(style === null || style === void 0 ? void 0 : style.color) || white};
      border-radius: ${borderRadius};
      border: ${rem("1px")} solid ${gray300};
      width: 100%;
      font-style: normal;
      font-weight: ${(style === null || style === void 0 ? void 0 : style.fontWeight) || "400"};
      font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || rem("16px")};
      color: ${gray400};

      &:active,
      &:focus-within {
        border: ${rem("1px")} solid ${primary500};
        box-shadow: 0 0 0 ${rem("3.2px")} rgba(0, 79, 255, 0.25);
        outline: none;
        font-style: normal;
        font-weight: ${(style === null || style === void 0 ? void 0 : style.fontWeight) || "400"};
        font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || rem("16px")};
        line-height: ${rem("24px")};
        color: ${gray400};
      }
    }

    & svg {
      width: ${rem("16px")} !important;
      top: ${rem("1px")};
      right: ${rem("16px")};

      & path {
        stroke: ${gray700};
        fill: white;
        stroke-width: 2;
      }
    }

    .react-datepicker-popper {
      font-family: ${fontFamily};
      margin-top: ${rem("-5px")};
    }

    .react-datepicker {
      font-family: ${fontFamily};
      background-color: ${white};
      color: #000;
      border-radius: ${rem("8px")};
      display: inline-block;
      position: absolute;
      border: 1px solid ${gray200};
      box-shadow: 0 ${rem("12px")} ${rem("16px")} ${rem("-4px")} rgba(16, 24, 40, 0.08),
        0px ${rem("4px")} ${rem("6px")} ${rem("-2px")} rgba(16, 24, 40, 0.03);

      &__triangle {
        display: none;
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
        height: ${rem("41.06px")};
        background-color: ${gray50};
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
      top: ${rem("17px")};

      &--previous {
        left: ${rem("9px")};
      }

      &--next {
        right: ${rem("9px")};
      }

      &-icon::before {
        border-color: #000;
        width: ${rem("6.49px")};
        height: ${rem("6.49px")};
        border-width: ${"2px"} ${"2px"} 0 0;

        &:hover {
          border-color: #000;
        }
      }
    }
  `;
});
//# sourceMappingURL=container.js.map