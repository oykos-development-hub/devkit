import React from "react";
import { Pin } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
export default {
    title: "Components/PIN input",
    component: Pin,
    argTypes: {
        type: {
            control: {
                type: "radio",
                options: ["password", "numeric"],
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Pin, Object.assign({}, args))));
export const PINPassword = Template.bind({});
PINPassword.args = {
    type: "password",
};
export const PINNumeric = Template.bind({});
PINNumeric.args = {
    type: "numeric",
};
//# sourceMappingURL=index.stories.js.map