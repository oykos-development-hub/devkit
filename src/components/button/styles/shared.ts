import { css } from "styled-components";
import { ButtonProps } from "../types";

export const color = (props: ButtonProps) => props.color || props.theme?.palette?.main?.one || "blue";

export const disabledColor = (props: ButtonProps) => props.theme?.palette?.light?.six || "lightgrey";

export const shared = css<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap || "0.5em"};
  width: ${(props) => props.width || "fit-content"};
  min-width: fit-content;
  height: ${(props) => props.height || "fit-content"};
  border-radius: ${(props) => props.borderRadius || props.theme?.borderRadius?.lg || "1em"};
  border: ${(props) => props.borderWidth || props.theme?.borderWidth?.xs || "1px"} solid;
  box-sizing: border-box;
  padding: ${(props) => props.padding || "1em 2em"};
  margin: ${(props) => props.margin || "0em"};
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
  }
  &:disabled {
    cursor: initial;
  }
`;
