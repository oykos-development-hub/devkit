import React from "react";

import { Directions } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultIcon, AssignIcon, XIcon, DangerIcon } from "./icons";

export default {
  title: "Example/Icons",
  component: DefaultIcon,
  argTypes: {
    theme: {
      control: {
        type: "object",
        options: Theme,
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
    direction: {
      control: {
        type: "select",
        options: ["No direction", ...Object.keys(Directions).map((key: string) => key)],
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof DefaultIcon>;

const Template: ComponentStory<typeof DefaultIcon> = (args) => (
  <StoryWrapper>
    <AssignIcon {...args} />
    <XIcon {...args} />
    <DangerIcon {...args} />
  </StoryWrapper>
);

export const Icon = Template.bind({});
Icon.args = {
  color: "",
  fill: "",
  width: "50",
  height: "",
  theme: Theme,
};
