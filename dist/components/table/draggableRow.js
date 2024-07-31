import React from "react";
import { CellContentType } from "./types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TableRow from "./styles/tableRow";
import { SSSCheckbox } from "../checkbox";
import { SSSTypography } from "../typography";
import { SSSBadge } from "../badge";
import DotIcon from "../icons/variations/DotIcon";
import { Theme } from "../../shared/theme";
import BadgeLabel from "./styles/badgeLabel";
export const DraggableRow = ({ row, rowIndex, isDraggable, onRowSelect, selectedRowId, checkedRows, checkboxes, disabledCheckbox, onCheck, tableHeads, renderActions, renderCustomControls, }) => {
    const { transform, transition, setNodeRef, isDragging, attributes, listeners } = useSortable({
        id: row.id,
        disabled: !isDraggable,
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 1 : undefined,
        position: "relative",
    };
    return (React.createElement(TableRow, Object.assign({ key: row.id, onClick: (e) => onRowSelect(row), selected: selectedRowId === row.id, ref: setNodeRef, style: style }, attributes, listeners),
        checkboxes && checkedRows && (React.createElement("td", null,
            React.createElement("div", { onClick: (e) => {
                    if (disabledCheckbox && disabledCheckbox(row)) {
                        e.stopPropagation();
                    }
                }, style: { display: "flex", justifyContent: "center" } }, React.createElement(SSSCheckbox, { name: "itemCheckbox", onChange: (checked, e) => onCheck(checked, e, false, row), checked: checkedRows.includes(row.id), disabled: disabledCheckbox ? disabledCheckbox(row) : false })))),
        tableHeads.map(({ accessor, type, renderContents, shouldRender }, index) => {
            if (shouldRender !== undefined && !shouldRender)
                return null;
            const tData = row[accessor] ? row[accessor] : "";
            let content;
            switch (type) {
                case CellContentType.TEXT:
                    content = React.createElement(SSSTypography, { content: tData });
                    break;
                case CellContentType.BADGE:
                    content = (React.createElement(SSSBadge, { leftSlot: React.createElement(DotIcon, { style: { fill: tData ? Theme.palette.success500 : Theme.palette.error500 } }), content: React.createElement(BadgeLabel, { variant: "bodyMedium", content: tData ? "Aktivan" : "Neaktivan", status: tData }), variant: tData ? "success" : "warning" }));
                    break;
                case CellContentType.TABLE_ACTIONS:
                    content = renderCustomControls ? renderCustomControls(row) : renderActions && renderActions(row);
                    break;
                case CellContentType.CUSTOM:
                    content = renderContents && renderContents(tData, row, rowIndex);
                    break;
                default:
                    content = React.createElement(SSSTypography, { content: tData });
                    break;
            }
            return React.createElement("td", { key: `${accessor}-${index}` }, content);
        })));
};
//# sourceMappingURL=draggableRow.js.map