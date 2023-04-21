import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertProps } from "./types";
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
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <StoryWrapper>
    <Alert {...args} />
  </StoryWrapper>
);

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
  icon: <CircleCheckIcon fill={"none"} stroke={"white"} />,
  closeIcon: true,
};

export const Error = Template.bind({});
Error.args = {
  content: "Error message",
  variant: "error",
  size: "md",
  icon: <DangerIcon fill={"none"} stroke={"white"} />,
  closeIcon: true,
};

export const Warning = Template.bind({});
Warning.args = {
  content: "Warning message",
  variant: "warning",
  size: "md",
  icon: <DangerIcon fill={"none"} stroke={"white"} />,
  closeIcon: true,
};

export const Info = Template.bind({});
Info.args = {
  content: "Info message!",
  variant: "info",
  size: "md",
  icon: <InfoIcon stroke={"white"} />,
  description: "This is the description",
  closeIcon: true,
};
