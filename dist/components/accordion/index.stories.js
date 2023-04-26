import React from "react";
import { Accordion } from "./index";
import { Typography } from "../../index";
import { Theme } from "../../shared/theme";
import { ChevronDownIcon } from "../icon";
import { StoryWrapper } from "../../shared/components/story-wrapper";
export default {
    component: Accordion,
    title: "Components/Accordion",
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
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, { style: { display: "grid", alignContent: "center" } },
    React.createElement("div", { style: { width: "400px" } },
        React.createElement(Accordion, Object.assign({}, args)))));
export const Default = Template.bind({});
Default.args = {
    data: [
        {
            title: React.createElement(Typography, { variant: "bodySmall", content: "Accordion Title" }),
            content: (React.createElement(Typography, { variant: "bodySmall", content: "Lorem ipsum dolor sit amet. Aut internos autem et dolorem consequuntur a culpa itaque! Lorem ipsum dolor sit amet. Aut internos autem et dolorem consequuntur a culpa itaque!", style: { color: "#616161" } })),
        },
        {
            title: React.createElement(Typography, { variant: "bodySmall", content: "Accordion 1" }),
            content: React.createElement(Typography, { variant: "bodySmall", content: "Accordion 1 content.", style: { color: "#616161" } }),
        },
    ],
};
export const CustomHeaderAndContentAccordion = Template.bind({});
CustomHeaderAndContentAccordion.args = {
    data: [
        {
            customHeader: (React.createElement("div", { style: { width: "100%" } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                    "Custom Accordion 1 ",
                    React.createElement(ChevronDownIcon, null)))),
            customContent: React.createElement("div", { style: { padding: "4px 16px 16px" } }, "test custom content"),
        },
    ],
};
//# sourceMappingURL=index.stories.js.map