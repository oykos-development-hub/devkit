import styled from "styled-components";
import { ButtonProps } from "../../types";
import { shared } from "../shared";
import { Theme } from "../../../../shared/theme";
import {
  Body1,
  Body2,
  Button,
  Caption, Error,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Overline,
  Sub1,
  Sub2
} from "../../../typography/styles/variants";

const backgroundColor = (props: ButtonProps) =>
  props.style?.backgroundColor || props.theme?.palette?.light?.one || Theme.palette.light.one;
const color = (props: ButtonProps) => props.style?.color || props.theme?.palette?.main?.one || Theme.palette.main.one;

export const Secondary = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: ${(props) => color(props)};
  color: ${(props) => color(props)};

  &:hover:not([disabled]) {
    background-color: ${(props) => color(props) + " !important"};
    color: ${(props) => backgroundColor(props) + " !important"};
    
    ${H1}, ${H2}, ${H3}, ${H4}, ${H5}, ${H6}, ${Sub1}, ${Sub2}, ${Body1}, ${Body2}, ${Button}, ${Caption}, ${Overline}, ${Error} {
      color: ${(props) => backgroundColor(props) + " !important"};
    }
  }
  
  ${H1}, ${H2}, ${H3}, ${H4}, ${H5}, ${H6}, ${Sub1}, ${Sub2}, ${Body1}, ${Body2}, ${Button}, ${Caption}, ${Overline}, ${Error} {
    color: ${(props) => color(props)};
  }
`;
