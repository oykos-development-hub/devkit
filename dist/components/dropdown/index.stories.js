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
import { Dropdown } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
export default {
    title: "Example/Dropdown",
    component: Dropdown,
    argTypes: {
        label: {
            name: "label",
            type: { name: "string", required: false },
            description: "Dropdown label",
            control: "text",
        },
        className: {
            name: "className",
            type: { name: "string", required: false },
            description: "Dropdown classes",
            control: "text",
        },
        isSearchable: {
            name: "isSearchable",
            type: { name: "boolean", required: false },
            control: "boolean",
        },
        confirmed: {
            name: "confirmed",
            type: { name: "boolean", required: false },
            defaultValue: false,
            control: "boolean",
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
        React.createElement(Dropdown, __assign({}, args, { label: args.label, className: "".concat(args.className || ""), data: data, defaultValue: 1 }))));
};
export var Basic = Template.bind({});
export var Multiselect = Template.bind({});
Multiselect.args = {
    isMulti: true,
};
export var Searchable = Template.bind({});
Searchable.args = {
    isSearchable: true,
};
export var Confirmed = Template.bind({});
Confirmed.args = {
    confirmed: true,
};
//# sourceMappingURL=index.stories.js.map