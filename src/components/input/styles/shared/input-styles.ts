import { css } from "styled-components";
import { InputProps } from "../../types";

import { errorColor, basicColor, hoverColor, confirmedColor } from "./colors";

export const inputStyles = css<InputProps>`
  width: 100%;
  height: ${(props) => props.style?.height || (props.textarea ? "6em" : "2.5em")};
  min-height: 2em;
  display: flex;
  box-sizing: border-box;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: ${(props) => (!props.textarea ? (props.iconLeft ? "2.25em" : "0em") : "0em")};
  padding-right: ${(props) => (!props.textarea ? (props.iconRight ? "2.25em" : "0em") : "0em")};
  border-style: solid;
  border-color: ${(props) =>
    props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : basicColor(props)};
  border-width: ${(props) => `0 0 ${props.theme?.borderWidth?.xs || "1px"} 0`};
  outline: none;
  color: ${(props) => (props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : basicColor(props))};

  &:hover {
    border-color: ${(props) =>
      props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : hoverColor(props)};
  }

  &:focus {
    border-color: ${(props) =>
      props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : hoverColor(props)};
  }

  &:disabled {
    border-color: ${(props) => basicColor(props)};
    color: ${(props) => basicColor(props)};
    background-color: transparent;

    &::placeholder {
      color: ${(props) => basicColor(props)};
    }
  }

  &::placeholder {
    color: ${(props) =>
      props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : basicColor(props)};
  }
`;
