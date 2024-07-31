import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSFooter } from "./index";
import { Theme } from "../../shared/theme";
export default {
    component: SSSFooter,
    title: "Components/Footer",
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        style: {
            control: {
                type: "object",
            },
            defaultValue: {
                width: "600px",
                height: "auto",
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(SSSFooter, Object.assign({}, args))));
export const Default = Template.bind({});
//# sourceMappingURL=index.stories.js.map