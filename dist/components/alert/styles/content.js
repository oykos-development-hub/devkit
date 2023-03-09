import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
import { rem } from "polished";
export const Content = styled.div(() => ({ size, theme }) => {
    const themeToUse = theme || Theme;
    const { white } = themeToUse.palette;
    const gap = {
        sm: rem("8px"),
        md: rem("12px"),
        lg: rem("16px"),
    };
    const iconSize = {
        sm: "1.25rem",
        md: "1.25rem",
        lg: "1.5rem",
    };
    return css `
    display: flex;
    flex-direction: row;
    gap: ${gap[size]};
    align-items: center;

    & p {
      margin: 0;
      color: ${white};
    }

    // description (if exists)
    & p:nth-child(1) {
      color: ${white};
    }

    & svg {
      width: ${iconSize[size]} !important;
      height: ${iconSize[size]} !important;
    }

    & svg path {
      fill: ${white} !important;
      color: ${white} !important;
    }
  `;
});
//# sourceMappingURL=content.js.map