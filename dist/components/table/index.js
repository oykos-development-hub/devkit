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
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors, } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SSSTooltip } from "../tooltip";
import { DraggableRow } from "./draggableRow";
export const SSSTable = (props) => {
    var _a;
    const [openContextMenuId, setOpenContextMenuId] = useState();
    const [activeSorter, setActiveSorter] = useState(undefined);
    const [sortDirection, setSortDirection] = useState("desc");
    const contextRef = useRef(null);
    const { tableHeads, data: tableData, renderCustomControls, checkboxes, checkedRows, disabledCheckbox, selectedRowId, isDraggable = false, onItemsReordered, maxTableActionsInRow = 2, } = props;
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(tableData);
    }, [tableData]);
    const dataIds = data === null || data === void 0 ? void 0 : data.map(({ id }) => id);
    const onCheck = (checked, e, all, row) => {
        var _a;
        e.stopPropagation();
        props.onCheck && props.onCheck(checked, (_a = row === null || row === void 0 ? void 0 : row.id) !== null && _a !== void 0 ? _a : null, all);
    };
    const onRowSelect = (row) => {
        props.onRowClick && props.onRowClick(row);
    };
    const toggleContextMenu = (id) => {
        if (openContextMenuId === id) {
            setOpenContextMenuId(undefined);
        }
        else {
            setOpenContextMenuId(id);
        }
    };
    const renderActions = (row) => {
        const { tableActions } = props;
        const onActionClick = (e, action) => {
            e.stopPropagation();
            action(row, e);
        };
        const tableActionsToRender = tableActions === null || tableActions === void 0 ? void 0 : tableActions.filter((action) => action.shouldRender ? action.shouldRender(row) : true);
        if (tableActionsToRender) {
            const renderIcon = (action) => {
                if (action.icon) {
                    return (React.createElement(IconContainer, { disabled: (action === null || action === void 0 ? void 0 : action.disabled) && !!action.disabled(row) }, React.cloneElement(action.icon, {
                        onClick: (e) => {
                            e.stopPropagation();
                            const isDisabled = action.disabled ? action.disabled(row) : false;
                            if (isDisabled) {
                                return;
                            }
                            onActionClick(e, action.onClick);
                        },
                        key: action.name,
                    })));
                }
                else {
                    return null;
                }
            };
            if (tableActionsToRender.length > maxTableActionsInRow) {
                const actionsToRender = tableActionsToRender.slice(0, maxTableActionsInRow);
                return (React.createElement(ActionsWrapper, null, actionsToRender === null || actionsToRender === void 0 ? void 0 :
                    actionsToRender.map((action) => {
                        if (action.icon)
                            return renderIcon(action);
                    }),
                    React.createElement(MoreVerticalIcon, { onClick: (e) => {
                            e === null || e === void 0 ? void 0 : e.stopPropagation();
                            toggleContextMenu(row.id);
                        } }),
                    openContextMenuId === row.id && (React.createElement(ActionsMenu, { onClose: () => setOpenContextMenuId(0), row: row, ref: contextRef, actions: tableActionsToRender.slice(maxTableActionsInRow), onActionClick: onActionClick }))));
            }
            else {
                return (React.createElement(ActionsWrapper, null, tableActionsToRender.map((action) => {
                    return (action.shouldRender && !action.shouldRender(row)) || !action.icon ? null : action.tooltip &&
                        !!action.tooltip(row) ? (React.createElement(SSSTooltip, { key: action.name, content: action.tooltip && action.tooltip(row), variant: TooltipVariants.standard, position: "left" }, renderIcon(action))) : (renderIcon(action));
                })));
            }
        }
        else {
            return null;
        }
    };
    const handleDragEnd = (event) => {
        if (!isDraggable || !onItemsReordered)
            return;
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
    const tableBody = (React.createElement(DndContext, { collisionDetection: closestCenter, modifiers: [restrictToVerticalAxis], onDragEnd: handleDragEnd, sensors: sensors },
        React.createElement(SortableContext, { items: dataIds, strategy: verticalListSortingStrategy }, data === null || data === void 0 ? void 0 : data.map((row, rowIndex) => (React.createElement(DraggableRow, { key: isDraggable ? `draggable-${row.id}` : `not-draggable-${row.id}`, row: row, rowIndex: rowIndex, selectedRowId: selectedRowId, checkboxes: checkboxes, disabledCheckbox: disabledCheckbox, onCheck: onCheck, tableHeads: tableHeads, renderActions: renderActions, renderCustomControls: renderCustomControls, isDraggable: isDraggable, onRowSelect: onRowSelect, checkedRows: checkedRows }))))));
    const handleSort = (accessor) => {
        if (activeSorter === accessor) {
            setSortDirection((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
        }
        else {
            setActiveSorter(accessor);
            setSortDirection("desc");
        }
    };
    useEffect(() => {
        if (activeSorter && sortDirection) {
            props.onSort && props.onSort(activeSorter, sortDirection);
        }
    }, [activeSorter, sortDirection]);
    const tableHeader = (React.createElement(TableRow, null,
        checkboxes && React.createElement(TableHead, null),
        tableHeads.map((tableHead, index) => tableHead.shouldRender !== undefined && !tableHead.shouldRender ? null : (React.createElement(TableHead, { key: `${tableHead.accessor}-${index}`, width: tableHead.width, onClick: () => tableHead.sortable && handleSort(tableHead.accessor), sortable: tableHead.sortable },
            React.createElement(TableHeadContent, null, tableHead.customElement ? (tableHead.customElement) : (React.createElement(React.Fragment, null,
                React.createElement(TableHeadTitle, { variant: "bodyMedium", content: tableHead.title }),
                tableHead.sortable && (React.createElement(IconWrapper, { direction: activeSorter === tableHead.accessor && sortDirection === "asc" ? "asc" : "desc" },
                    React.createElement(ArrowDownIcon, { height: "11px", style: { marginTop: 2 }, stroke: activeSorter === tableHead.accessor ? Theme.palette.gray900 : Theme.palette.gray200 })))))))))));
    const mergedProps = Object.assign(Object.assign({ sortingEnabled: false }, props), { data, theme: Theme, bodyContent: !props.isLoading && props.data && ((_a = props.data) === null || _a === void 0 ? void 0 : _a.length) ? tableBody : undefined, headerContent: tableHeader, noDataMessage: props.isLoading ? undefined : (React.createElement(EmptyMessage, null,
            React.createElement(InboxIcon, null),
            React.createElement(EmptyMessageText, { content: props.emptyMessage, variant: "bodyLarge" }))) });
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (contextRef.current && e.target !== contextRef.current && !contextRef.current.contains(e.target)) {
                setOpenContextMenuId(undefined);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (React.createElement(TableContainer, { className: "table-container" },
        React.createElement(StyledTable, Object.assign({}, mergedProps)),
        props.isLoading && (React.createElement(LoaderWrapper, null,
            React.createElement(SSSLoader, null)))));
};
//# sourceMappingURL=index.js.map