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
<<<<<<< HEAD
export var PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
    content: React.createElement(Typography, { content: "Primary Default", variant: TypographyVariants.button, theme: Theme }),
    onClick: function () { return alert("PrimaryDefault clicked!"); },
};
export var PrimaryCustomStyle = Template.bind({});
PrimaryCustomStyle.args = {
    content: React.createElement(Typography, { content: "Primary Custom Style", variant: TypographyVariants.button }),
=======
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
>>>>>>> development
    style: {
        backgroundColor: Theme.palette.success500,
        color: Theme.palette.white,
    },
<<<<<<< HEAD
    onClick: function () { return alert("PrimaryCustomStyle clicked!"); },
};
export var PrimaryThemed = Template.bind({});
PrimaryThemed.args = {
    content: React.createElement(Typography, { content: "Primary Themed", variant: TypographyVariants.button }),
    theme: Theme,
    onClick: function () { return alert("PrimaryThemed clicked!"); },
};
export var SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
    content: React.createElement(Typography, { content: "Secondary Default", variant: TypographyVariants.button }),
    variant: ButtonVariants.secondary,
    onClick: function () { return alert("SecondaryDefault clicked!"); },
};
export var SecondaryCustomStyle = Template.bind({});
SecondaryCustomStyle.args = {
    content: React.createElement(Typography, { content: "Secondary Custom Style", variant: TypographyVariants.button }),
    variant: ButtonVariants.secondary,
    style: {
        width: "150px",
        boxShadow: "5px 5px 2px #333",
        backgroundColor: "white",
        color: "blue",
        fontWeight: 900,
    },
    onClick: function () { return alert("SecondaryCustomStyle clicked!"); },
};
export var SecondaryThemed = Template.bind({});
SecondaryThemed.args = {
    content: React.createElement(Typography, { content: "Secondary Themed", variant: TypographyVariants.button }),
    variant: ButtonVariants.secondary,
    theme: Theme,
    onClick: function () { return alert("SecondaryThemed clicked!"); },
};
export var TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
    content: React.createElement(Typography, { content: "Tertiary Default", variant: TypographyVariants.button }),
    variant: ButtonVariants.tertiary,
    onClick: function () { return alert("TertiaryDefault clicked!"); },
};
export var TertiaryCustomStyle = Template.bind({});
TertiaryCustomStyle.args = {
    content: React.createElement(Typography, { content: "Tertiary Custom Style", variant: TypographyVariants.button }),
    variant: ButtonVariants.tertiary,
    style: {
        width: "150px",
        boxShadow: "0px 0px 4px #333",
        backgroundColor: "white",
        color: "#333",
        padding: "4px 8px",
    },
    onClick: function () { return alert("TertiaryCustomStyle clicked!"); },
};
export var TertiaryThemed = Template.bind({});
TertiaryThemed.args = {
    content: React.createElement(Typography, { content: "Tertiary Themed", variant: TypographyVariants.button }),
    variant: ButtonVariants.tertiary,
    theme: Theme,
    onClick: function () { return alert("TertiaryThemed clicked!"); },
=======
>>>>>>> development
};
//# sourceMappingURL=index.stories.js.map