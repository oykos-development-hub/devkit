import React from "react";
import { ButtonSizes, ButtonVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Button } from "./index";
import { Loader } from "../loader";
export default {
    component: Button,
    title: "Components/Button",
    argTypes: {
        content: {
            defaultValue: () => "Testiranje",
        },
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        onClick: {
            defaultValue: () => alert("Button clicked!"),
        },
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        style: {
            defaultValue: {
                width: "fit-content",
                height: "fit-content",
                margin: "0em",
                borderWidth: "1px",
                gap: "0.5em",
            },
        },
        size: {
            control: {
                type: "radio",
                options: ["xs", "sm", "md", "lg", "xl"],
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Button, Object.assign({}, args))));
export const CustomButton = Template.bind({});
CustomButton.args = {
    content: "Button CTA",
    onClick: () => alert("Button clicked!"),
    variant: ButtonVariants.primary,
    size: ButtonSizes.lg,
};
export const StyledButton = Template.bind({});
StyledButton.args = {
    content: "Styled Button",
    onClick: () => alert("Button clicked!"),
    variant: ButtonVariants.primary,
    size: ButtonSizes.lg,
    style: {
        backgroundColor: Theme.palette.success500,
        color: Theme.palette.white,
    },
};
export const LoadingButton = Template.bind({});
LoadingButton.args = {
    content: "Loading Button",
    onClick: () => alert("Button clicked!"),
    variant: ButtonVariants.primary,
    size: ButtonSizes.lg,
    isLoading: true,
    loader: React.createElement(Loader, { variant: "three", width: "16px", height: "16px" }),
};
//# sourceMappingURL=index.stories.js.map