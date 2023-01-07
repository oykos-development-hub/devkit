import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pin } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";

export default {
  title: "Components/PIN input",
  component: Pin,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["password", "numeric"],
      },
    },
  },
} as ComponentMeta<typeof Pin>;

const Template: ComponentStory<typeof Pin> = (args) => (
  <StoryWrapper>
    <Pin {...args} />
  </StoryWrapper>
);

export const Password = Template.bind({});
Password.args = {
  type: "password",
};

export const Numeric = Template.bind({});
Numeric.args = {
  type: "numeric",
};
