import styled from "styled-components";
import { ButtonProps } from "../types";
import { shared, disabledColor, tertiaryColor } from "./shared";

export const StyledTertiaryButton = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: transparent;
  color: ${(props: ButtonProps) => tertiaryColor(props)};

  &:disabled {
    border-color: transparent;
    color: ${(props: ButtonProps) => disabledColor(props)};
  }
`;
