import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BadgeProps, BadgeSizes } from "@oykos-development/devkit-react-ts-styled-components";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSBadge } from "./index";
import DotIcon from "../icons/variations/DotIcon";
import XIcon from "../icons/variations/XIcon";
import { SSSTypography } from "../typography";

export default {
  component: SSSBadge,
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
} as ComponentMeta<typeof SSSBadge>;

const Template: ComponentStory<typeof SSSBadge> = (args: BadgeProps) => (
  <StoryWrapper>
    <SSSBadge {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  content: <SSSTypography content="Label" variant="bodySmall" />,
  size: BadgeSizes.md,
};

export const WithDot = Template.bind({});
WithDot.args = {
  variant: "primary",
  leftSlot: <DotIcon />,
  content: <SSSTypography content="Label" variant="bodySmall" />,
  size: BadgeSizes.md,
};

export const WithXIcon = Template.bind({});
WithXIcon.args = {
  variant: "primary",
  rightSlot: <XIcon />,
  content: <SSSTypography content="Label" variant="bodySmall" />,
  size: BadgeSizes.md,
};
