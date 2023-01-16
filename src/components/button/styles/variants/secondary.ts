import styled from "styled-components";
import { ButtonProps } from "../../types";
import { shared } from "../shared";
import { Theme } from "../../../../shared/theme";

const backgroundColor = (props: ButtonProps) => props.style?.backgroundColor || props.theme?.palette?.light?.one || Theme.palette.light.one;
const color = (props: ButtonProps) => props.style?.color || props.theme?.palette?.main?.one || Theme.palette.main.one;

export const Secondary = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: ${(props) => color(props)};
  color: ${(props) => color(props)};
  
  &:hover:not([disabled]) {
    background-color: ${(props) => color(props) + ' !important'};
    color: ${(props) => backgroundColor(props) + ' !important'};
  }
`;
