import React from "react";
import { AlertSizes, AlertVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Alert } from "./index";
import { DangerIcon } from "../icon";
export default {
    component: Alert,
    title: "Example/Alert",
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
export const Custom = Template.bind({});
Custom.args = {
    content: "Title",
    variant: AlertVariants.success,
    size: AlertSizes.md,
    icon: React.createElement(DangerIcon, null),
    description: "",
    closeIcon: true,
};
//# sourceMappingURL=index.stories.js.map