import React from "react";
import { BadgeSizes } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Badge } from "./index";
import DotIcon from "../icon/variations/DotIcon";
export default {
    component: Badge,
    title: "Components/Badge",
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["primary", "secondary", "warning", "error", "success"],
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
                options: ["sm", "md", "lg"],
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Badge, Object.assign({}, args))));
export const Default = Template.bind({});
Default.args = {
    variant: "primary",
    content: "Label",
    size: BadgeSizes.md,
};
export const WithHtmlContent = Template.bind({});
WithHtmlContent.args = {
    variant: "warning",
    content: React.createElement("span", null, "Label"),
    size: BadgeSizes.md,
};
export const WithDot = Template.bind({});
WithDot.args = {
    variant: "success",
    content: React.createElement("span", null, "Label"),
    extraContent: React.createElement(DotIcon, null),
    size: BadgeSizes.md,
};
//# sourceMappingURL=index.stories.js.map