import React from "react";
import { Input } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { DangerIcon, HelpCircleIcon, MailIcon } from "../icon";
import { Dropdown } from "../dropdown";
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
        React.createElement(Input, Object.assign({}, args)))));
export const InputDefault = Template.bind({});
InputDefault.args = {
    placeholder: "placeholder...",
};
export const Amounts = Template.bind({});
Amounts.args = {
    label: "Sale amount",
    placeholder: "1,000.00",
    leftContent: React.createElement("div", { style: { color: Theme.palette.gray700, paddingTop: "3px" } }, "\u20AC"),
    rightContent: React.createElement(HelpCircleIcon, { stroke: Theme.palette.gray700, width: "14px" }),
};
export const PhoneNumber = Template.bind({});
const options = [
    { value: "us", label: "US" },
    { value: "es", label: "ES" },
];
PhoneNumber.args = {
    label: "Phone number",
    leftContent: (React.createElement(Dropdown, { options: options, style: { border: "0 !important", padding: 0, boxShadow: "none" }, placeholder: options[0].label })),
    rightContent: React.createElement(HelpCircleIcon, { stroke: Theme.palette.gray400, width: "16px" }),
};
export const Error = Template.bind({});
Error.args = {
    label: "Email",
    placeholder: "Email here...",
    error: "This is error.",
    leftContent: React.createElement(MailIcon, { stroke: Theme.palette.gray700, width: "20px" }),
    rightContent: React.createElement(DangerIcon, { stroke: Theme.palette.error500, size: "16px" }),
};
export const WithHint = Template.bind({});
WithHint.args = {
    label: "Email",
    placeholder: "Email here...",
    hint: "This is hint.",
    leftContent: React.createElement(MailIcon, { stroke: Theme.palette.gray700, width: "20px" }),
    rightContent: React.createElement(HelpCircleIcon, { stroke: Theme.palette.gray400, width: "16px" }),
};
//# sourceMappingURL=index.stories.js.map