import React from "react";
import { Input } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { DangerIcon, HelpCircleIcon, MailIcon } from "../icon";
import { Dropdown } from "../dropdown";
import { Typography } from "../typography";
export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement("div", { style: { width: "400px" } },
        React.createElement(Input, Object.assign({ label: "input" }, args)))));
export const InputDefault = Template.bind({});
InputDefault.args = {
    placeholder: "placeholder...",
};
export const Amounts = Template.bind({});
Amounts.args = {
    label: React.createElement(Typography, { content: "Select team member", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: "1,000.00",
    leftContent: React.createElement(Typography, { content: React.createElement("div", null, "\u20AC"), style: { color: Theme.palette.gray700 } }),
    rightContent: React.createElement(HelpCircleIcon, { stroke: Theme.palette.gray700, width: "14px" }),
};
export const PhoneNumber = Template.bind({});
const options = [
    { value: "us", label: React.createElement(Typography, { content: "US", variant: "bodySmall" }) },
    { value: "es", label: React.createElement(Typography, { content: "ES", variant: "bodySmall" }) },
];
PhoneNumber.args = {
    label: React.createElement(Typography, { content: "Phone number", variant: "bodySmall", style: { fontWeight: 600 } }),
    leftContent: (React.createElement(Dropdown, { options: options, style: { border: "0 !important", padding: 0, boxShadow: "none !important" }, placeholder: options[0].label })),
    rightContent: React.createElement(HelpCircleIcon, { stroke: Theme.palette.gray400, width: "16px" }),
};
export const Error = Template.bind({});
Error.args = {
    label: React.createElement(Typography, { content: "Email", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: "Email here...",
    error: "This is error.",
    leftContent: React.createElement(MailIcon, { stroke: Theme.palette.gray700, width: "20px" }),
    rightContent: React.createElement(DangerIcon, { stroke: Theme.palette.error500, size: "16px" }),
};
export const WithHint = Template.bind({});
WithHint.args = {
    label: React.createElement(Typography, { content: "Email", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: "Email here...",
    hint: "This is hint.",
    leftContent: React.createElement(MailIcon, { stroke: Theme.palette.gray700, width: "20px" }),
    rightContent: React.createElement(HelpCircleIcon, { stroke: Theme.palette.gray400, width: "16px" }),
};
//# sourceMappingURL=index.stories.js.map