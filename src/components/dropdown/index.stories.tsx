import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: false },
      description: "Dropdown label",
      control: "text",
    },
    className: {
      name: "className",
      type: { name: "string", required: false },
      description: "Dropdown classes",
      control: "text",
    },
    isSearchable: {
      name: "isSearchable",
      type: { name: "boolean", required: false },
      control: "boolean",
    },
    confirmed: {
      name: "confirmed",
      type: { name: "boolean", required: false },
      defaultValue: false,
      control: "boolean",
    },
  },
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
      <Dropdown {...args} label={args.label} className={`${args.className || ""}`} data={data} defaultValue={1} />
    </StoryWrapper>
  );
};

export const Basic = Template.bind({});

export const Multiselect = Template.bind({});
Multiselect.args = {
  isMulti: true,
};

export const Searchable = Template.bind({});
Searchable.args = {
  isSearchable: true,
};

export const Confirmed = Template.bind({});
Confirmed.args = {
  confirmed: true,
};
