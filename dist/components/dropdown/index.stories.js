var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Dropdown } from "./index";
import { CircleCheckIcon } from "../icon";
var dropdownOptions = [
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
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement("div", { style: { width: "400px" } },
        React.createElement(Dropdown, __assign({}, args))))); };
export var DropdownDefault = Template.bind({});
DropdownDefault.args = {
    placeholder: "placeholder...",
};
export var DropdownWithIcons = Template.bind({});
DropdownWithIcons.args = {
    label: "Dropdown label*",
    placeholder: "placeholder...",
    controlIcon: React.createElement(CircleCheckIcon, { style: { color: "grey" }, size: "24px" }),
    optionIcon: React.createElement(CircleCheckIcon, { style: { color: "grey" }, size: "24px" }),
};
export var MultipleSelect = Template.bind({});
MultipleSelect.args = {
    label: "Dropdown label*",
    placeholder: "placeholder...",
    isMulti: true,
};
export var MultipleSelectWithIcons = Template.bind({});
MultipleSelectWithIcons.args = {
    label: "Dropdown label*",
    placeholder: "placeholder...",
    isMulti: true,
    controlIcon: React.createElement(CircleCheckIcon, { style: { color: "grey" }, size: "24px" }),
    optionIcon: React.createElement(CircleCheckIcon, { style: { color: "grey" }, size: "24px" }),
};
export var StyledDropdown = Template.bind({});
StyledDropdown.args = {
    label: "Dropdown label*",
    placeholder: "placeholder...",
    style: {
        border: "1px solid red",
        borderRadius: "16px",
    },
};
//# sourceMappingURL=index.stories.js.map