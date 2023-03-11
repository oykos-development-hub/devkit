import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Switch } from "./index";
import { Typography } from "../typography";
export default {
    component: Switch,
    title: "Components/Switch",
    argTypes: {
        disabled: {
            control: {
                type: "boolean",
            },
        },
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        size: {
            control: {
                type: "radio",
                options: ["sm", "md"],
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Switch, Object.assign({}, args))));
export const NoContent = Template.bind({});
NoContent.args = {
    size: "md",
    disabled: false,
};
export const WithContent = Template.bind({});
WithContent.args = {
    content: (React.createElement(React.Fragment, null,
        React.createElement(Typography, { content: "Remember me" }),
        React.createElement(Typography, { content: "Save my login details for next time." }))),
    size: "md",
    disabled: false,
};
//# sourceMappingURL=index.stories.js.map