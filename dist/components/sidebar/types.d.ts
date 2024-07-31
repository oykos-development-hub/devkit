import { ReactNode } from "react";
export type SidebarItemProps = {
    id: number;
    title: string;
    children?: Array<SidebarItemProps>;
    parentId?: number;
    route?: string;
};
export type UserProps = {
    avatar?: string | ReactNode;
    name?: string;
    unit?: string;
};
export interface SSSSidebarProps {
    data: Array<SidebarItemProps>;
    onClick: (item: SidebarItemProps) => void;
    onSettingsClick: (item: SidebarItemProps) => void;
    user?: UserProps;
    settingsData: Array<SidebarItemProps>;
    logout?: () => void;
    activeItemId?: number;
}
export interface SettingsSidebarProps {
    data: Array<SidebarItemProps>;
    onClick: (item: SidebarItemProps) => void;
    open: boolean;
    mainSidebarCollapsed: boolean;
}
