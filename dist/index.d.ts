/// <reference types="react" />
export declare const Button: ({ onClick, content, disabled, variant, size, style, theme, }: import("./types").ButtonProps) => JSX.Element;
export declare const Loader: (props: import("./types").LoaderProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Typography: (props: import("./types").TypographyProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Input: ({ name, value, theme, style, disabled, label, textarea, leftContent, rightContent, error, hint, placeholder, onChange, onBlur, onFocus, id, inputRef, ...props }: import("./types").InputProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Pin: ({ handleInput, length, type }: import("./types").IPinCode) => JSX.Element;
export declare const Pagination: ({ data, itemsPerPage, previousLabel, nextLabel, renderContent, renderPaginationText, theme, variant, style, displayPages, pageRangeDisplayed, marginPagesDisplayed, fullWidth, }: import("./types").PaginationProps) => JSX.Element;
export declare const Tooltip: ({ position, theme, content, children, title, variant, arrow, style, }: import("./types").TooltipProps) => JSX.Element;
export declare const Dropdown: ({ options, theme, isDisabled, isSearchable, isMulti, noOptionsText, label, style, showArrow, controlIcon, leftOptionIcon, rightOptionIcon, onChange, placeholder, ...props }: import("./types").DropdownProps) => JSX.Element;
export * from "./components/icon";
export * from "./types";
