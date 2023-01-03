import { css } from "styled-components";
import { ButtonProps } from "../types";

const colorVariants = {
    primary: (props: ButtonProps) => props.primaryColor || props.theme?.palette?.main?.one || "blue",
    secondary: (props: ButtonProps) => props.secondaryColor || props.theme?.palette?.info?.one || "green",
    tertiary: (props: ButtonProps) => props.tertiaryColor || props.theme?.palette?.important?.two || "red",
};
export const { primary: primaryColor, secondary: secondaryColor, tertiary: tertiaryColor } = colorVariants;

export const disabledColor = (props: ButtonProps) => props.theme?.palette?.light?.six || "lightgrey";

export const shared = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props: ButtonProps) => props.gap || "0.5em"};
  width: ${(props: ButtonProps) => props.width || "fit-content"};
  min-width: fit-content;
  height: ${(props: ButtonProps) => props.height || "fit-content"};
  border-radius: ${(props: ButtonProps) => props.borderRadius || props.theme?.borderRadius?.lg || "1em"};
  border: ${(props: ButtonProps) => props.borderWidth || props.theme?.borderWidth?.xs || "1px"} solid;
  box-sizing: border-box;
  padding: ${(props: ButtonProps) => props.padding || "1em 2em"};
  margin: ${(props: ButtonProps) => props.margin || "1em"};
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
    border-color: ${(props: ButtonProps) => colorVariants[props.variant || "primary"]};
  }

  &:disabled {
    cursor: initial;
  }
`;
