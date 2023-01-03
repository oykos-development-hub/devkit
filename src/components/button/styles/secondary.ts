import styled from "styled-components";
import { ButtonProps } from "../types";
import { shared, disabledColor, secondaryColor } from "./shared";

export const StyledSecondaryButton = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: ${(props: ButtonProps) => secondaryColor(props)};
  color: ${(props: ButtonProps) => secondaryColor(props)};

  &:hover {
    background-color: ${(props: ButtonProps) => secondaryColor(props)};
    color: ${(props: ButtonProps) => props.theme?.palette?.light?.one || "white"};
  }
  &:disabled {
    background-color: transparent;
    color: ${(props: ButtonProps) => disabledColor(props)};
    border-color: ${(props: ButtonProps) => disabledColor(props)};
  }
`;
