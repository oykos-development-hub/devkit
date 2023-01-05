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
        name: {
            control: {
                type: "text",
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
                type: "boolean",
            },
        },
        errorMessage: {
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
    errorMessage: "This field is required!",
    placeholder: "placeholder...",
    variant: "standard",
};
export var StandardInputThemed = Template.bind({});
StandardInputThemed.args = {
    label: "Input Label*",
    errorMessage: "This field is required!",
    placeholder: "placeholder...",
    variant: "standard",
    theme: Theme,
};
export var OutlinedInputDefault = Template.bind({});
OutlinedInputDefault.args = {
    label: "Input Label*",
    errorMessage: "This field is required!",
    placeholder: "placeholder...",
    variant: "outlined",
};
export var OutlinedInputThemed = Template.bind({});
OutlinedInputThemed.args = {
    label: "Input Label*",
    errorMessage: "This field is required!",
    placeholder: "placeholder...",
    variant: "outlined",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map