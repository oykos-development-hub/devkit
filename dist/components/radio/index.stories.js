import React from "react";
import { Radio } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { RadioSize } from "./types";
import { Theme } from "../../shared/theme";
export default {
    title: "Components/Radio",
    component: Radio,
    argTypes: {
        size: {
            control: {
                type: "radio",
                options: ["sm", "md"],
            },
        },
        checked: {
            control: {
                type: "boolean",
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        style: {
            control: {
                type: "object",
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
    },
};
const Template = (args) => {
    return (React.createElement(StoryWrapper, null,
        React.createElement(Radio, Object.assign({}, args))));
};
export const Default = Template.bind({});
Default.args = {
    size: RadioSize.sm,
    disabled: false,
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map