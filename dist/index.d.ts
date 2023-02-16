/// <reference types="react" />
export declare const Button: ({ onClick, content, disabled, variant, size, style, theme, }: import("./types").ButtonProps) => JSX.Element;
export declare const Loader: (props: import("./types").LoaderProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Typography: (props: import("./types").TypographyProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Input: ({ name, value, theme, style, disabled, label, textarea, leftContent, rightContent, error, hint, placeholder, onChange, onBlur, onFocus, id, inputRef, ...props }: import("./types").InputProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Pin: ({ handleInput, length, type }: import("./types").IPinCode) => JSX.Element;
export declare const Checkbox: import("react").FC<import("./types").CheckboxProps>;
export declare const Radio: import("react").FC<import("./types").RadioProps>;
export * from "./components/icon";
export * from "./types";
