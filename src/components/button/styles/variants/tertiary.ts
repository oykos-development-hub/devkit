import styled from "styled-components";
import { ButtonProps } from "../../types";
import { shared } from "../shared";
import { Theme } from "../../../../shared/theme";
import {
  Body1,
  Body2,
  Button,
  Caption,
  Error,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Overline,
  Sub1,
  Sub2,
} from "../../../typography/styles/variants";

const color = (props: ButtonProps) => props.style?.color || props.theme?.palette?.error500 || Theme.palette.error500;

export const Tertiary = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: transparent;
  color: ${(props) => color(props)};
  padding: 0;

  &:hover:not([disabled]) {
    text-decoration: underline;
  }

  ${H1}, ${H2}, ${H3}, ${H4}, ${H5}, ${H6}, ${Sub1}, ${Sub2}, ${Body1}, ${Body2}, ${Button}, ${Caption}, ${Overline}, ${Error} {
    color: ${(props) => color(props)};
  }
`;
