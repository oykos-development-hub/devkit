import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import DotIcon from "../icon/variations/DotIcon";
import { LeadingBadgeSizes } from "./types";
import { LeadingBadge } from "./";
export default {
    component: LeadingBadge,
    title: "Components/LeadingBadge",
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["primary", "warning", "error", "success"],
            },
        },
        leadingBadgeTheme: {
            control: {
                type: "select",
                options: ["light", "medium", "dark"],
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
                options: ["md", "lg"],
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(LeadingBadge, Object.assign({}, args))));
export const Default = Template.bind({});
Default.args = {
    variant: "primary",
    leadingBadgeTheme: "light",
    badgeContent: "New feature",
    content: React.createElement("span", null, "We\u2019ve just released a new feature"),
    size: LeadingBadgeSizes.md,
};
export const WithHtmlContent = Template.bind({});
WithHtmlContent.args = {
    variant: "warning",
    leadingBadgeTheme: "light",
    badgeContent: React.createElement("span", null, "New feature"),
    content: React.createElement("span", null, "We\u2019ve just released a new feature"),
    size: LeadingBadgeSizes.md,
};
export const WithDot = Template.bind({});
WithDot.args = {
    variant: "success",
    leadingBadgeTheme: "light",
    badgeContent: (React.createElement("div", { style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "7px",
        } },
        React.createElement(DotIcon, null),
        React.createElement("span", null, "Label"))),
    content: React.createElement("span", null, "We\u2019ve just released a new feature"),
    size: LeadingBadgeSizes.md,
};
//# sourceMappingURL=index.stories.js.map