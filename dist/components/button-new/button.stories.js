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
import Button from "./Button";
export default {
    component: Button,
    title: "Components/Button",
    argTypes: {
        content: {
            defaultValue: function () { return React.createElement("span", null, "Button"); },
        },
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        onClick: {
            defaultValue: function () { return alert("Button clicked!"); },
        },
        theme: {
            control: {
                type: "object",
            },
        },
        style: {
            defaultValue: {
                width: "fit-content",
                height: "fit-content",
                margin: "0em",
                borderWidth: "1px",
                gap: "0.5em",
            },
        },
        size: {
            control: {
                type: "radio",
                options: ["xs", "sm", "md", "lg", "xl"],
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Button, __assign({}, args)))); };
export var CustomButton = Template.bind({});
CustomButton.args = {
    content: "Button CTA",
    onClick: function () { return alert("Button clicked!"); },
    variant: "primary",
    size: "lg",
    theme: Theme,
};
//# sourceMappingURL=button.stories.js.map