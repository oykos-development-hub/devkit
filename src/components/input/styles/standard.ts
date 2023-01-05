import styled from "styled-components";
import { InputProps } from "../types";
import { errorColor, focusColor } from "./shared/colors";
import { wrapperStyles } from "./shared/wrapper-styles";

export const StyledMainWrapper = styled.div<InputProps>`
  ${wrapperStyles}

  & #input-content-wrapper:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: ${(props: InputProps) => (props.error ? errorColor(props) : focusColor(props))};
    transform: scale(0, 1);
    transition: transform 0.3s;
  }

  & #input-content-wrapper:focus-within:after {
    transform: scale(1, 1);
    transition: all 0.3s;
  }
`;
