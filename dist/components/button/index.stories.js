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
import { Button } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
export default {
    component: Button,
    title: "Components/Button",
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        width: {
            control: {
                type: "text",
            },
        },
        type: {
            control: {
                type: "text",
            },
        },
        height: {
            control: {
                type: "text",
            },
        },
        primaryColor: {
            control: {
                type: "text",
            },
        },
        secondaryColor: {
            control: {
                type: "text",
            },
        },
        tertiaryColor: {
            control: {
                type: "text",
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
        icon: {
            control: {
                type: "text",
            },
        },
        iconPosition: {
            control: {
                type: "radio",
                options: ["left", "right"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        label: {
            control: {
                type: "text",
            },
        },
        padding: {
            control: {
                type: "text",
            },
        },
        margin: {
            control: {
                type: "text",
            },
        },
        borderRadius: {
            control: {
                type: "text",
            },
        },
        borderWidth: {
            control: {
                type: "text",
            },
        },
        gap: {
            control: {
                type: "text",
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Button, __assign({}, args)))); };
export var PrimaryButtonDefault = Template.bind({});
PrimaryButtonDefault.args = {
    label: "Primary",
    variant: "primary",
    primaryColor: "purple",
    borderRadius: "2em",
};
export var PrimaryButtonThemed = Template.bind({});
PrimaryButtonThemed.args = {
    label: "Primary",
    variant: "primary",
    theme: Theme,
};
export var SecondaryButtonDefault = Template.bind({});
SecondaryButtonDefault.args = {
    label: "Secondary",
    variant: "secondary",
    secondaryColor: "lightblue",
    borderRadius: "2em",
};
export var SecondaryButtonThemed = Template.bind({});
SecondaryButtonThemed.args = {
    label: "Secondary",
    variant: "secondary",
    theme: Theme,
};
export var TertiaryButtonDefault = Template.bind({});
TertiaryButtonDefault.args = {
    label: "Tertiary",
    tertiaryColor: "red",
    variant: "tertiary",
    borderRadius: "2em",
};
export var TertiaryButtonThemed = Template.bind({});
TertiaryButtonThemed.args = {
    label: "Tertiary",
    variant: "tertiary",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map