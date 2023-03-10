import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Datepicker } from "./index";
import CalendarIcon from "../icon/variations/CalendarIcon";
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
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Datepicker, Object.assign({}, args))));
export const Default = Template.bind({});
Default.args = {
    dateFormat: "dd/MM/yyyy",
    calendarIcon: React.createElement(CalendarIcon, null),
};
//# sourceMappingURL=index.stories.js.map