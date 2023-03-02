import styled, { css } from "styled-components";
import { BodyMedium } from "../../typography/styles/variants";
import { Variants } from "../types";
const displayDots = (variant, theme) => {
    const { primary500, gray300 } = theme.palette;
    if (variant === Variants["dotted"])
        return css `
      & a {
        position: relative;
      }

      & li:first-child,
      & li:last-child {
        visibility: hidden;
      }

      & a::after {
        content: "";
        height: 1.25em;
        width: 1.25em;
        border-radius: 50%;
        position: absolute;
        background-color: ${gray300};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      & li.active a::after {
        background-color: ${primary500};
      }
    `;
    else
        return;
};
export const Container = styled.div(({ theme, variant, displayPages, renderPaginationText, fullWidth }) => {
    const { primary50, primary500, gray50, gray500, gray800, gray900, gray700, gray300 } = theme.palette;
    const activeBackground = {
        filled: primary50,
        outlined: gray50,
        underlined: "transparent",
    };
    const color = {
        filled: gray500,
        outlined: gray700,
        underlined: gray700,
    };
    const activeColor = {
        filled: primary500,
        outlined: gray800,
        underlined: gray700,
    };
    return css `
    & * {
      font-family: "Inter";
    }

    position: relative;
    color: ${gray900};
    width: 100%;

    & ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: ${variant === Variants["outlined"] ? 0 : "0.5em"};
      width: 100%;
      padding: 0;
      color: ${color[variant]};
      padding: 1em 0;
      margin: 0;
      padding: 1em 0;

      & li,
      & li.active {
        cursor: pointer;
        border-radius: ${variant === Variants["outlined"] ? 0 : "0.5em"};
        border: ${variant === Variants["outlined"] ? `1px solid ${gray300}` : "none"};
      }

      & li:first-child,
      & li:last-child {
        color: ${gray700};
        border: ${variant === Variants["underlined"] ? "none" : `1px solid ${gray300}`};
        display: block;

        & path {
          stroke: ${gray700};
          fill: ${gray700};
        }
      }

      & li {
        display: ${!displayPages || renderPaginationText ? "none" : "block"};
      }

      & li:first-child {
        margin-right: ${fullWidth ? "auto" : "none"};
        margin-left: 1.5em;
        border-radius: ${variant === Variants["outlined"] ? "0.5em 0 0 0.5em" : "none"};
      }

      & li:last-child {
        margin-right: 1.5em;
        margin-left: ${fullWidth ? "auto" : "none"};
        border-radius: ${variant === Variants["outlined"] ? "0 0.5em 0.5em 0" : "none"};
      }

      & li.active {
        background-color: ${activeBackground[variant]};
        color: ${activeColor[variant]};

        a {
          text-decoration: ${variant === Variants["underlined"] ? "underline" : "none"};
        }

        & path {
          fill: ${primary500};
          stroke: ${primary500};
        }
      }

      & a {
        padding: 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 1em;
        height: 1em;
      }
    }

    & ${BodyMedium} {
      position: absolute;
      white-space: nowrap;
      bottom: 1.25em;
      left: 50%;
      transform: translateX(-50%);
      margin: 0;
      color: ${gray900};
    }

    ${displayDots(variant, theme)}
  `;
});
//# sourceMappingURL=container.js.map