import styled from "styled-components";
import { ButtonProps } from "../../types";
import { shared, disabledColor, color } from "../shared";

export const Tertiary = styled.button<ButtonProps>`
  ${shared};
  background-color: transparent;
  border-color: transparent;
  color: ${(props) => color(props)};
  padding: 0;

  &:disabled {
    border-color: transparent;
    color: ${(props) => disabledColor(props)};
  }

  &:hover {
    text-decoration: underline;
  }
`;
