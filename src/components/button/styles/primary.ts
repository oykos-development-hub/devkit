import styled from "styled-components";
import { ButtonProps } from "../types";
import { shared } from "./shared";

export const StyledPrimaryButton = styled.button<ButtonProps>`
  ${shared};
  background-color: ${(props: ButtonProps) => props.primaryColor || props.theme?.palette?.main?.one || "blue"};
  border-color: ${(props: ButtonProps) => props.primaryColor || props.theme?.palette?.main?.one || "blue"};
  color: ${(props: ButtonProps) => props.theme?.palette?.light.one || "white"};

  &:hover {
    background-color: transparent;
    border-color: ${(props: ButtonProps) => props.primaryColor || props.theme?.palette?.main?.one || "blue"};
    color: ${(props: ButtonProps) => props.primaryColor || props.theme?.palette?.main?.one || "blue"};
  }
  &:disabled {
    background-color: ${(props: ButtonProps) => props.theme?.palette?.light?.six || "lightgrey"};
    color: ${(props: ButtonProps) => props.theme?.palette?.light.one || "white"};
    border-color: ${(props: ButtonProps) => props.theme?.palette?.light?.six || "lightgrey"};
  }
`;
