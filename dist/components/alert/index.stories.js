import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Alert } from "./index";
import { CircleCheckIcon, DangerIcon, InfoIcon } from "../icon";
import { Theme } from "../../shared/theme";
export default {
    component: Alert,
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
                options: ["primary", "success", "error", "info"],
            },
        },
        icon: {
            control: {
                type: "object",
            },
        },
        onClose: {
            defaultValue: () => alert("Closed!"),
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
                height: "auto",
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
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Alert, Object.assign({}, args))));
export const Primary = Template.bind({});
Primary.args = {
    content: "Primary message",
    variant: "primary",
    size: "md",
    closeIcon: true,
};
export const Success = Template.bind({});
Success.args = {
    content: "Success message",
    variant: "success",
    size: "md",
    icon: React.createElement(CircleCheckIcon, { fill: "none", stroke: "white" }),
    closeIcon: true,
};
export const Info = Template.bind({});
Info.args = {
    content: "Info message",
    variant: "info",
    size: "md",
    icon: React.createElement(InfoIcon, { fill: "none", stroke: "white" }),
    closeIcon: true,
};
export const Warning = Template.bind({});
Warning.args = {
    content: "Warning message",
    variant: "warning",
    size: "md",
    icon: React.createElement(DangerIcon, { fill: "none", stroke: "white" }),
    closeIcon: true,
};
export const Info = Template.bind({});
Info.args = {
    content: "Info message!",
    variant: "info",
    size: "md",
    icon: React.createElement(CircleCheckIcon, { stroke: "white" }),
    description: "This is the description",
    closeIcon: true,
};
//# sourceMappingURL=index.stories.js.map