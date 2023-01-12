import styled from "styled-components";
import { ButtonProps } from "../../types";
import { shared, disabledColor, color } from "../shared";

export const Secondary = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: ${(props) => color(props)};
  color: ${(props) => color(props)};

  &:hover {
    background-color: ${(props) => color(props)};
    color: ${(props) => props.theme?.palette?.light?.one || "white"};
  }
  &:disabled {
    background-color: transparent;
    color: ${(props) => disabledColor(props)};
    border-color: ${(props) => disabledColor(props)};
  }
`;
