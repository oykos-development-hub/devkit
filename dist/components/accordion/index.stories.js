import React from "react";
import { SSSAccordion } from "./index";
import { Theme } from "../../shared/theme";
import { ChevronDownIcon, MoreVerticalIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { StoryWrapper } from "../../shared/components/story-wrapper";
export default {
    component: SSSAccordion,
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
        React.createElement(SSSAccordion, Object.assign({}, args)))));
export const Default = Template.bind({});
Default.args = {
    title: "Accordion title",
    content: "Accordion content",
};
const moreOptionsIcon = (e) => {
    e.stopPropagation();
    console.log("clicked");
};
export const CustomAccordion = Template.bind({});
CustomAccordion.args = {
    customHeader: (React.createElement("div", { style: { display: "flex", justifyContent: "space-between", width: "100%" } },
        React.createElement("div", { style: { fontSize: "16px" } }, "Test custom accordion"),
        React.createElement("div", { style: { display: "flex", alignItems: "center" } },
            React.createElement(ChevronDownIcon, { width: "15px", height: "8px" }),
            React.createElement(MoreVerticalIcon, { width: "4px", height: "16px", style: { paddingRight: "12px", paddingLeft: "20px" }, onClick: (e) => moreOptionsIcon(e) })))),
    customContent: React.createElement("div", { style: { padding: "4px 16px 16px 16px", fontSize: "14px" } }, "custom accordion content"),
};
export const CustomAccordionWithInput = Template.bind({});
CustomAccordionWithInput.args = {
    customHeader: (React.createElement("div", { style: { display: "flex", justifyContent: "space-between", width: "100%" } },
        React.createElement("div", { style: { fontSize: "16px" } }, "Test custom accordion"),
        React.createElement("div", { style: { display: "flex", alignItems: "center" } },
            React.createElement(ChevronDownIcon, { width: "15px", height: "8px" }),
            React.createElement(MoreVerticalIcon, { width: "4px", height: "16px", style: { paddingRight: "12px", paddingLeft: "20px" }, onClick: (e) => moreOptionsIcon(e) })))),
    customContent: (React.createElement("div", { style: { padding: "4px 16px 16px 16px", fontSize: "14px" } },
        React.createElement("input", { type: "text", placeholder: "name" }))),
};
//# sourceMappingURL=index.stories.js.map