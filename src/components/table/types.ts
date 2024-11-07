import { CSSProperties, ReactElement, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export type SortDirection = "asc" | "desc";

export enum CellContentType {
  TEXT = "text",
  BADGE = "badge",
  TABLE_ACTIONS = "tableActions",
  CUSTOM = "custom",
}

export interface TableHead {
  title: string;
  accessor: string;
  sortable?: boolean;
  type?: CellContentType | `${CellContentType}`;
  renderContents?: (item: any, row: any, index: number) => ReactNode;
  shouldRender?: boolean;
  customElement?: ReactElement;
  width?: number | string;
}

export type TableDataItem = {
  id: number;
};

export interface TableAction {
  // NOTE: This should be a unique string, used for the key in mapping the actions
  name: string;
  icon?: ReactElement;
  onClick: (row: any, e: any) => void;
  shouldRender?: (row: any) => boolean;
  custom?: ReactElement;
  disabled?: (row: any) => boolean;
  tooltip?: (row: any) => string;
}

export interface SSSTableProps<T extends TableDataItem> {
  tableHeads: TableHead[];
  data: T[];
  titleElement?: ReactElement;
  emptyMessage?: string;
  CustomTableHeader?: ReactElement;
  theme?: DefaultTheme;
  style?: CSSProperties;
  sortingEnabled?: boolean;
  onSort?: (column: string, direction: SortDirection) => void;
  renderCustomControls?: (row: any) => ReactElement | JSX.Element;
  onRowClick?: (row: any) => void;
  tableActions?: TableAction[];
  selectedRowId?: number;
  isLoading?: boolean;
  checkboxes?: boolean;
  checkedRows?: number[];
  onCheck?: (checked: boolean, id: number | null, all?: boolean) => void;
  disabledCheckbox?: (row: any) => boolean;
  isDraggable?: boolean;
  onItemsReordered?: (newData: T[]) => void;
  maxTableActionsInRow?: number;
}

export interface ExampleTableData {
  id: number;
  fullName: string;
  dateOfBirth: string;
  department: string;
  judge: string;
  position: string;
  active: boolean;
}
