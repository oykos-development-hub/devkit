import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pin } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { InputTypes } from "../input/types";

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
  type: InputTypes.password,
  variant: "standard",
};
export const PINPasswordOutlined = Template.bind({});
PINPasswordOutlined.args = {
  type: InputTypes.password,
  variant: "outlined",
};

export const PINNumericStandard = Template.bind({});
PINNumericStandard.args = {
  type: InputTypes.number,
  variant: "standard",
};
export const PINNumericOutlined = Template.bind({});
PINNumericOutlined.args = {
  type: InputTypes.number,
  variant: "outlined",
};
