import { css } from "styled-components";
import { ButtonProps } from "../types";

export const shared = css<ButtonProps>`
  align-items: center;
  border-radius: ${(props) => props.style?.borderRadius || props.theme?.borderRadius?.lg || "1em"};
  border: ${(props) => props.style?.borderWidth || props.theme?.borderWidth?.xs || "1px"} solid;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: ${(props) => props.style?.height || "fit-content"};
  justify-content: center;
  gap: ${(props) => props.style?.gap || "0.5em"};
  margin: ${(props) => props.style?.margin || "0em"};
  min-width: fit-content;
  padding: ${(props) => props.style?.padding || "1em 2em"};
  width: ${(props) => props.style?.width || "fit-content"};

  &:hover {
    transition: all 0.3s;
  }
  
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
