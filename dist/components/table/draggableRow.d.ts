import React from "react";
import { TableDataItem, TableHead } from "./types";
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
export declare const DraggableRow: ({ row, rowIndex, isDraggable, onRowSelect, selectedRowId, checkedRows, checkboxes, disabledCheckbox, onCheck, tableHeads, renderActions, renderCustomControls, }: DraggableRowProps) => React.JSX.Element;
export {};
