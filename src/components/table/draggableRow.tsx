import React, { CSSProperties } from "react";
import { CellContentType, TableDataItem, TableHead } from "./types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TableRow from "./styles/tableRow";
import { SSSCheckbox } from "../checkbox";
import { SSSTypography } from "../typography";
import { SSSBadge } from "../badge";
import DotIcon from "../icons/variations/DotIcon";
import { Theme } from "../../shared/theme";
import BadgeLabel from "./styles/badgeLabel";

interface DraggableRowProps {
  row: TableDataItem;
  rowIndex: number;
  isDraggable?: boolean;
  onRowSelect: (row: TableDataItem) => void;
  selectedRowId?: number;
  checkboxes?: boolean;
  checkedRows?: number[];
  disabledCheckbox?: (row: TableDataItem) => boolean;
  onCheck: (checked: boolean, e: MouseEvent, all?: boolean, row?: TableDataItem) => void;
  tableHeads: TableHead[];
  renderCustomControls?: (row: TableDataItem) => React.ReactElement | null;
  renderActions?: (row: TableDataItem) => React.ReactElement | null;
}
export const DraggableRow = ({
  row,
  rowIndex,
  isDraggable,
  onRowSelect,
  selectedRowId,
  checkedRows,
  checkboxes,
  disabledCheckbox,
  onCheck,
  tableHeads,
  renderActions,
  renderCustomControls,
}: DraggableRowProps) => {
  const { transform, transition, setNodeRef, isDragging, attributes, listeners } = useSortable({
    id: row.id,
    disabled: !isDraggable,
  });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform), //let dnd-kit do its thing
    transition: transition,
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 1 : undefined,
    position: "relative",
  };

  return (
    <TableRow
      key={row.id}
      onClick={(e) => onRowSelect(row)}
      selected={selectedRowId === row.id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {checkboxes && checkedRows && (
        <td>
          <div
            onClick={(e) => {
              if (disabledCheckbox && disabledCheckbox(row)) {
                e.stopPropagation();
              }
            }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {
              <SSSCheckbox
                name={"itemCheckbox"}
                onChange={(checked: boolean, e: MouseEvent) => onCheck(checked, e, false, row)}
                checked={checkedRows.includes(row.id)}
                disabled={disabledCheckbox ? disabledCheckbox(row) : false}
              />
            }
          </div>
        </td>
      )}
      {tableHeads.map(({ accessor, type, renderContents, shouldRender }, index) => {
        if (shouldRender !== undefined && !shouldRender) return null;

        const tData = row[accessor] ? row[accessor] : "";

        let content;

        switch (type) {
          case CellContentType.TEXT:
            content = <SSSTypography content={tData} />;
            break;
          case CellContentType.BADGE:
            content = (
              <SSSBadge
                leftSlot={<DotIcon style={{ fill: tData ? Theme.palette.success500 : Theme.palette.error500 }} />}
                content={<BadgeLabel variant="bodyMedium" content={tData ? "Aktivan" : "Neaktivan"} status={tData} />}
                variant={tData ? "success" : "warning"}
              />
            );
            break;
          case CellContentType.TABLE_ACTIONS:
            content = renderCustomControls ? renderCustomControls(row) : renderActions && renderActions(row);
            break;
          case CellContentType.CUSTOM:
            content = renderContents && renderContents(tData, row, rowIndex);
            break;
          default:
            content = <SSSTypography content={tData} />;
            break;
        }

        return <td key={`${accessor}-${index}`}>{content}</td>;
      })}
    </TableRow>
  );
};
