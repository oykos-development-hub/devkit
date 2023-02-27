import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { DatepickerTypes } from "./types";
import { Theme } from "../../shared/theme";
import { Datepicker } from "./index";

export default {
  title: "Components/Datepicker",
  component: Datepicker,
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args: DatepickerTypes) => (
  <StoryWrapper>
    <Datepicker {...args} />
  </StoryWrapper>
);

export const DatepickerDefault = Template.bind({});
DatepickerDefault.args = {};
