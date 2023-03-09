import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BadgeProps, BadgeSizes } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Badge } from "./index";
import DotIcon from "../icon/variations/DotIcon";

export default {
  component: Badge,
  title: "Components/Badge",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "warning", "error", "success"],
      },
    },
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => (
  <StoryWrapper>
    <Badge {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  content: "Label",
  size: BadgeSizes.md,
};

export const WithHtmlContent = Template.bind({});
WithHtmlContent.args = {
  variant: "warning",
  content: <span>Label</span>,
  size: BadgeSizes.md,
};

export const WithDot = Template.bind({});
WithDot.args = {
  variant: "success",
  content: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        columnGap: "7px",
      }}
    >
      <DotIcon />
      <span>Label</span>
    </div>
  ),
  size: BadgeSizes.md,
};
