import { DangerIcon, HelpCircleIcon, MailIcon } from "@oykos-development/devkit-react-ts-styled-components";
import React, { useEffect, useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSDropdown } from "../dropdown";
import { SSSTypography } from "../typography";
import { SSSInput } from "./";
export default {
    title: "Components/Input",
    component: SSSInput,
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
    },
};
const Template = (args) => {
    const [value, setValue] = useState("");
    useEffect(() => {
        var _a;
        setValue((_a = args === null || args === void 0 ? void 0 : args.value) !== null && _a !== void 0 ? _a : "");
    }, [args.value]);
    return (React.createElement(StoryWrapper, null,
        React.createElement("div", { style: { width: "400px" } },
            React.createElement(SSSInput, Object.assign({ label: "Input" }, args, { name: "test", value: value, onChange: (e) => setValue(e.target.value) })))));
};
export const InputDefault = Template.bind({});
InputDefault.args = {
    placeholder: "placeholder...",
};
export const Currency = Template.bind({});
Currency.args = {
    label: React.createElement(SSSTypography, { content: "Amount", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: "1.000,00",
    leftContent: React.createElement(SSSTypography, { content: React.createElement("div", null, "\u20AC"), style: { color: Theme.palette.gray700 } }),
    rightContent: React.createElement(HelpCircleIcon, { stroke: Theme.palette.gray700, width: "14px" }),
    type: "currency",
    value: "123456",
};
export const PhoneNumber = Template.bind({});
const options = [
    { id: "us", title: React.createElement(SSSTypography, { content: "US", variant: "bodySmall" }) },
    { id: "es", title: React.createElement(SSSTypography, { content: "ES", variant: "bodySmall" }) },
];
PhoneNumber.args = {
    label: React.createElement(SSSTypography, { content: "Phone number", variant: "bodySmall", style: { fontWeight: 600 } }),
    leftContent: (React.createElement(SSSDropdown, { options: options, style: { border: "0 !important", padding: 0, boxShadow: "none !important" }, placeholder: options[0].title, name: "phone_number" })),
    rightContent: React.createElement(HelpCircleIcon, { stroke: Theme.palette.gray400, width: "16px" }),
};
export const Error = Template.bind({});
Error.args = {
    label: React.createElement(SSSTypography, { content: "Email", variant: "bodySmall", style: { fontWeight: 600 } }),
    placeholder: "Email here...",
    error: "This is error.",
    leftContent: React.createElement(MailIcon, { stroke: Theme.palette.gray700, width: "20px" }),
    rightContent: React.createElement(DangerIcon, { stroke: Theme.palette.error500, size: "16px" }),
    disabled: false,
};
export const WithHint = Template.bind({});
WithHint.args = {
    label: "test",
    disabled: true,
    placeholder: "Email here...",
    hint: "This is hint.",
    leftContent: React.createElement(MailIcon, { stroke: Theme.palette.gray700, width: "20px" }),
    rightContent: React.createElement(HelpCircleIcon, { stroke: Theme.palette.gray400, width: "16px" }),
};
//# sourceMappingURL=index.stories.js.map