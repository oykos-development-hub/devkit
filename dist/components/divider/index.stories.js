import React from "react";
import { SSSDivider } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
export default {
    title: "Components/Divider",
    component: SSSDivider,
    argTypes: {
        color: {
            control: {
                type: "color",
            },
        },
        width: {
            control: {
                type: "text",
            },
        },
        height: {
            control: {
                type: "text",
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
        style: {
            control: {
                type: "object",
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(SSSDivider, Object.assign({}, args))));
export const Default = Template.bind({});
Default.args = {
    width: "240px",
    height: "1px",
};
//# sourceMappingURL=index.stories.js.map