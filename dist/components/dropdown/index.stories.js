import React, { useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Dropdown } from "./index";
import { CheckIcon, UserIcon } from "../icon";
import { Typography } from "../typography";
import Avatar from "./styles/avatar";
const dropdownOptions = [
    { value: "one", label: React.createElement(Typography, { content: "One", variant: "bodySmall" }) },
    { value: "two", label: React.createElement(Typography, { content: "Two", variant: "bodySmall" }) },
    {
        value: "three",
        label: React.createElement(Typography, { variant: "bodySmall", content: "Three" }),
    },
    { value: "four", label: React.createElement(Typography, { content: "Four", variant: "bodySmall" }) },
    { value: "five", label: React.createElement(Typography, { content: "Five", variant: "bodySmall" }) },
];
export default {
    component: Dropdown,
    title: "Components/Dropdown",
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        options: {
            control: {
                type: "object",
            },
            defaultValue: dropdownOptions,
        },
        isMulti: {
            control: {
                type: "boolean",
            },
        },
        menuIsOpen: {
            control: {
                type: "boolean",
            },
        },
        isDisabled: {
            control: {
                type: "boolean",
            },
        },
        isSearchable: {
            control: {
                type: "boolean",
            },
        },
        showArrow: {
            control: {
                type: "boolean",
            },
        },
    },
};
const Template = (args) => {
    const [value, setValue] = useState(null);
    return (React.createElement(StoryWrapper, null,
        React.createElement("div", { style: { width: "300px", display: "flex" } },
            React.createElement(Dropdown, Object.assign({}, args, { value: value, onChange: (e) => setValue(e) })))));
};
export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
    label: "Team member",
    placeholder: "Select team member",
    showArrow: true,
};
export const DropdownWithIcons = Template.bind({});
DropdownWithIcons.args = {
    label: React.createElement(Typography, { content: "Team member", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: React.createElement(Typography, { content: "Select team member", variant: "bodySmall" }),
    leftOptionIcon: React.createElement(UserIcon, { stroke: Theme.palette.primary900, width: "24px" }),
    rightOptionIcon: React.createElement(CheckIcon, { stroke: Theme.palette.primary500 }),
    showArrow: true,
    closeMenuOnSelect: true,
};
export const DropdownSearch = Template.bind({});
DropdownSearch.args = {
    label: React.createElement(Typography, { content: "Team member", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: React.createElement(Typography, { content: "Select team member", variant: "bodySmall" }),
    isSearchable: true,
    isClearable: true,
    backspaceRemovesValue: true,
    rightOptionIcon: React.createElement(CheckIcon, { stroke: Theme.palette.primary500 }),
    showArrow: true,
    closeMenuOnSelect: true,
    noOptionsText: React.createElement(Typography, { content: "No data", variant: "h6" }),
};
export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
    label: React.createElement(Typography, { content: "Team member", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: React.createElement(Typography, { content: "Select team member", variant: "bodySmall" }),
    isMulti: true,
    isSearchable: true,
    rightOptionIcon: React.createElement(CheckIcon, { stroke: Theme.palette.primary500 }),
    showArrow: true,
    closeMenuOnSelect: false,
};
export const MultipleSelectSearch = Template.bind({});
MultipleSelectSearch.args = {
    label: React.createElement(Typography, { content: "Team member", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: React.createElement(Typography, { content: "Select team member", variant: "bodySmall" }),
    isMulti: true,
    isSearchable: true,
    rightOptionIcon: React.createElement(CheckIcon, { stroke: Theme.palette.primary500 }),
    showArrow: true,
    closeMenuOnSelect: false,
};
export const DropdownWithAvatars = Template.bind({});
DropdownWithAvatars.args = {
    label: React.createElement(Typography, { content: "Team member", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: React.createElement(Typography, { content: "Select team member", variant: "helperText" }),
    leftOptionIcon: Avatar,
    rightOptionIcon: React.createElement(CheckIcon, { stroke: Theme.palette.primary500 }),
    showArrow: false,
    isSearchable: true,
    closeMenuOnSelect: false,
};
//# sourceMappingURL=index.stories.js.map