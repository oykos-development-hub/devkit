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
import { Dropdown } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
export default {
    title: "Example/Dropdown",
    component: Dropdown,
    argTypes: {
        dropdownWidth: {
            control: {
                type: "text",
            },
        },
        dropdownPadding: {
            control: {
                type: "text",
            },
        },
    },
};
var Template = function (args) {
    var data = [
        { label: "English", value: 1 },
        { label: "Italian", value: 2 },
        { label: "Spanish", value: 3 },
        { label: "Serbian", value: 4 },
        { label: "Croatian", value: 5 },
        { label: "Dutch", value: 6 },
        { label: "German", value: 7 },
    ];
    return (React.createElement(StoryWrapper, null,
        React.createElement(Dropdown, __assign({}, args, { data: data }))));
};
export var Basic = Template.bind({});
Basic.args = {
    bgColor: "#fff",
    hoverBorderColor: "#111",
    borderColor: "#7b7b7b",
    borderSize: "0.1rem",
    borderRadius: "0.25rem",
    handleClearColor: "#7b7b7b",
    selectedItemColor: "",
    selectedItemBgColor: "#7b7b7b",
    selectedItemBorderRadius: "0.25rem",
    selectedItemBorderColor: "",
    selectedItemBorderWidth: "0rem",
    itemColor: "",
    itemHoverColor: "",
    itemHoverBgColor: "",
    dropdownBgColor: "",
    dropdownBorderRadius: "0.25rem",
    dropdownWidth: "",
    dropdownPadding: "0rem",
    dropdownMaxHeight: "18.75rem",
    dropdownSelectedItemColor: "",
    inputColor: "",
    theme: Theme,
};
export var Multiselect = Template.bind({});
Multiselect.args = {
    multi: true,
    bgColor: "#fff",
    hoverBorderColor: "#111",
    borderColor: "#7b7b7b",
    borderSize: "0.1rem",
    borderRadius: "0.25rem",
    handleClearColor: "#7b7b7b",
    selectedItemColor: "",
    selectedItemBgColor: "#7b7b7b",
    selectedItemBorderRadius: "0.25rem",
    selectedItemBorderColor: "",
    selectedItemBorderWidth: "0rem",
    itemColor: "",
    itemHoverColor: "",
    itemHoverBgColor: "",
    dropdownBgColor: "",
    dropdownBorderRadius: "0.25rem",
    dropdownWidth: "",
    dropdownPadding: "0rem",
    dropdownMaxHeight: "18.75rem",
    dropdownSelectedItemColor: "",
    inputColor: "",
    theme: Theme,
};
export var Searchable = Template.bind({});
Searchable.args = {
    searchable: true,
    bgColor: "#fff",
    hoverBorderColor: "#111",
    borderColor: "#7b7b7b",
    borderSize: "0.1rem",
    borderRadius: "0.25rem",
    handleClearColor: "#7b7b7b",
    selectedItemColor: "",
    selectedItemBgColor: "#7b7b7b",
    selectedItemBorderRadius: "0.25rem",
    selectedItemBorderColor: "",
    selectedItemBorderWidth: "0rem",
    itemColor: "",
    itemHoverColor: "",
    itemHoverBgColor: "",
    dropdownBgColor: "",
    dropdownBorderRadius: "0.25rem",
    dropdownWidth: "",
    dropdownPadding: "0rem",
    dropdownMaxHeight: "18.75rem",
    dropdownSelectedItemColor: "",
    inputColor: "",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map