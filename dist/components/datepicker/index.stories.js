import React from "react";
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
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Datepicker, Object.assign({}, args))));
export const DatepickerDefault = Template.bind({});
DatepickerDefault.args = {};
//# sourceMappingURL=index.stories.js.map