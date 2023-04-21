import React from "react";
import { Tooltip } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
export default {
    title: "Components/Tooltip",
    component: Tooltip,
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
        },
        style: {},
        position: {
            control: {
                type: "radio",
                options: ["right", "left", "top", "bottom", "topLeft", "topRight"],
            },
        },
        arrow: {
            control: {
                type: "boolean",
            },
        },
        variant: {
            control: {
                type: "radio",
                options: ["standard", "filled"],
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Tooltip, Object.assign({}, args),
        React.createElement("span", null, "Hover over me! "))));
export const TooltipDefault = Template.bind({});
TooltipDefault.args = {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
};
export const TooltipWithTitle = Template.bind({});
TooltipWithTitle.args = {
    title: "Tooltip title",
    content: "This is a tooltip",
};
export const TooltipVariantFilled = Template.bind({});
TooltipVariantFilled.args = {
    content: "This is a tooltip",
    variant: "filled",
};
export const TooltipWithArrow = Template.bind({});
TooltipWithArrow.args = {
    content: "This is a tooltip",
    arrow: true,
    variant: "filled",
};
export const StyledTooltip = Template.bind({});
StyledTooltip.args = {
    content: "This is a tooltip",
    arrow: true,
    variant: "filled",
    style: { color: "yellow", backgroundColor: "red", width: "200px" },
};
//# sourceMappingURL=index.stories.js.map