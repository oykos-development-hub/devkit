/// <reference types="react" />
export declare const Alert: import("react").FC<import("./types").AlertProps>;
export declare const Avatar: import("react").FC<import("./types").AvatarProps>;
export declare const Badge: import("react").FC<import("./types").BadgeProps>;
export declare const Breadcrumbs: ({ theme, onClick, items, separator, style, className }: import("./types").BreadcrumbsProps) => JSX.Element;
export declare const Button: ({ onClick, content, customContent, disabled, variant, size, style, theme, className, type, }: import("./types").ButtonProps) => JSX.Element;
export declare const Checkbox: import("react").FC<import("./types").CheckboxProps>;
export declare const Datepicker: import("react").FC<import("./types").CustomDatePickerProps>;
export declare const Divider: import("react").FC<import("./types").DividerProps>;
export declare const Dropdown: ({ options, theme, isDisabled, isSearchable, isMulti, noOptionsText, label, style, isClearable, backspaceRemovesValue, showArrow, closeMenuOnSelect, dropdownIndicator, controlIcon, leftOptionIcon, rightOptionIcon, onChange, placeholder, className, value, ...props }: import("./types").DropdownProps) => JSX.Element;
export declare const FileUpload: import("react").FC<import("./types").FileUploadProps>;
export declare const Input: import("react").ForwardRefExoticComponent<import("./types").InputProps & import("react").RefAttributes<unknown>>;
export declare const LeadingBadge: import("react").FC<import("./types").LeadingBadgeProps>;
export declare const Loader: (props: import("./types").LoaderProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Modal: ({ theme, title, content, open, onClose, variant, style, className }: import("./types").ModalProps) => JSX.Element;
export declare const Pin: ({ handleInput, length, type, className }: import("./types").IPinCode) => JSX.Element;
export declare const Radio: import("react").FC<import("./types").RadioProps>;
export declare const Switch: import("react").FC<import("./types").SwitchProps>;
export declare const Table: ({ theme, style, headerContent, bodyContent, titleElement, noDataMessage, className, }: import("./types").TableProps) => JSX.Element;
export declare const Tabs: ({ style, theme, tabs, onChange, className, activeTab }: import("./types").TabsProps) => JSX.Element;
export declare const Tooltip: ({ position, theme, content, children, title, variant, arrow, style, className, }: import("./types").TooltipProps) => JSX.Element;
export declare const Typography: (props: import("./types").TypographyProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const Pagination: import("react").FC<import("./types").PaginationProps>;
export declare const Accordion: import("react").FC<import("./types").AccordionProps>;
export declare const AccordionItem: import("react").FC<import("./types").AccordionData>;
export declare const Theme: import("styled-components").DefaultTheme;
export * from "./components/button/styles";
export * from "./components/modal/styles";
export * from "./components/tooltip/styles";
export * from "./components/dropdown/styles";
export * from "./components/icon";
export * from "./types";
export * from "./components/accordion/styles";
