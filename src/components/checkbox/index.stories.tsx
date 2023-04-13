import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { CheckboxSize } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    checked: {
      control: {
        disable: true,
      },
    },
    style: {
      control: {
        type: "object",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <StoryWrapper>
      <Checkbox {...args} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.sm,
  disabled: false,
  theme: Theme,
};
