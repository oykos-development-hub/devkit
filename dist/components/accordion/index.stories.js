import React from "react";
import { Accordion, AccordionItem } from "./index";
import { Button, Typography } from "../../index";
import { Theme } from "../../shared/theme";
import { ChevronDownIcon, InfoIcon } from "../icon";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Input } from "../input";
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
const Template = (args) => {
    const [open, setOpen] = React.useState(false);
    return (React.createElement(StoryWrapper, { style: { display: "grid", alignContent: "center" } },
        React.createElement("div", { style: { width: "400px" } },
            React.createElement(AccordionItem, Object.assign({ isOpen: open, toggle: () => setOpen(!open) }, args)))));
};
export const Default = Template.bind({});
Default.args = {
    title: React.createElement(Typography, { variant: "bodySmall", content: "Accordion Title" }),
    content: React.createElement(Typography, { variant: "bodySmall", content: "Accordion Content" }),
};
export const CustomHeaderAndContentAccordion = Template.bind({});
CustomHeaderAndContentAccordion.args = {
    customHeader: (React.createElement("div", { style: { width: "100%" } },
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
            React.createElement("div", { style: { display: "flex", alignItems: "center" } },
                React.createElement(InfoIcon, { style: { marginRight: "0.5rem" }, width: "20px", height: "20px" }),
                React.createElement(Typography, { variant: "bodySmall", content: "Custom Accordion" })),
            React.createElement(ChevronDownIcon, null)))),
    customContent: (React.createElement("div", { style: { padding: "4px 16px 16px" } },
        React.createElement(Typography, { content: "This is an example accordion with custom content. It has some text with an Input and a Button below it.", variant: "bodySmall", style: { marginBottom: "0.25rem" } }),
        React.createElement(Input, { style: { marginBottom: "0.25rem" } }),
        React.createElement(Button, { content: "Button" }))),
};
//# sourceMappingURL=index.stories.js.map