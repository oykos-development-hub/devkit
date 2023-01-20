import { css } from "styled-components";
import { InputProps } from "../../types";
import { errorColor, basicColor, hoverColor, confirmedColor } from "./colors";
import { inputStyles } from "./input-styles";
import { Theme } from "../../../../shared/theme";

export const wrapperStyles = css<InputProps>`
  font-size: ${(props) => props.style?.fontSize || "16px"};
  font-family: ${(props) => props.style?.fontFamily || props.theme?.fontFamily?.one || Theme.fontFamily?.one};
  margin: ${(props) => props.style?.margin || "0em"};
  min-width: ${(props) => (props.label ? "200px" : "3em")};
  padding: ${(props) => `${props.label ? "1.75em" : 0} 0 ${props.error ? "1.25em" : 0} 0`};
  width: ${(props) => (props.fullWidth ? "100%" : props.style?.width || "400px")};
  color: ${(props) => (props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : basicColor(props))};

  & * {
    font-size: 1em;
    line-height: 1;
  }

  & .input-content-wrapper {
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
