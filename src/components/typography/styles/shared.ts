import { css } from "styled-components";
import { TypographyProps } from "../types";
import { Theme } from "../../../shared/theme";

export const shared = css<TypographyProps>`
  color: ${(props: TypographyProps) => props.style?.color || props?.theme?.palette?.gray900 || Theme.palette?.gray900};
  display: block;
  font-family: ${(props: TypographyProps) =>
    props.style?.fontFamily || props.theme?.fontFamily?.one || Theme.fontFamily?.one};
`;

export const fontWeight = (props: TypographyProps) => props.fontWeight || Theme.fontWeight.regular;
