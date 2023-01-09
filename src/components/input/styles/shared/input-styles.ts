import { css } from "styled-components";
import { InputProps } from "../../types";

import { errorColor, basicColor, hoverColor, focusColor, confirmedColor } from "./colors";

const defaultHeight = {
  standard: "2.5em",
  outlined: "3em",
};

const paddingLeft = {
  standard: (props: InputProps) => (!props.textarea ? (props.iconLeft ? "2.25em" : "0em") : "0em"),
  outlined: (props: InputProps) => (!props.textarea ? (props.iconLeft ? "3em" : "1em") : "1em"),
};

const paddingRight = {
  standard: (props: InputProps) => (!props.textarea ? (props.iconRight ? "2.25em" : "0em") : "0em"),
  outlined: (props: InputProps) => (!props.textarea ? (props.iconRight ? "3em" : "1em") : "1em"),
};

const borderWidth = {
  standard: (props: InputProps) => `0 0 ${props.theme?.borderWidth?.xs || "1px"} 0`,
  outlined: (props: InputProps) => props.theme?.borderWidth?.xs || "1px",
};

// border-width when input is in focus
const focusBorderWidth = {
  standard: borderWidth.standard,
  outlined: (props: InputProps) => props.theme?.borderWidth?.sm || "2px",
};

// border-color when input is in focus
const focusBorderColor = {
  standard: (props: InputProps) =>
    props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : hoverColor(props),
  outlined: (props: InputProps) =>
    props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : focusColor(props),
};

const borderRadius = {
  standard: 0,
  outlined: (props: InputProps) => props.borderRadius || props.theme?.borderRadius?.md || "0.5em",
};

// input styles
export const inputStyles = css<InputProps>`
  width: 100%;
  height: ${(props: InputProps) => props.height || (props.textarea ? "6em" : defaultHeight[props.variant])};
  min-height: 2em;
  display: flex;
  box-sizing: border-box;
  padding: 0.5em 0em;
  padding-left: ${(props: InputProps) => paddingLeft[props.variant]};
  padding-right: ${(props: InputProps) => paddingRight[props.variant]};
  border-style: solid;
  border-color: ${(props: InputProps) =>
    props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : basicColor(props)};
  border-width: ${(props: InputProps) => borderWidth[props.variant]};
  border-radius: ${(props: InputProps) => borderRadius[props.variant]};
  outline: none;

  &:hover {
    border-color: ${(props: InputProps) =>
      props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : hoverColor(props)};
  }
  &:focus {
    border-color: ${(props: InputProps) => focusBorderColor[props.variant]};
    border-width: ${(props: InputProps) => focusBorderWidth[props.variant]};
  }
  &:disabled {
    border-color: ${(props: InputProps) => basicColor(props)};
    color: ${(props: InputProps) => basicColor(props)};
    background-color: transparent;

    &::placeholder {
      color: ${(props: InputProps) => basicColor(props)};
    }
  }
`;
