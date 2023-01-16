import styled from "styled-components";
import { ButtonProps } from "../../types";
import { shared } from "../shared";
import { Theme } from "../../../../shared/theme";

const color = (props: ButtonProps) => props.style?.color || props.theme?.palette?.dark?.two || Theme.palette.dark.two;

export const Tertiary = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: transparent;
  color: ${(props) => color(props)};
  padding: 0;

  &:hover:not([disabled]) {
    text-decoration: underline;
  }
`;
