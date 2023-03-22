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
    dateFormat: {
      control: {
        type: "select",
        options: ["dd/MM/yyyy", "MM/dd/yyyy", "yyyy/MM/dd", "yyyy/dd/MM"],
      },
    },
  },
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args: DatepickerTypes) => (
  <StoryWrapper>
    <Datepicker {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  dateFormat: "dd/MM/yyyy",
};

export const WithError = Template.bind({});
WithError.args = {
  dateFormat: "dd/MM/yyyy",
  error: "Error message here",
};
