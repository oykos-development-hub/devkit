import styled from "styled-components";
import { ButtonProps } from "../types";
import { shared } from "./shared";

export const StyledTertiaryButton = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: transparent;
  color: ${(props: ButtonProps) => props.tertiaryColor || props.theme?.palette?.important?.two || "red"};

  &:hover {
    border-color: ${(props: ButtonProps) => props.tertiaryColor || props.theme?.palette?.important?.two || "red"};
  }
  &:disabled {
    border-color: transparent;
    color: ${(props: ButtonProps) => props.theme?.palette?.light?.six || "lightgrey"};
  }
`;
