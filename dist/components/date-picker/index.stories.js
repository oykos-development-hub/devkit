import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSDatepicker } from "./index";
import { Controller, useForm } from "react-hook-form";
export default {
    title: "Components/Datepicker",
    component: SSSDatepicker,
    argTypes: {
        dateFormat: {
            name: "Date Format",
            control: {
                type: "select",
                options: ["dd/MM/yyyy", "MM/dd/yyyy", "yyyy/MM/dd", "yyyy/dd/MM"],
            },
        },
        error: {
            name: "Error",
            control: {
                type: "text",
            },
        },
        label: {
            name: "Label",
            control: {
                type: "text",
            },
        },
        selectsRange: {
            name: "range",
            control: {
                type: "boolean",
            },
        },
    },
};
const Template = (args) => {
    const dateString = "2023-09-05T00:00:00Z";
    const { control } = useForm({ defaultValues: { date: dateString } });
    return (React.createElement(StoryWrapper, null,
        React.createElement(Controller, { control: control, name: "date", render: ({ field: { name, value, onChange } }) => (React.createElement(SSSDatepicker, Object.assign({}, args, { selected: value ? new Date(value) : null, onChange: onChange, name: name }))) })));
};
export const Default = Template.bind({});
export const WithError = Template.bind({});
WithError.args = {
    error: "Error message here",
    label: "Date label",
};
export const Range = Template.bind({});
Range.args = {
    selectsRange: true,
    label: "Date label",
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    label: "Date label",
};
//# sourceMappingURL=index.stories.js.map