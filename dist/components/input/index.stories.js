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
export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["standard", "outlined"],
            },
        },
        label: {
            control: {
                type: "text",
            },
        },
        fontSize: {
            control: {
                type: "text",
            },
        },
        type: {
            control: {
                type: "text",
            },
        },
        placeholder: {
            control: {
                type: "text",
            },
        },
        width: {
            control: {
                type: "text",
            },
        },
        fullWidth: {
            control: {
                type: "boolean",
            },
        },
        height: {
            control: {
                type: "text",
            },
        },
        margin: {
            control: {
                type: "text",
            },
        },
        borderColor: {
            control: {
                type: "text",
            },
        },
        borderRadius: {
            control: {
                type: "text",
            },
        },
        error: {
            control: {
                type: "text",
            },
        },
        errorColor: {
            control: {
                type: "text",
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        textarea: {
            control: {
                type: "boolean",
            },
        },
        iconLeft: {
            control: {
                type: "boolean",
            },
        },
        iconRight: {
            control: {
                type: "boolean",
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Input, __assign({}, args)))); };
export var StandardInputDefault = Template.bind({});
StandardInputDefault.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    variant: "standard",
};
export var StandardInputThemed = Template.bind({});
StandardInputThemed.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    variant: "standard",
    theme: Theme,
};
export var OutlinedInputDefault = Template.bind({});
OutlinedInputDefault.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    variant: "outlined",
};
export var OutlinedInputThemed = Template.bind({});
OutlinedInputThemed.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    variant: "outlined",
    theme: Theme,
};
export var WithError = Template.bind({});
WithError.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    variant: "standard",
    error: "This field is required",
    iconRight: (React.createElement("svg", { width: "20", height: "20", fill: "red", viewBox: "0 0 20 20" },
        React.createElement("path", { fill: "red", d: "M10 4a1 1 0 011 1v6a1 1 0 11-2 0V5a1 1 0 011-1zM10 14a1 1 0 100 2 1 1 0 000-2z" }))),
};
export var Search = Template.bind({});
Search.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    variant: "outlined",
    iconLeft: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "grey", viewBox: "0 0 20 20" },
        React.createElement("path", { fill: "grey", fillRule: "evenodd", d: "M14.869 13.457A8.001 8.001 0 002.893 2.893 8 8 0 0013.457 14.87l.043.045 4.242 4.243a1 1 0 001.414-1.415L14.914 13.5a1.116 1.116 0 00-.045-.043zm-2.077-9.15a6 6 0 11-8.485 8.486 6 6 0 018.485-8.486z", clipRule: "evenodd" }))),
    search: true,
    iconRight: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "grey", viewBox: "0 0 8 8" },
        React.createElement("path", { fill: "grey", fillRule: "evenodd", d: "M.646.646a.5.5 0 01.708 0L4 3.293 6.646.646a.5.5 0 11.708.708L4.707 4l2.647 2.646a.5.5 0 11-.708.708L4 4.707 1.354 7.354a.5.5 0 11-.708-.708L3.293 4 .646 1.354a.5.5 0 010-.708z", clipRule: "evenodd" }))),
};
export var Confirmed = Template.bind({});
Confirmed.args = {
    label: "Input Label*",
    placeholder: "placeholder...",
    variant: "outlined",
    confirmed: true,
    iconRight: (React.createElement("svg", { width: "16", height: "16", fill: "#7CFC00", viewBox: "0 0 17 13" },
        React.createElement("path", { fill: "#7CFC00", d: "M5.414 9.586l-4-4L0 7l5.414 5.414 11-11L15 0 5.414 9.586z" }))),
};
//# sourceMappingURL=index.stories.js.map