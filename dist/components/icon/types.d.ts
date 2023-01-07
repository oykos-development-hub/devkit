import { Colors } from "../../shared/colors";
import { DefaultTheme } from "styled-components";
export declare enum Directions {
    bottom = "bottom",
    left = "left",
    right = "right",
    top = "top"
}
export interface IconProps {
    fill?: string;
    color?: Colors | keyof typeof Colors;
    width?: string | number;
    height?: string | number;
    onClick?: () => void;
    className?: string;
    direction?: Directions | keyof typeof Directions;
    theme?: DefaultTheme;
}
