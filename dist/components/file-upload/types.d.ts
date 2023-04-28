import { ReactElement, CSSProperties } from "react";
import { DefaultTheme } from "styled-components";
import { ButtonSizes, ButtonVariants } from "../button/types";
export declare enum FileUploadVariants {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}
export interface FileUploadProps {
    variant: FileUploadVariants | `${FileUploadVariants}`;
    onUpload: (files: FileList) => void;
    customContent?: JSX.Element | ReactElement | string;
    customButton?: JSX.Element | ReactElement;
    buttonVariant?: ButtonVariants | `${ButtonVariants}`;
    buttonSize?: ButtonSizes | `${ButtonSizes}`;
    buttonText?: string;
    hint?: JSX.Element | ReactElement | string;
    note?: JSX.Element | ReactElement | string;
    icon?: JSX.Element | ReactElement | null;
    multiple?: boolean;
    style?: CSSProperties;
    theme?: DefaultTheme;
    className?: string;
    disabled?: boolean;
}
