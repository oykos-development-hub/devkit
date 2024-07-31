import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSHeader } from "./index";
import { BellIcon } from "../icons";
import { Theme } from "../../shared/theme";
export default {
    component: SSSHeader,
    title: "Components/Header",
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
    React.createElement(SSSHeader, Object.assign({}, args))));
export const Default = Template.bind({});
Default.args = {
    icon: React.createElement(BellIcon, { stroke: "white", width: "23", height: "25" }),
};
//# sourceMappingURL=index.stories.js.map