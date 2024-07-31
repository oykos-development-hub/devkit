/* eslint-disable indent */
import { TooltipVariants } from "@oykos-development/devkit-react-ts-styled-components";
import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../shared/theme";
import { ArrowDownIcon, InboxIcon, MoreVerticalIcon } from "../icons";
import { SSSLoader } from "../loader";
import ActionsMenu from "./actionsMenu";
import { ActionsWrapper, IconContainer } from "./styles/actionIconsWrapper";
import EmptyMessage, { EmptyMessageText } from "./styles/emptyMessage";
import { LoaderWrapper } from "./styles/loaderWrapper";
import StyledTable from "./styles/styledTable";
import { TableContainer } from "./styles/tableContainer";
import { IconWrapper, TableHead, TableHeadContent } from "./styles/tableHead";
import TableHeadTitle from "./styles/tableHeadTitle";
import TableRow from "./styles/tableRow";
import { SSSTableProps, SortDirection, TableAction, TableDataItem } from "./types";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  type DragEndEvent,
  type UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SSSTooltip } from "../tooltip";
import { DraggableRow } from "./draggableRow";

export const SSSTable = <T extends TableDataItem>(props: SSSTableProps<T>) => {
  const [openContextMenuId, setOpenContextMenuId] = useState<number>();
  const [activeSorter, setActiveSorter] = useState<string | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const contextRef = useRef<HTMLUListElement | null>(null);
  const {
    tableHeads,
    data: tableData,
    renderCustomControls,
    checkboxes,
    checkedRows,
    disabledCheckbox,
    selectedRowId,
    isDraggable = false,
    onItemsReordered,
    maxTableActionsInRow = 2,
  } = props;
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const dataIds = data?.map(({ id }) => id) as UniqueIdentifier[];
  const onCheck = (checked: boolean, e: MouseEvent, all?: boolean, row?: any) => {
    e.stopPropagation();

    props.onCheck && props.onCheck(checked, row?.id ?? null, all);
  };

  const onRowSelect = (row: any) => {
    props.onRowClick && props.onRowClick(row);
  };

  const toggleContextMenu = (id: number) => {
    if (openContextMenuId === id) {
      setOpenContextMenuId(undefined);
    } else {
      setOpenContextMenuId(id);
    }
  };

  const renderActions = (row: TableDataItem) => {
    const { tableActions } = props;

    const onActionClick = (e: any, action: (row: any, e: any) => void) => {
      e.stopPropagation();
      action(row, e);
    };

    const tableActionsToRender = tableActions?.filter((action) =>
      action.shouldRender ? action.shouldRender(row) : true,
    );

    if (tableActionsToRender) {
      const renderIcon = (action: TableAction) => {
        if (action.icon) {
          return (
            <IconContainer disabled={action?.disabled && !!action.disabled(row)}>
              {React.cloneElement(action.icon, {
                onClick: (e: MouseEvent) => {
                  e.stopPropagation();
                  const isDisabled = action.disabled ? action.disabled(row) : false;

                  if (isDisabled) {
                    return;
                  }
                  onActionClick(e, action.onClick);
                },
                key: action.name,
              })}
            </IconContainer>
          );
        } else {
          return null;
        }
      };

      if (tableActionsToRender.length > maxTableActionsInRow) {
        const actionsToRender = tableActionsToRender.slice(0, maxTableActionsInRow);

        return (
          <ActionsWrapper>
            {actionsToRender?.map((action) => {
              if (action.icon) return renderIcon(action);
            })}
            <MoreVerticalIcon
              onClick={(e) => {
                e?.stopPropagation();
                toggleContextMenu(row.id);
              }}
            />
            {openContextMenuId === row.id && (
              <ActionsMenu
                onClose={() => setOpenContextMenuId(0)}
                row={row}
                ref={contextRef}
                actions={tableActionsToRender.slice(maxTableActionsInRow)}
                onActionClick={onActionClick}
              />
            )}
          </ActionsWrapper>
        );
      } else {
        return (
          <ActionsWrapper>
            {tableActionsToRender.map((action) => {
              return (action.shouldRender && !action.shouldRender(row)) || !action.icon ? null : action.tooltip &&
                !!action.tooltip(row) ? (
                <SSSTooltip
                  key={action.name}
                  content={action.tooltip && action.tooltip(row)}
                  variant={TooltipVariants.standard}
                  position="left"
                >
                  {renderIcon(action)}
                </SSSTooltip>
              ) : (
                renderIcon(action)
              );
            })}
          </ActionsWrapper>
        );
      }
    } else {
      return null;
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (!isDraggable || !onItemsReordered) return;
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      const oldIndex = dataIds.indexOf(active.id);
      const newIndex = dataIds.indexOf(over.id);
      const newArr = arrayMove(data, oldIndex, newIndex);
      setData(newArr);
      onItemsReordered && onItemsReordered(newArr);
    }
  };

  const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));

  const tableBody = (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
        {data?.map((row, rowIndex) => (
          <DraggableRow
            key={isDraggable ? `draggable-${row.id}` : `not-draggable-${row.id}`}
            row={row}
            rowIndex={rowIndex}
            selectedRowId={selectedRowId}
            checkboxes={checkboxes}
            disabledCheckbox={disabledCheckbox}
            onCheck={onCheck}
            tableHeads={tableHeads}
            renderActions={renderActions}
            renderCustomControls={renderCustomControls}
            isDraggable={isDraggable}
            onRowSelect={onRowSelect}
            checkedRows={checkedRows}
          />
        ))}
      </SortableContext>
    </DndContext>
  );

  const handleSort = (accessor: string) => {
    if (activeSorter === accessor) {
      // If the same column is clicked, toggle the sort direction
      setSortDirection((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
    } else {
      // If a new column is clicked, set it as the active sorter and start with 'desc'
      setActiveSorter(accessor);
      setSortDirection("desc");
    }
  };

  useEffect(() => {
    // Ensure that both activeSorter and sortDirection are set before calling onSort
    if (activeSorter && sortDirection) {
      props.onSort && props.onSort(activeSorter, sortDirection);
    }
  }, [activeSorter, sortDirection]);

  const tableHeader = (
    <TableRow>
      {checkboxes && <TableHead />}
      {tableHeads.map((tableHead, index) =>
        tableHead.shouldRender !== undefined && !tableHead.shouldRender ? null : (
          <TableHead
            key={`${tableHead.accessor}-${index}`}
            width={tableHead.width}
            onClick={() => tableHead.sortable && handleSort(tableHead.accessor)}
            sortable={tableHead.sortable}
          >
            <TableHeadContent>
              {tableHead.customElement ? (
                tableHead.customElement
              ) : (
                <>
                  <TableHeadTitle variant="bodyMedium" content={tableHead.title} />
                  {tableHead.sortable && (
                    <IconWrapper
                      direction={activeSorter === tableHead.accessor && sortDirection === "asc" ? "asc" : "desc"}
                    >
                      <ArrowDownIcon
                        height="11px"
                        style={{ marginTop: 2 }}
                        stroke={activeSorter === tableHead.accessor ? Theme.palette.gray900 : Theme.palette.gray200}
                      />
                    </IconWrapper>
                  )}
                </>
              )}
            </TableHeadContent>
          </TableHead>
        ),
      )}
    </TableRow>
  );

  const mergedProps = {
    sortingEnabled: false,
    ...props,
    data,
    theme: Theme,
    bodyContent: !props.isLoading && props.data && props.data?.length ? tableBody : undefined,
    headerContent: tableHeader,
    noDataMessage: props.isLoading ? undefined : (
      <EmptyMessage>
        <InboxIcon />
        <EmptyMessageText content={props.emptyMessage} variant="bodyLarge" />
      </EmptyMessage>
    ),
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contextRef.current && e.target !== contextRef.current && !contextRef.current.contains(e.target as Node)) {
        setOpenContextMenuId(undefined);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <TableContainer className="table-container">
      <StyledTable {...mergedProps} />
      {props.isLoading && (
        <LoaderWrapper>
          <SSSLoader />
        </LoaderWrapper>
      )}
    </TableContainer>
  );
};
