import styled from "styled-components";
import { InputProps } from "../types";
import { errorColor, confirmedColor, focusColor } from "./shared/colors";
import { wrapperStyles } from "./shared/wrapper-styles";

export const StyledMainWrapper = styled.div<InputProps>`
  ${wrapperStyles}

  & input, & textarea {
    height: ${(props) => props.style?.height || (props.textarea ? "6em" : "3em")};
    padding-left: ${(props) => (!props.textarea ? (props.iconLeft ? "3em" : "1em") : "1em")};
    padding-right: ${(props) => (!props.textarea ? (props.iconLeft ? "3em" : "1em") : "1em")};
    border-width: ${(props) => props.theme?.borderWidth?.xs || "1px"};
    border-radius: ${(props) => props.style?.borderRadius || props.theme?.borderRadius?.md || "0.5em"};

    &:focus {
      border-width: ${(props) => props.theme?.borderWidth?.sm || "2px"};
      border-color: ${(props) =>
        props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : focusColor(props)};
    }
  }
`;
