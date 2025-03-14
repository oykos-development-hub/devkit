import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import DotIcon from "../icon/variations/DotIcon";
import { LeadingBadgeProps, LeadingBadgeSizes } from "./types";
import { LeadingBadge } from "./";

export default {
  component: LeadingBadge,
  title: "Components/LeadingBadge",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "warning", "error", "success"],
      },
    },
    leadingBadgeTheme: {
      control: {
        type: "select",
        options: ["light", "medium", "dark"],
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
        options: ["md", "lg"],
      },
    },
  },
} as ComponentMeta<typeof LeadingBadge>;

const Template: ComponentStory<typeof LeadingBadge> = (args: LeadingBadgeProps) => (
  <StoryWrapper>
    <LeadingBadge {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  leadingBadgeTheme: "light",
  badgeContent: "New feature",
  content: <span>We’ve just released a new feature</span>,
  size: LeadingBadgeSizes.md,
};

export const WithHtmlContent = Template.bind({});
WithHtmlContent.args = {
  variant: "warning",
  leadingBadgeTheme: "light",
  badgeContent: <span>New feature</span>,
  content: <span>We’ve just released a new feature</span>,
  size: LeadingBadgeSizes.md,
};

export const WithDot = Template.bind({});
WithDot.args = {
  variant: "success",
  leadingBadgeTheme: "light",
  badgeContent: (
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
  content: <span>We’ve just released a new feature</span>,
  size: LeadingBadgeSizes.md,
};
