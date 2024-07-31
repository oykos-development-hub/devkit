import React, { forwardRef } from "react";
import { Menu, MenuItem } from "./styles/actionsMenu";
import { SSSTypography } from "../typography";
const ActionsMenu = forwardRef(({ actions, onActionClick, row, onClose }, ref) => {
    return (React.createElement(Menu, { ref: ref, onMouseOver: (e) => e.stopPropagation() }, actions.map((action) => action.shouldRender !== undefined && !action.shouldRender(row) ? null : (React.createElement(MenuItem, { disabled: (action === null || action === void 0 ? void 0 : action.disabled) && action.disabled(row), key: action.name, onClick: (e) => {
            const isDisabled = action.disabled ? action.disabled(row) : false;
            if (isDisabled) {
                return;
            }
            onActionClick(e, action.onClick);
            onClose();
        } },
        React.createElement(SSSTypography, { variant: "bodyMedium", content: action.name }))))));
});
ActionsMenu.displayName = "ActionsMenu";
export default ActionsMenu;
//# sourceMappingURL=actionsMenu.js.map