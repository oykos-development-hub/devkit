import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { LeadingBadgeSizes } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSLeadingBadge } from "./index";
export default {
    component: SSSLeadingBadge,
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
    React.createElement(SSSLeadingBadge, Object.assign({}, args))));
export const Default = Template.bind({});
Default.args = {
    variant: "primary",
    leadingBadgeTheme: "light",
    badgeContent: "New feature",
    content: React.createElement("span", null, "We\u2019ve just released a new feature"),
    size: LeadingBadgeSizes.md,
};
export const WithPlus = Template.bind({});
WithPlus.args = {
    variant: "success",
    leadingBadgeTheme: "light",
    content: React.createElement("span", { style: { paddingLeft: "4px" } }, "We\u2019ve just released a new feature"),
    badgeContent: (React.createElement("div", { style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "7px",
        } },
        React.createElement("span", null, "Label"),
        React.createElement("span", null, "+"))),
    size: LeadingBadgeSizes.md,
    style: { flexDirection: "row-reverse" },
};
//# sourceMappingURL=index.stories.js.map