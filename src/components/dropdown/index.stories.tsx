import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const data = [
    { label: "English", value: 1 },
    { label: "Italian", value: 2 },
    { label: "Spanish", value: 3 },
    { label: "Serbian", value: 4 },
    { label: "Croatian", value: 5 },
    { label: "Dutch", value: 6 },
    { label: "German", value: 7 },
  ];

  return (
    <StoryWrapper>
      <Dropdown {...args} data={data} />
    </StoryWrapper>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  color: "",
  theme: Theme,
};

export const Multiselect = Template.bind({});
Multiselect.args = {
  color: "",
  multi: true,
  theme: Theme,
};

export const Searchable = Template.bind({});
Searchable.args = {
  color: "",
  searchable: true,
  theme: Theme,
};
