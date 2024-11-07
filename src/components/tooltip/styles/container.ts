/* eslint-disable indent */
import { StyledTooltip, TooltipVariants, HoverContents } from "@oykos-development/devkit-react-ts-styled-components";
import styled, { DefaultTheme } from "styled-components";

const Container = styled.div<{
  hasContent: boolean;
  variant: TooltipVariants | `${TooltipVariants}`;
  theme: DefaultTheme;
}>`
  & ${HoverContents}:hover + ${StyledTooltip} {
    visibility: visible;
    opacity: 1;
  }

  ${StyledTooltip} {
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    padding: 0.75em;
    max-width: 320px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${({ theme, variant }) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      variant === "filled" ? theme.palette.primary500 : theme.palette.white};
    color: ${({ theme, variant }) =>
      variant === "filled"
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          theme.palette.white
        : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          theme.palette.black};
    opacity: 0;
    transition-delay: 50ms;
    transition-property: opacity;
    transition-duration: 150ms;
    gap: ${({ hasContent }) => (hasContent ? "0.25em" : 0)};

    & > h6 {
      font-family: "Source Sans Pro", sans-serif !important;
      font-size: 0.75em;
      font-weight: 600;
      line-height: 1em;
    }
  }
`;

export default Container;
