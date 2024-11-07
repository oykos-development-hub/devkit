import React from "react";
import { SSSDivider } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSDividerProps } from "./types";

export default {
  title: "Components/Divider",
  component: SSSDivider,
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
    style: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof SSSDivider>;

const Template: ComponentStory<typeof SSSDivider> = (args: SSSDividerProps) => (
  <StoryWrapper>
    <SSSDivider {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  width: "240px",
  height: "1px",
};
