import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Alert } from "./index";
import { CircleCheckIcon, DangerIcon } from "../icon";
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
        onClose: {
            defaultValue: () => alert("Closed!"),
        },
        theme: {
            control: {
                type: "object",
            },
        },
        style: {
            control: {
                type: "object",
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
    content: "Title",
    variant: "primary",
    size: "md",
    icon: React.createElement(DangerIcon, { fill: "none", stroke: "white" }),
    description: "",
    closeIcon: true,
};
export const Success = Template.bind({});
Success.args = {
    content: "Title",
    variant: "success",
    size: "md",
    icon: React.createElement(CircleCheckIcon, { fill: "none", stroke: "white" }),
    description: "",
    closeIcon: true,
};
//# sourceMappingURL=index.stories.js.map