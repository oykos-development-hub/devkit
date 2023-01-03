import styled from "styled-components";
import { ButtonProps } from "../types";
import { shared, disabledColor, primaryColor } from "./shared";

export const StyledPrimaryButton = styled.button<ButtonProps>`
  ${shared};
  background-color: ${(props: ButtonProps) => primaryColor(props)};
  border-color: ${(props: ButtonProps) => primaryColor(props)};
  color: ${(props: ButtonProps) => props.theme?.palette?.light.one || "white"};

  &:hover {
    background-color: transparent;
    color: ${(props: ButtonProps) => primaryColor(props)};
  }

  &:disabled {
    background-color: ${(props: ButtonProps) => disabledColor(props)};
    color: ${(props: ButtonProps) => props.theme?.palette?.light.one || "white"};
    border-color: ${(props: ButtonProps) => disabledColor(props)};
  }
`;
