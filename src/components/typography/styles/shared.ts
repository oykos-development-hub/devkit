import { css } from "styled-components";
import { TypographyProps } from "../types";
import { Theme } from "../../../shared/theme";

export const shared = css<TypographyProps>`
  color: ${(props) => props.style?.color || props?.theme?.palette?.dark?.one || Theme.palette?.dark?.one};
  display: block;
  font-family: ${(props) => props.style?.fontFamily || props.theme?.fontFamily?.one || Theme.fontFamily?.one};
  margin: ${(props: TypographyProps) => props.style?.margin || "initial"};
`;
