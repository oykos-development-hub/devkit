/// <reference types="react" />
export declare const Button: (props: import("@oykos-development/devkit-react-ts-styled-components").ButtonProps) => import("react").JSX.Element;
export declare const Alert: (props: import("@oykos-development/devkit-react-ts-styled-components").AlertProps) => import("react").JSX.Element;
export declare const Tabs: (props: import("@oykos-development/devkit-react-ts-styled-components").TabsProps) => import("react").JSX.Element;
export declare const Table: <T extends import("./types").TableDataItem>(props: import("./types").SSSTableProps<T>) => import("react").JSX.Element;
export declare const Pagination: import("react").FC<import("./types").SSSPaginationProps>;
export declare const Badge: (props: import("@oykos-development/devkit-react-ts-styled-components").BadgeProps) => import("react").JSX.Element;
export declare const LeadingBadge: (props: import("@oykos-development/devkit-react-ts-styled-components").LeadingBadgeProps) => import("react").JSX.Element;
export declare const Modal: ({ footerText, leftButtonOnClick, leftButtonText, rightButtonOnClick, rightButtonText, width, buttonLoading, customModalContent, priority, ...props }: import("./types").SSSModalProps & {
    priority?: number | undefined;
}) => import("react").JSX.Element;
export declare const Breadcrumbs: (props: import("@oykos-development/devkit-react-ts-styled-components").BreadcrumbsProps) => import("react").JSX.Element;
export declare const Checkbox: (props: import("./types").SSSCheckboxProps) => import("react").JSX.Element;
export declare const Divider: (props: import("@oykos-development/devkit-react-ts-styled-components").DividerProps) => import("react").JSX.Element;
export declare const Switch: (props: import("./types").SSSSwitchProps) => import("react").JSX.Element;
export declare const Typography: (props: import("@oykos-development/devkit-react-ts-styled-components").TypographyProps) => import("react").JSX.Element;
export declare const Dropdown: (props: import("./types").SSSDropdownProps) => import("react").JSX.Element;
export declare const Input: import("react").ForwardRefExoticComponent<import("./types").SSSInputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const Tooltip: (props: import("./types").SSSTooltipProps) => import("react").JSX.Element;
export declare const FileUpload: (props: import("./types").SSSFileUploadProps) => import("react").JSX.Element;
export declare const Accordion: (props: import("@oykos-development/devkit-react-ts-styled-components").AccordionData) => import("react").JSX.Element;
export declare const Header: import("react").FC<import("./types").HeaderProps>;
export declare const Footer: import("react").FC<import("./types").FooterProps>;
export declare const Datepicker: (props: import("./types").SSSDatepickerProps) => import("react").JSX.Element;
export declare const Sidebar: import("react").ForwardRefExoticComponent<import("./types").SSSSidebarProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const Theme: import("styled-components").DefaultTheme;
export declare const Constants: {
    FE_MICRO_SERVICES: import("./services").ConstantsFeMicroServicesTypes;
    ROUTES_ID_MAP: {
        [key: number]: string;
    };
};
export * from "./components/icons";
export * from "./components/logos";
export * from "./services";
export * from "./types";
