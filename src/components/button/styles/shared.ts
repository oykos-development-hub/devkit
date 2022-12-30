import { css } from "styled-components";
import { ButtonProps } from "../types";

export const shared = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props: ButtonProps) => props.gap || "0.5em"};
  width: ${(props: ButtonProps) => props.width || "fit-content"};
  min-width: fit-content;
  height: ${(props: ButtonProps) => props.height || "fit-content"};
  border-radius: ${(props: ButtonProps) => props.borderRadius || props.theme?.borderRadius?.lg || "1em"};
  border: ${(props: ButtonProps) => props.borderWidth || props.theme?.borderWidth?.xs || "1px"} solid;
  box-sizing: border-box;
  padding: ${(props: ButtonProps) => props.padding || "1em 2em"};
  margin: ${(props: ButtonProps) => props.margin || "1em"};
  transition: all 0.3s;
  cursor: pointer;
  &:disabled {
    cursor: initial;
  }
`;
