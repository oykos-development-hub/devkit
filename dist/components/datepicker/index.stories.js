import React, { useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Datepicker } from "./index";
export default {
    title: "Components/Datepicker",
    component: Datepicker,
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        dateFormat: {
            control: {
                type: "select",
                options: ["dd/MM/yyyy", "MM/dd/yyyy", "yyyy/MM/dd", "yyyy/dd/MM"],
            },
        },
    },
};
const Template = (args) => {
    const [date, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const onChange = (date) => {
        if (date instanceof Date) {
            setDate(date);
        }
        else {
            setDate(date[0]);
            setEndDate(date[1]);
        }
    };
    return (React.createElement(StoryWrapper, null,
        React.createElement(Datepicker, Object.assign({}, args, { selected: date, startDate: date, endDate: endDate, onChange: onChange }))));
};
export const Default = Template.bind({});
Default.args = {
    dateFormat: "dd/MM/yyyy",
};
export const WithLabel = Template.bind({});
Default.args = {
    dateFormat: "dd/MM/yyyy",
    label: "Date label",
};
export const WithError = Template.bind({});
WithError.args = {
    dateFormat: "dd/MM/yyyy",
    error: "Error message here",
};
export const WithRange = Template.bind({});
WithRange.args = {
    dateFormat: "dd/MM/yyyy",
    selectsRange: true,
};
//# sourceMappingURL=index.stories.js.map