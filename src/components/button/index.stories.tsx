import React from "react";
import { Button } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";

export default {
    component: Button,
    title: "Components/Button",

    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        width: {
            control: {
                type: "text",
            },
        },
        type: {
            control: {
                type: "text",
            },
        },
        height: {
            control: {
                type: "text",
            },
        },
        primaryColor: {
            control: {
                type: "text",
            },
        },
        secondaryColor: {
            control: {
                type: "text",
            },
        },
        tertiaryColor: {
            control: {
                type: "text",
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
        icon: {
            control: {
                type: "text",
            },
        },
        iconPosition: {
            control: {
                type: "radio",
                options: ["left", "right"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        label: {
            control: {
                type: "text",
            },
        },
        padding: {
            control: {
                type: "text",
            },
        },
        margin: {
            control: {
                type: "text",
            },
        },
        borderRadius: {
            control: {
                type: "text",
            },
        },
        borderWidth: {
            control: {
                type: "text",
            },
        },
        gap: {
            control: {
                type: "text",
            },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
    <StoryWrapper>
        <Button {...args} />
    </StoryWrapper>
);

// primary
export const PrimaryButtonDefault = Template.bind({});
PrimaryButtonDefault.args = {
    label: "Primary",
    variant: "primary",
    primaryColor: "purple",
    borderRadius: "2em",
};

export const PrimaryButtonThemed = Template.bind({});
PrimaryButtonThemed.args = {
    label: "Primary",
    variant: "primary",
    theme: Theme,
};

// secondary
export const SecondaryButtonDefault = Template.bind({});
SecondaryButtonDefault.args = {
    label: "Secondary",
    variant: "secondary",
    secondaryColor: "lightblue",
    borderRadius: "2em",
};

export const SecondaryButtonThemed = Template.bind({});
SecondaryButtonThemed.args = {
    label: "Secondary",
    variant: "secondary",
    theme: Theme,
};

//tertiary
export const TertiaryButtonDefault = Template.bind({});
TertiaryButtonDefault.args = {
    label: "Tertiary",
    tertiaryColor: "red",
    variant: "tertiary",
    borderRadius: "2em",
};

export const TertiaryButtonThemed = Template.bind({});
TertiaryButtonThemed.args = {
    label: "Tertiary",
    variant: "tertiary",
    theme: Theme,
};
