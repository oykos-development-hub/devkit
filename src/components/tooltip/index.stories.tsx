import React from "react";
import Tooltip from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { TooltipProps } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
    },
    style: {},
    position: {
      control: {
        type: "radio",
        options: ["right", "left", "top", "bottom", "topLeft", "topRight"],
      },
    },
    arrow: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      control: {
        type: "radio",
        options: ["standard", "filled"],
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <StoryWrapper>
    <Tooltip {...args}>
      <span>Hover over me!</span>
    </Tooltip>
  </StoryWrapper>
);

export const TooltipDefault = Template.bind({});

TooltipDefault.args = {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
};

//
export const TooltipWithTitle = Template.bind({});

TooltipWithTitle.args = {
  title: "Tooltip title",
  content: "This is a tooltip",
};

//
export const TooltipVariantFilled = Template.bind({});

TooltipVariantFilled.args = {
  content: "This is a tooltip",
  variant: "filled",
};

//
export const TooltipWithArrow = Template.bind({});

TooltipWithArrow.args = {
  content: "This is a tooltip",
  arrow: true,
  variant: "filled",
};

//

export const StyledTooltip = Template.bind({});

StyledTooltip.args = {
  content: "This is a tooltip",
  arrow: true,
  variant: "filled",
  style: { color: "yellow", backgroundColor: "red", width: "200px" },
};

//
