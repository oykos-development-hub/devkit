import React, { Ref, forwardRef } from "react";
import { TableAction } from "./types";
import { Menu, MenuItem } from "./styles/actionsMenu";
import { SSSTypography } from "../typography";

interface ActionsMenuProps {
  actions: TableAction[];
  onActionClick: (e: any, action: (row: any, e: any) => void) => void;
  row: any;
  onClose: () => void;
}

const ActionsMenu = forwardRef(
  ({ actions, onActionClick, row, onClose }: ActionsMenuProps, ref: Ref<HTMLUListElement>) => {
    return (
      <Menu ref={ref} onMouseOver={(e) => e.stopPropagation()}>
        {actions.map((action) =>
          action.shouldRender !== undefined && !action.shouldRender(row) ? null : (
            <MenuItem
              disabled={action?.disabled && action.disabled(row)}
              key={action.name}
              onClick={(e) => {
                const isDisabled = action.disabled ? action.disabled(row) : false;

                if (isDisabled) {
                  return;
                }
                onActionClick(e, action.onClick);
                onClose();
              }}
            >
              <SSSTypography variant="bodyMedium" content={action.name} />
            </MenuItem>
          ),
        )}
      </Menu>
    );
  },
);

ActionsMenu.displayName = "ActionsMenu";

export default ActionsMenu;
