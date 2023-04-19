import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Alert } from "./index";
import { CircleCheckIcon, DangerIcon } from "../icon";
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
        height: "60px",
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
  content: "Title",
  variant: "primary",
  size: "md",
  icon: <DangerIcon fill={"none"} stroke={"white"} />,
  description: "",
  closeIcon: true,
};

export const Success = Template.bind({});
Success.args = {
  content: "Title",
  variant: "success",
  size: "md",
  icon: <CircleCheckIcon fill={"none"} stroke={"white"} />,
  description: "",
  closeIcon: true,
};

export const Info = Template.bind({});
Info.args = {
  content: "Info message!",
  variant: "info",
  size: "md",
  icon: <CircleCheckIcon stroke={"white"} />,
  description: "This is the description",
  closeIcon: true,
};
