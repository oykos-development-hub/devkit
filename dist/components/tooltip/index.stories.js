var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Tooltip, __assign({}, args),
        React.createElement("span", null, "Hover over me!")))); };
export var TooltipDefault = Template.bind({});
TooltipDefault.args = {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
};
export var TooltipWithTitle = Template.bind({});
TooltipWithTitle.args = {
    title: "Tooltip title",
    content: "This is a tooltip",
};
export var TooltipVariantFilled = Template.bind({});
TooltipVariantFilled.args = {
    content: "This is a tooltip",
    variant: "filled",
};
export var TooltipWithArrow = Template.bind({});
TooltipWithArrow.args = {
    content: "This is a tooltip",
    arrow: true,
    variant: "filled",
};
export var StyledTooltip = Template.bind({});
StyledTooltip.args = {
    content: "This is a tooltip",
    arrow: true,
    variant: "filled",
    style: { color: "yellow", backgroundColor: "red", width: "200px" },
};
//# sourceMappingURL=index.stories.js.map