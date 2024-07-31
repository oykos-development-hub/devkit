import React, { useEffect, useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { PlusIcon, PrinterIcon, EditIconTwo, TrashIcon, EyeIcon, HomeIcon, CheckIcon } from "../icons";
import { SSSTypography } from "../typography";
import { SSSButton } from "../button";
import { SSSTable } from "./index";
import * as yup from "yup";
import { SSSInput } from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    lastName: yup.string().required("Last name is required"),
    age: yup
        .number()
        .transform((value, originalValue) => (originalValue.trim() === "" ? undefined : value))
        .required("Age is required")
        .positive("Age must be a positive number"),
});
const rowsSchema = yup.object().shape({
    rows: yup.array().of(validationSchema),
});
const defaultTableActions = [
    {
        name: "delete",
        onClick: (item) => console.log(`Deleted ${item.fullName}`),
        icon: React.createElement(TrashIcon, { stroke: Theme.palette.gray600 }),
        disabled: () => false,
    },
    {
        name: "edit",
        onClick: (item) => console.log(`Editing ${item.fullName}`),
        icon: React.createElement(EditIconTwo, { stroke: Theme.palette.gray600 }),
        tooltip: () => "This is a table action tooltip",
        disabled: () => true,
    },
];
const tableHeads = [
    { title: "ID", accessor: "id", width: 20 },
    { title: "Ime i Prezime", accessor: "fullName", sortable: true },
    { title: "Datum rođenja", accessor: "dateOfBirth", sortable: true },
    { title: "Organizaciona jedinica", accessor: "department" },
    { title: "Sudija", accessor: "judge" },
    { title: "Radno mjesto", accessor: "position" },
    { title: "Status", accessor: "active", type: "badge" },
    { title: "", accessor: "TABLE_ACTIONS", type: "tableActions" },
];
const tableData = [
    {
        id: 1,
        fullName: "Marko Marković",
        dateOfBirth: "01.01.1990",
        department: "SSS",
        judge: "Marko Marković",
        position: "Sudija",
        active: false,
    },
    {
        id: 2,
        fullName: "Marko Petrovic",
        dateOfBirth: "01.01.1996",
        department: "SSS",
        judge: "Milos Nikolic",
        position: "Sudija",
        active: true,
    },
    {
        id: 3,
        fullName: "Jovan Jovanovic",
        dateOfBirth: "04.11.1988",
        department: "SSS",
        judge: "Petar Nikolic",
        position: "Sudija",
        active: false,
    },
    {
        id: 4,
        fullName: "Marko Petrovic",
        dateOfBirth: "01.01.1996",
        department: "SSS",
        judge: "Milos Nikolic",
        position: "Sudija",
        active: true,
    },
];
export default {
    title: "Components/Table",
    component: SSSTable,
    argTypes: {},
};
const Default = (args) => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const onCheck = (checked, id, all) => {
        if (all) {
            if (checked) {
                setSelectedRowIds(args.data.map((row) => row.id));
            }
            else {
                setSelectedRowIds([]);
            }
        }
        else {
            if (checked && id) {
                setSelectedRowIds([...selectedRowIds, id]);
            }
            else {
                setSelectedRowIds(selectedRowIds.filter((id) => id !== id));
            }
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (React.createElement(StoryWrapper, null,
        React.createElement(SSSTable, Object.assign({}, args, { isLoading: isLoading, onCheck: onCheck, checkedRows: selectedRowIds }))));
};
export const DefaultTable = Default.bind({});
DefaultTable.args = {
    tableHeads,
    data: tableData,
    tableActions: defaultTableActions,
    titleElement: (React.createElement("div", { style: {
            height: 86,
            backgroundColor: "#FBF1F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: 20,
        } },
        React.createElement(SSSTypography, { variant: "bodyMedium", content: "Akademsko obrazovanje" }),
        React.createElement(PlusIcon, { width: "18px" }))),
    onRowClick: (item) => console.log(item, "onRowClick"),
};
export const NoDataTable = Default.bind({});
NoDataTable.args = {
    tableHeads,
    data: [],
    emptyMessage: "Još nema podataka za prikazivanje",
};
export const MultipleActionsTable = Default.bind({});
MultipleActionsTable.args = {
    tableHeads,
    data: tableData,
    emptyMessage: "Još nema podataka za prikazivanje",
    tableActions: [
        {
            name: "print",
            onClick: (item) => console.log(`Printing... ${item.id}`),
            icon: React.createElement(PrinterIcon, { stroke: Theme.palette.gray600 }),
            shouldRender: (item) => item.active,
        },
        {
            name: "Edit",
            onClick: (item) => console.log(`Editing ${item.fullName}`),
            icon: React.createElement(EditIconTwo, { stroke: Theme.palette.gray600 }),
        },
        {
            name: "Delete",
            onClick: (item) => console.log(`Deleting ${item.fullName}`),
            icon: React.createElement(TrashIcon, { stroke: Theme.palette.gray600 }),
            disabled: (row) => row.active,
        },
        {
            name: "Deactivate",
            onClick: (item) => console.log(`Deactivating ${item.fullName}`),
            icon: React.createElement(EyeIcon, { stroke: Theme.palette.gray600 }),
            disabled: (row) => row.active,
        },
        {
            name: "Allocate",
            onClick: (item) => console.log(`Allocating ${item.fullName}`),
            icon: React.createElement(HomeIcon, { stroke: Theme.palette.gray600 }),
        },
    ],
};
export const TableWithCheckboxes = Default.bind({});
TableWithCheckboxes.args = {
    tableHeads,
    data: tableData,
    tableActions: defaultTableActions,
    onRowClick: (item) => console.log(item, "onRowClick"),
    checkboxes: true,
    disabledCheckbox: (row) => !row.active,
};
export const TableCustomHeads = Default.bind({});
TableCustomHeads.args = {
    tableHeads: [
        ...tableHeads.slice(0, tableHeads.length - 2),
        Object.assign(Object.assign({}, tableHeads[tableHeads.length - 1]), { customElement: React.createElement(SSSButton, { content: "Revers", size: "sm", onClick: () => console.log("Revers") }) }),
    ],
    data: tableData,
    onRowClick: (item) => console.log(item, "onRowClick"),
    selectedRowId: 1,
};
export const DraggableTable = Default.bind({});
DraggableTable.args = {
    tableHeads,
    data: tableData,
    tableActions: defaultTableActions,
    isDraggable: true,
    onItemsReordered: (newData) => console.log(newData),
    titleElement: (React.createElement("div", { style: {
            height: 86,
            backgroundColor: "#FBF1F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: 20,
        } },
        React.createElement(SSSTypography, { variant: "bodyMedium", content: "Akademsko obrazovanje" }),
        React.createElement(PlusIcon, { width: "18px" }))),
    onRowClick: (item) => console.log(item, "onRowClick"),
};
const TableWithInputs = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(rowsSchema),
    });
    const onSubmit = (data) => console.log(data);
    const tableHeadsInputs = [
        {
            title: "Name",
            accessor: "name",
            type: "custom",
            renderContents: (_item, _row, index) => {
                var _a, _b, _c;
                return (React.createElement(SSSInput, Object.assign({ key: `rows.${index}.name` }, register(`rows.${index}.name`), { placeholder: "Name", error: (_c = (_b = (_a = errors.rows) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.message })));
            },
        },
        {
            title: "Last Name",
            accessor: "lastName",
            type: "custom",
            renderContents: (_item, _row, index) => {
                var _a, _b, _c;
                return (React.createElement(SSSInput, Object.assign({ key: `rows.${index}.lastName` }, register(`rows.${index}.lastName`), { placeholder: "Last Name", error: (_c = (_b = (_a = errors.rows) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b.lastName) === null || _c === void 0 ? void 0 : _c.message })));
            },
        },
        {
            title: "Age",
            accessor: "age",
            type: "custom",
            renderContents: (_item, _row, index) => {
                var _a, _b, _c;
                return (React.createElement(SSSInput, Object.assign({ key: `rows.${index}.age` }, register(`rows.${index}.age`), { type: "number", placeholder: "Age", error: (_c = (_b = (_a = errors.rows) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b.age) === null || _c === void 0 ? void 0 : _c.message })));
            },
        },
    ];
    return (React.createElement(StoryWrapper, null,
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement(SSSTable, { tableHeads: tableHeadsInputs, data: tableData, tableActions: [
                    {
                        name: "submit",
                        onClick: handleSubmit(onSubmit),
                        icon: React.createElement(CheckIcon, { stroke: Theme.palette.gray600 }),
                        disabled: () => false,
                    },
                ] }),
            React.createElement(SSSButton, { type: "submit", content: "Submit", style: { margin: 20 } }))));
};
export const DefaultTableWithInputs = TableWithInputs.bind({});
//# sourceMappingURL=index.stories.js.map