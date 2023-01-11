import { css } from "styled-components";

import { InputProps } from "../../types";

import { errorColor, basicColor, hoverColor } from "./colors";
import { inputStyles } from "./input-styles";

export const wrapperStyles = css<InputProps>`
  width: ${(props) => (props.fullWidth ? "100%" : props.width || "400px")};
  min-width: ${(props) => (props.label ? "200px" : "3em")};
  padding: ${(props) => `${props.label ? "1.75em" : 0} 0 ${props.error ? "1.25em" : 0} 0`};
  margin: ${(props) => props.margin || "0em"};
  font-size: ${(props) => props.fontSize || "16px"};

  & * {
    font-size: 1em;
    line-height: 1;
  }

  & #input-content-wrapper {
    position: relative;
    display: flex;
  }

  & #input-left-icon-wrapper,
  & #input-right-icon-wrapper {
    width: 1.5em;
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  & #input-left-icon-wrapper {
    left: ${(props) => (props.variant === "standard" ? 0 : "0.75em")};
  }
  & #input-right-icon-wrapper {
    right: ${(props) => (props.variant === "standard" ? 0 : "0.75em")};
  }

  & label {
    position: absolute;
    top: -1.75em;
    left: 0;
    color: ${(props) => (props.disabled ? basicColor(props) : hoverColor(props))};
  }

  & input,
  & textarea {
    ${inputStyles}
  }

  & textarea {
    resize: none;
  }

  & p {
    font-size: 0.75em;
    position: absolute;
    left: 0;
    bottom: -1.5em;
    margin: 0;
    color: ${(props) => errorColor(props)};
  }
`;
