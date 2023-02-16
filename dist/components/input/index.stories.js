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
import { Input } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { CircleCheckIcon, XIcon } from "../icon";
import { Dropdown } from "../dropdown";
export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement("div", { style: { width: "400px" } },
        React.createElement(Input, __assign({}, args))))); };
export var InputDefault = Template.bind({});
InputDefault.args = {
    placeholder: "placeholder...",
};
export var StyledInput = Template.bind({});
StyledInput.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    style: {
        border: "2px solid blue",
        padding: "2em",
    },
};
export var WithContent = Template.bind({});
WithContent.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    leftContent: (React.createElement("div", { style: { padding: "0 1em", display: "flex", alignItems: "center" } },
        React.createElement(CircleCheckIcon, { style: { color: "grey" }, size: "24px" }))),
    rightContent: (React.createElement("div", { style: { padding: "0 0.75em", display: "flex", alignItems: "center" } },
        React.createElement(XIcon, { style: { color: "grey" }, size: "14px" }))),
};
export var WithError = Template.bind({});
WithError.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    error: "This is error.",
};
export var WithHint = Template.bind({});
WithHint.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    hint: "This is hint.",
};
export var WithDropdown = Template.bind({});
var options = [
    { value: "us", label: "US" },
    { value: "es", label: "ES" },
];
WithDropdown.args = {
    leftContent: (React.createElement(Dropdown, { options: options, style: { border: "none", width: "76px", boxShadow: "none" }, placeholder: options[0].label })),
};
//# sourceMappingURL=index.stories.js.map