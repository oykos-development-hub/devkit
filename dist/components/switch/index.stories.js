import React from "react";
import { SwitchSizes } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Switch } from "./index";
export default {
    component: Switch,
    title: "Components/Switch",
    argTypes: {
        disabled: {
            control: {
                type: "boolean",
            },
        },
        text: {
            control: {
                type: "text",
            },
        },
        supportingText: {
            control: {
                type: "text",
            },
        },
        onClick: {
            defaultValue: () => alert("Button clicked!"),
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
export const Default = Template.bind({});
Default.args = {
    text: "Remember me",
    supportingText: "Save my login details for next time.",
    size: SwitchSizes.md,
    disabled: false,
};
//# sourceMappingURL=index.stories.js.map