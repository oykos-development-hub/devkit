import styled from "styled-components";
import { ButtonProps } from "../../types";
import { shared, disabledColor, color } from "../shared";

export const Primary = styled.button<ButtonProps>`
  ${shared};
  background-color: ${(props) => color(props)};
  border-color: ${(props) => color(props)};
  color: ${(props) => props.theme?.palette?.light.one || "white"};

  &:hover {
    background-color: transparent;
    color: ${(props) => color(props)};
  }

  &:disabled {
    background-color: ${(props) => disabledColor(props)};
    color: ${(props) => props.theme?.palette?.light.one || "white"};
    border-color: ${(props) => disabledColor(props)};
  }
`;
