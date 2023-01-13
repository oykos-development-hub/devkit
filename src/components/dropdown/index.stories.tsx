import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
  argTypes: {
    dropdownWidth: {
      control: {
        type: "text",
      },
    },
    dropdownPadding: {
      control: {
        type: "text",
      },
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
      <Dropdown {...args} data={data} />
    </StoryWrapper>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  bgColor: "#fff",
  hoverBorderColor: "#111",
  borderColor: "#7b7b7b",
  borderSize: "0.1rem",
  borderRadius: "0.25rem",
  handleClearColor: "#7b7b7b",
  selectedItemColor: "",
  selectedItemBgColor: "#7b7b7b",
  selectedItemBorderRadius: "0.25rem",
  selectedItemBorderColor: "",
  selectedItemBorderWidth: "0rem",
  itemColor: "",
  itemHoverColor: "",
  itemHoverBgColor: "",
  dropdownBgColor: "",
  dropdownBorderRadius: "0.25rem",
  dropdownWidth: "",
  dropdownPadding: "0rem",
  dropdownMaxHeight: "18.75rem",
  dropdownSelectedItemColor: "",
  inputColor: "",
  theme: Theme,
};

export const Multiselect = Template.bind({});
Multiselect.args = {
  multi: true,
  bgColor: "#fff",
  hoverBorderColor: "#111",
  borderColor: "#7b7b7b",
  borderSize: "0.1rem",
  borderRadius: "0.25rem",
  handleClearColor: "#7b7b7b",
  selectedItemColor: "",
  selectedItemBgColor: "#7b7b7b",
  selectedItemBorderRadius: "0.25rem",
  selectedItemBorderColor: "",
  selectedItemBorderWidth: "0rem",
  itemColor: "",
  itemHoverColor: "",
  itemHoverBgColor: "",
  dropdownBgColor: "",
  dropdownBorderRadius: "0.25rem",
  dropdownWidth: "",
  dropdownPadding: "0rem",
  dropdownMaxHeight: "18.75rem",
  dropdownSelectedItemColor: "",
  inputColor: "",
  theme: Theme,
};

export const Searchable = Template.bind({});
Searchable.args = {
  searchable: true,
  bgColor: "#fff",
  hoverBorderColor: "#111",
  borderColor: "#7b7b7b",
  borderSize: "0.1rem",
  borderRadius: "0.25rem",
  handleClearColor: "#7b7b7b",
  selectedItemColor: "",
  selectedItemBgColor: "#7b7b7b",
  selectedItemBorderRadius: "0.25rem",
  selectedItemBorderColor: "",
  selectedItemBorderWidth: "0rem",
  itemColor: "",
  itemHoverColor: "",
  itemHoverBgColor: "",
  dropdownBgColor: "",
  dropdownBorderRadius: "0.25rem",
  dropdownWidth: "",
  dropdownPadding: "0rem",
  dropdownMaxHeight: "18.75rem",
  dropdownSelectedItemColor: "",
  inputColor: "",
  theme: Theme,
};
