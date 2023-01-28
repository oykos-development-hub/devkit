import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { TypographyVariants } from "../typography/variants";
import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    content: {
      defaultValue: () => <span>Button</span>,
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <StoryWrapper>
    <Button {...args} />
  </StoryWrapper>
);

export const CustomButton = Template.bind({});
CustomButton.args = {
  content: "Button CTA",
  onClick: () => alert("Button clicked!"),
  variant: "primary",
  size: "lg",
  theme: Theme,
};
