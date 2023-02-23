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
import { ButtonSizes, ButtonVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Button } from "./index";
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
            defaultValue: Theme,
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
    variant: ButtonVariants.primary,
    size: ButtonSizes.lg,
};
export var StyledButton = Template.bind({});
StyledButton.args = {
    content: "Styled Button",
    onClick: function () { return alert("Button clicked!"); },
    variant: ButtonVariants.primary,
    size: ButtonSizes.lg,
    style: {
        backgroundColor: Theme.palette.success500,
        color: Theme.palette.white,
    },
};
//# sourceMappingURL=index.stories.js.map