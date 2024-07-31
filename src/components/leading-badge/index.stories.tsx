import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { LeadingBadgeProps, LeadingBadgeSizes } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSLeadingBadge } from "./index";

export default {
  component: SSSLeadingBadge,
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
} as ComponentMeta<typeof SSSLeadingBadge>;

const Template: ComponentStory<typeof SSSLeadingBadge> = (args: LeadingBadgeProps) => (
  <StoryWrapper>
    <SSSLeadingBadge {...args} />
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

export const WithPlus = Template.bind({});
WithPlus.args = {
  variant: "success",
  leadingBadgeTheme: "light",
  content: <span style={{ paddingLeft: "4px" }}>We’ve just released a new feature</span>,
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
      <span>Label</span>
      <span>+</span>
    </div>
  ),

  size: LeadingBadgeSizes.md,
  style: { flexDirection: "row-reverse" },
};
