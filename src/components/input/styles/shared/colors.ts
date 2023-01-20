import { InputProps } from "../../types";
import { Theme } from "../../../../shared/theme";

export const basicColor = (props: InputProps) =>
  props.style?.borderColor || props.theme?.palette?.light?.four || Theme?.palette?.light?.four;
export const errorColor = (props: InputProps) =>
  props.errorColor || props.theme?.palette?.important?.two || Theme?.palette?.important?.two;
export const focusColor = (props: InputProps) => props.theme?.palette?.main?.two || Theme?.palette?.main?.two;
export const hoverColor = (props: InputProps) => props.theme?.palette?.dark?.one || Theme?.palette?.dark?.one;
export const confirmedColor = (props: InputProps) => props.theme?.palette?.info?.one || Theme?.palette?.info?.one;
