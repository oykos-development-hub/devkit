import styled from "styled-components";
import { ButtonProps } from "../../types";
import { shared } from "../shared";
import { Theme } from "../../../../shared/theme";

const backgroundColor = (props: ButtonProps) =>
  props.style?.backgroundColor || props.theme?.palette?.info?.one || Theme.palette.info.one;
const borderColor = (props: ButtonProps) =>
  props.style?.borderColor || props.style?.backgroundColor || props.theme?.palette?.info?.one || Theme.palette.info.one;
const color = (props: ButtonProps) => props.style?.color || props.theme?.palette?.light?.one || Theme.palette.light.one;

export const Primary = styled.button<ButtonProps>`
  ${shared};
  background-color: ${(props) => backgroundColor(props)};
  border-color: ${(props) => borderColor(props)};
  color: ${(props) => color(props)};

  &:hover:not([disabled]) {
    background-color: transparent !important;
    color: ${(props) => backgroundColor(props)};
  }
`;
