import { InputProps } from "../../types";

// colors:
export const basicColor = (props: InputProps) => props.borderColor || props.theme?.palette?.light?.four || "lightgrey";

export const errorColor = (props: InputProps) => props.errorColor || props.theme?.palette?.important?.two || "red";

export const focusColor = (props: InputProps) => props.theme?.palette?.main?.two || "dodgerblue";

export const hoverColor = (props: InputProps) => props.theme?.palette?.dark?.one || "black";

export const confirmedColor = (props: InputProps) => props.theme?.palette?.info?.one || "#7CFC00";
