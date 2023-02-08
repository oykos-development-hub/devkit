/// <reference types="react" />
export declare const Button: ({ onClick, content, disabled, variant, size, style, theme, }: import("./types").ButtonProps) => JSX.Element;
export declare const Loader: (props: import("./types").LoaderProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Typography: (props: import("./types").TypographyProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Dropdown: ({ options, theme, isSearchable, noOptionsText, label, style, showArrow, controlIcon, optionIcon, onChange, ...props }: import("./types").DropdownProps) => JSX.Element;
export * from "./components/icon";
