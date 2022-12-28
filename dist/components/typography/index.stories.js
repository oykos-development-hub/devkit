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
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
export default {
    title: "Example/Typography",
    component: Typography,
    argTypes: {
        variant: {
            control: {
                type: "text",
            },
        },
        color: {
            control: {
                type: "text",
            },
        },
        noMargins: {
            control: {
                type: "boolean",
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
        children: {
            control: {
                type: "text",
            },
        },
        className: {
            control: {
                type: "text",
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Typography, __assign({}, args), args.children))); };
export var HeadlineH1 = Template.bind({});
HeadlineH1.args = {
    variant: "h1",
    color: "",
    children: "HeadlineH1",
};
export var HeadlineH2 = Template.bind({});
HeadlineH2.args = {
    variant: "h2",
    color: "",
    children: "HeadlineH2"
};
export var HeadlineH3 = Template.bind({});
HeadlineH3.args = {
    variant: "h3",
    color: "",
    children: "HeadlineH3",
};
export var HeadlineH4 = Template.bind({});
HeadlineH4.args = {
    variant: "h4",
    color: "",
    children: "HeadlineH4"
};
export var HeadlineH5 = Template.bind({});
HeadlineH5.args = {
    variant: "h5",
    color: "",
    children: "HeadlineH5",
};
export var HeadlineH6 = Template.bind({});
HeadlineH6.args = {
    variant: "h6",
    color: "",
    children: "HeadlineH6",
};
export var Subtitle1 = Template.bind({});
Subtitle1.args = {
    variant: "subtitle1",
    color: "",
    children: "Subtitle1",
};
export var Subtitle2 = Template.bind({});
Subtitle2.args = {
    variant: "subtitle2",
    color: "",
    children: "Subtitle2",
};
export var Body1 = Template.bind({});
Body1.args = {
    variant: "body1",
    color: "",
    children: "Body1",
};
export var Body2 = Template.bind({});
Body2.args = {
    variant: "body2",
    color: "",
    children: "Body2",
};
export var Button = Template.bind({});
Button.args = {
    variant: "button",
    color: "",
    children: "Button",
};
export var Caption = Template.bind({});
Caption.args = {
    variant: "caption",
    color: "",
    children: "Caption",
};
export var Overline = Template.bind({});
Overline.args = {
    variant: "overline",
    color: "",
    children: "Overline",
};
//# sourceMappingURL=index.stories.js.map