import React, { useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSAlert } from "./";
import { CircleCheckIcon, DangerIcon, InfoIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
import { SSSTypography } from "../typography";
export default {
    component: SSSAlert,
    title: "Components/Alert",
    argTypes: {
        content: {
            control: {
                type: "text",
            },
        },
        variant: {
            control: {
                type: "radio",
                options: ["success", "error", "info"],
            },
        },
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
            },
        },
        size: {
            control: {
                type: "radio",
                options: ["sm", "md", "lg"],
            },
        },
    },
};
const Template = (args) => {
    const [closed, setClosed] = useState(false);
    return React.createElement(StoryWrapper, null, !closed && React.createElement(SSSAlert, Object.assign({}, args, { onClose: () => setClosed(true) })));
};
export const Success = Template.bind({});
Success.args = {
    content: React.createElement(SSSTypography, { content: "Success", variant: "bodyMedium" }),
    variant: "success",
    size: "md",
    icon: React.createElement(CircleCheckIcon, { fill: "none", stroke: "white" }),
    closeIcon: true,
};
export const Error = Template.bind({});
Error.args = {
    content: React.createElement(SSSTypography, { content: "Error message", variant: "bodyMedium" }),
    variant: "error",
    size: "md",
    icon: React.createElement(DangerIcon, { fill: "none", stroke: "white" }),
    closeIcon: true,
};
export const Warning = Template.bind({});
Warning.args = {
    content: React.createElement(SSSTypography, { content: "Warning message", variant: "bodyMedium" }),
    variant: "warning",
    size: "md",
    icon: React.createElement(DangerIcon, { fill: "none", stroke: "white" }),
    closeIcon: true,
};
export const Info = Template.bind({});
Info.args = {
    content: React.createElement(SSSTypography, { content: "Info message!", variant: "bodyMedium" }),
    variant: "info",
    size: "md",
    icon: React.createElement(InfoIcon, { stroke: "white" }),
    closeIcon: true,
};
//# sourceMappingURL=index.stories.js.map