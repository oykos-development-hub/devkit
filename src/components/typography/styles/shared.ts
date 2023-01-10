import { css } from "styled-components";
import { TypographyProps } from "../types";

export const shared = css<TypographyProps>`
  color: ${(props) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props) => props.fontFamily || props.theme?.fontFamily.one || "Rubik, sans-serif"};
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;
