import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertProps, AlertSizes, AlertVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Alert } from "./index";
import { Theme } from "../../shared/theme";
import { DangerIcon } from "../icon";

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
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <StoryWrapper>
    <Alert {...args} />
  </StoryWrapper>
);

export const Custom = Template.bind({});
Custom.args = {
  content: "Title",
  variant: AlertVariants.success,
  size: AlertSizes.md,
  icon: <DangerIcon />,
  theme: Theme,
};
