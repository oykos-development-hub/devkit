/// <reference types="react" />
export declare const Alert: import("react").FC<import("./types").AlertProps>;
export declare const Avatar: import("react").FC<import("./types").AvatarProps>;
export declare const Badge: import("react").FC<import("./types").BadgeProps>;
export declare const Breadcrumbs: ({ theme, onClick, items, separator, style }: import("./types").BreadcrumbsProps) => JSX.Element;
export declare const Button: ({ onClick, content, customContent, disabled, variant, size, style, theme, }: import("./types").ButtonProps) => JSX.Element;
export declare const Checkbox: import("react").FC<import("./types").CheckboxProps>;
export declare const Datepicker: import("react").FC<import("./types").DatepickerTypes>;
export declare const Divider: import("react").FC<import("./types").DividerProps>;
export declare const Dropdown: ({ options, theme, isDisabled, isSearchable, isMulti, noOptionsText, label, style, isClearable, backspaceRemovesValue, showArrow, closeMenuOnSelect, dropdownIndicator, controlIcon, leftOptionIcon, rightOptionIcon, onChange, placeholder, ...props }: import("./types").DropdownProps) => JSX.Element;
export declare const FileUpload: import("react").FC<import("./types").FileUploadProps>;
export declare const Input: ({ name, value, theme, style, disabled, label, textarea, leftContent, rightContent, error, hint, placeholder, onChange, onBlur, onFocus, id, inputRef, cols, rows, ...props }: import("./types").InputProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const LeadingBadge: import("react").FC<import("./types").LeadingBadgeProps>;
export declare const Loader: (props: import("./types").LoaderProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Modal: ({ theme, title, content, open, onClose, variant, style, }: import("./types").ModalProps) => JSX.Element;
export declare const Pin: ({ handleInput, length, type }: import("./types").IPinCode) => JSX.Element;
export declare const Radio: import("react").FC<import("./types").RadioProps>;
export declare const Switch: import("react").FC<import("./types").SwitchProps>;
export declare const Table: ({ theme, style, headerContent, bodyContent, titleElement, noDataMessage, }: import("./types").TableProps) => JSX.Element;
export declare const Tabs: ({ style, theme, tabs, onChange }: import("./types").TabsProps) => JSX.Element;
export declare const Tooltip: ({ position, theme, content, children, title, variant, arrow, style, }: import("./types").TooltipProps) => JSX.Element;
export declare const Typography: (props: import("./types").TypographyProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Pagination: import("react").FC<import("./types").PaginationProps>;
export declare const Accordion: import("react").FC<import("./types").AccordionProps>;
export * from "./components/button/styles";
export * from "./components/modal/styles";
export * from "./components/tooltip/styles";
export * from "./components/icon";
export * from "./types";
