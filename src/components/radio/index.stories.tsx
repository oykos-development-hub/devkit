import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Radio } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { RadioSize } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
    checked: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
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
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  return (
    <StoryWrapper>
      <Radio {...args} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: RadioSize.sm,
  disabled: false,
  theme: Theme,
};
