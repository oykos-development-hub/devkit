import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Dropdown } from "./index";
import { CircleCheckIcon } from "../icon";
const dropdownOptions = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
    { value: "four", label: "Four" },
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
        placeholder: {
            control: {
                type: "text",
            },
        },
        label: {
            control: {
                type: "text",
            },
        },
        noOptionsText: {
            control: {
                type: "text",
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement("div", { style: { width: "400px" } },
        React.createElement(Dropdown, Object.assign({}, args)))));
export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
    placeholder: "placeholder...",
};
export const DropdownWithIcons = Template.bind({});
DropdownWithIcons.args = {
    label: "Dropdown label*",
    placeholder: "placeholder...",
    controlIcon: React.createElement(CircleCheckIcon, { style: { color: "grey" }, size: "24px" }),
    optionIcon: React.createElement(CircleCheckIcon, { style: { color: "grey" }, size: "24px" }),
};
export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
    label: "Dropdown label*",
    placeholder: "placeholder...",
    isMulti: true,
};
export const MultipleSelectWithIcons = Template.bind({});
MultipleSelectWithIcons.args = {
    label: "Dropdown label*",
    placeholder: "placeholder...",
    isMulti: true,
    controlIcon: React.createElement(CircleCheckIcon, { style: { color: "grey" }, size: "24px" }),
    optionIcon: React.createElement(CircleCheckIcon, { style: { color: "grey" }, size: "24px" }),
};
export const StyledDropdown = Template.bind({});
StyledDropdown.args = {
    label: "Dropdown label*",
    placeholder: "placeholder...",
    style: {
        border: "1px solid red",
        borderRadius: "16px",
    },
};
//# sourceMappingURL=index.stories.js.map