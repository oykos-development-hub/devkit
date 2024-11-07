import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SSSTooltipProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSTooltip } from "./index";
import { TooltipPositions, TooltipVariants } from "@oykos-development/devkit-react-ts-styled-components";

export default {
  component: SSSTooltip,
  title: "Components/Tooltip",
  argTypes: {
    position: {
      control: {
        type: "radio",
        options: TooltipPositions,
      },
      defaultValue: TooltipPositions.bottom,
    },
    variant: {
      control: {
        type: "radio",
        options: TooltipVariants,
      },
    },
  },
} as ComponentMeta<typeof SSSTooltip>;

const Template: ComponentStory<typeof SSSTooltip> = (args: SSSTooltipProps) => (
  <StoryWrapper>
    <SSSTooltip {...args}>Hover over me!</SSSTooltip>
  </StoryWrapper>
);

export const NoContent = Template.bind({});
NoContent.args = {
  title: "This is a tooltip",
  variant: "standard",
};

export const WithContent = Template.bind({});
WithContent.args = {
  title: "This is a tooltip",
  variant: "standard",
  content:
    "Tooltips are used to describe  or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.",
};

export const NoContentFilled = Template.bind({});
NoContentFilled.args = {
  title: "This is a tooltip",
  variant: "filled",
};

export const WithContentFilled = Template.bind({});
WithContentFilled.args = {
  title: "This is a tooltip",
  variant: "filled",
  content:
    "Tooltips are used to describe  or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.",
};
