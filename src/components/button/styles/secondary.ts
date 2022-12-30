import styled from "styled-components";
import { ButtonProps } from "../types";
import { shared } from "./shared";

export const StyledSecondaryButton = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: ${(props: ButtonProps) => props.secondaryColor || props.theme?.palette?.info?.one || "green"};
  color: ${(props: ButtonProps) => props.secondaryColor || props.theme?.palette?.info?.one || "green"};

  &:hover {
    background-color: ${(props: ButtonProps) => props.secondaryColor || props.theme?.palette?.info?.one || "green"};
    color: ${(props: ButtonProps) => props.theme?.palette?.light?.one || "white"};
  }
  &:disabled {
    background-color: transparent;
    color: ${(props: ButtonProps) => props.theme?.palette?.light?.six || "lightgrey"};
    border-color: ${(props: ButtonProps) => props.theme?.palette?.light?.six || "lightgrey"};
  }
`;
