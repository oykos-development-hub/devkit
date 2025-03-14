import React from "react";
import { Divider } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { DividerProps } from "./types";

export default {
  title: "Components/Divider",
  component: Divider,
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
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args: DividerProps) => (
  <StoryWrapper>
    <Divider {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  width: "240px",
  height: "1px",
};
