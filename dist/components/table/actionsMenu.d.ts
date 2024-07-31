import React from "react";
import { TableAction } from "./types";
interface ActionsMenuProps {
    actions: TableAction[];
    onActionClick: (e: any, action: (row: any, e: any) => void) => void;
    row: any;
    onClose: () => void;
}
declare const ActionsMenu: React.ForwardRefExoticComponent<ActionsMenuProps & React.RefAttributes<HTMLUListElement>>;
export default ActionsMenu;
