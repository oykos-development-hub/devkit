import { css } from "styled-components";
import { TypographyProps } from "../types";
import { Theme } from "../../../shared/theme";

export const themeToUse = (props: TypographyProps) => props.theme || Theme;
export const fontSize = (props: TypographyProps) => props.style?.fontSize;
export const fontWeight = (props: TypographyProps) => props.style?.fontWeight;

export const shared = css<TypographyProps>`
  display: block;
  color: ${(props: TypographyProps) => props.style?.color || themeToUse(props).palette?.gray900};
  font-family: ${(props: TypographyProps) => props.style?.fontFamily || themeToUse(props).fontFamily?.one};
`;
