import { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";
export declare enum Variants {
    light = "light",
    dark = "dark"
}
export interface ModalProps {
    theme?: DefaultTheme;
    title?: string;
    content?: ReactElement | string;
    open?: boolean;
    onClose: () => void;
    style?: CSSProperties;
    variant: Variants | `${Variants}`;
    className?: string;
}
