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
import { AlertSizes, AlertVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Alert } from "./index";
import { Theme } from "../../shared/theme";
import { DangerIcon } from "../icon";
export default {
    component: Alert,
    title: "Example/Alert",
    argTypes: {
        content: {
            control: {
                type: "text",
            },
        },
        variant: {
            control: {
                type: "radio",
                options: ["primary", "success", "error", "info"],
            },
        },
        onClose: {
            defaultValue: function () { return alert("Closed!"); },
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
    React.createElement(Alert, __assign({}, args)))); };
export var Custom = Template.bind({});
Custom.args = {
    content: "Title",
    variant: AlertVariants.success,
    icon: React.createElement(DangerIcon, null),
    size: AlertSizes.md,
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map