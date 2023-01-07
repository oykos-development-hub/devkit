import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pin } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";

export default {
  title: "Components/PIN input",
  component: Pin,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["standard", "outlined"],
      },
    },
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

export const PINPasswordStandard = Template.bind({});
PINPasswordStandard.args = {
  type: "password",
  variant: "standard",
};
export const PINPasswordOutlined = Template.bind({});
PINPasswordOutlined.args = {
  type: "password",
  variant: "outlined",
};

export const PINNumericStandard = Template.bind({});
PINNumericStandard.args = {
  type: "numeric",
  variant: "standard",
};
export const PINNumericOutlined = Template.bind({});
PINNumericOutlined.args = {
  type: "numeric",
  variant: "outlined",
};
