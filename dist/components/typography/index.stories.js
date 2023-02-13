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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { TypographyVariants, VariantNames } from "./variants";
export default {
    title: "Components/Typography",
    component: Typography,
    argTypes: {
        content: {
            defaultValue: function () { return React.createElement("span", null, "Button"); },
        },
        variant: {
            control: {
                type: "select",
                options: __spreadArray([], VariantNames, true),
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
        style: {
            defaultValue: {
                color: "#333",
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Typography, __assign({}, args), args.content))); };
export var HeadlineH1 = Template.bind({});
HeadlineH1.args = {
    variant: TypographyVariants.h1,
    content: "HeadlineH1",
    theme: Theme,
};
export var HeadlineH1Custom = Template.bind({});
HeadlineH1Custom.args = {
    variant: TypographyVariants.h1,
    content: "Headline H1 Custom Style",
    style: {
        color: "#51a322",
        margin: "5rem 2rem",
        letterSpacing: "3px",
    },
};
export var HeadlineH2 = Template.bind({});
HeadlineH2.args = {
    variant: TypographyVariants.h2,
    content: "HeadlineH2",
    theme: Theme,
};
export var HeadlineH3 = Template.bind({});
HeadlineH3.args = {
    variant: TypographyVariants.h3,
    content: "HeadlineH3",
    theme: Theme,
};
export var HeadlineH4 = Template.bind({});
HeadlineH4.args = {
    variant: TypographyVariants.h4,
    content: "HeadlineH4",
    theme: Theme,
};
export var HeadlineH5 = Template.bind({});
HeadlineH5.args = {
    variant: TypographyVariants.h5,
    content: "HeadlineH5",
    theme: Theme,
};
export var HeadlineH6 = Template.bind({});
HeadlineH6.args = {
    variant: TypographyVariants.h6,
    content: "HeadlineH6",
    theme: Theme,
};
export var Subtitle1 = Template.bind({});
Subtitle1.args = {
    variant: TypographyVariants.subtitle1,
    content: "Subtitle1",
    theme: Theme,
};
export var Subtitle2 = Template.bind({});
Subtitle2.args = {
    variant: TypographyVariants.subtitle2,
    content: "Subtitle2",
    theme: Theme,
};
export var Body1 = Template.bind({});
Body1.args = {
    variant: TypographyVariants.body1,
    content: "Body1",
    theme: Theme,
};
export var Body2 = Template.bind({});
Body2.args = {
    variant: TypographyVariants.body2,
    content: "Body2",
    theme: Theme,
};
export var Button = Template.bind({});
Button.args = {
    variant: TypographyVariants.button,
    content: "Button",
    theme: Theme,
};
export var Caption = Template.bind({});
Caption.args = {
    variant: TypographyVariants.caption,
    content: "Caption",
    theme: Theme,
};
export var Overline = Template.bind({});
Overline.args = {
    variant: TypographyVariants.overline,
    content: "Overline",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map