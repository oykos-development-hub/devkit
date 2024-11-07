import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSDropdown } from "./index";
import { SSSDropdownProps } from "./types";
import { CheckIcon, UserIcon } from "@oykos-development/devkit-react-ts-styled-components";
import Avatar from "./styles/avatar";

const dropdownOptions = [
  { id: "one", title: "One" },
  { id: "two", title: "Two" },
  { id: "three", title: "Three" },
  { id: "four", title: "Four" },
  { id: "five", title: "Five" },
  { id: "six", title: "Six" },
  { id: "seven", title: "Seven" },
  { id: "eight", title: "Eight" },
  { id: "nine", title: "Nine" },
  { id: "ten", title: "Ten" },
  { id: "twelve", title: "Twelve" },
  { id: "thirteen", title: "Thirteen" },
  { id: "fourteen", title: "Fourteen" },
];

export default {
  component: SSSDropdown,
  title: "Components/Dropdown",
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
    options: {
      control: {
        type: "object",
      },
      defaultValue: dropdownOptions,
    },
    isMulti: {
      control: {
        type: "boolean",
      },
    },
    menuIsOpen: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isSearchable: {
      control: {
        type: "boolean",
      },
    },
    showArrow: {
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    noOptionsText: {
      control: {
        type: "text",
      },
    },
    error: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof SSSDropdown>;

const Template: ComponentStory<typeof SSSDropdown> = (args: SSSDropdownProps) => {
  const [value, setValue] = useState(null);

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <StoryWrapper>
      <div style={{ width: "300px" }}>
        <SSSDropdown label="Dropdown label" {...args} name="test" value={value} onChange={onChange} />
      </div>
    </StoryWrapper>
  );
};

export const DropdownDefault = Template.bind({});

DropdownDefault.args = {
  placeholder: "Select team member",
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: true,
};

export const DropdownWithIcons = Template.bind({});
DropdownWithIcons.args = {
  label: "Team member",
  placeholder: "Select team member",
  leftOptionIcon: <UserIcon stroke={Theme.palette.primary900} width="24px" />,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: true,
};

export const DropdownSearch = Template.bind({});
DropdownSearch.args = {
  label: "Team member",
  placeholder: "Select team member",
  isSearchable: true,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: true,
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  label: "Team member",
  placeholder: "Select team member",
  isMulti: true,
  isSearchable: true,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: true,
};

export const MultipleSelectSearch = Template.bind({});
MultipleSelectSearch.args = {
  label: "Team member",
  placeholder: "Select team member",
  isMulti: true,
  isSearchable: true,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: true,
};

export const DropdownWithAvatars = Template.bind({});
DropdownWithAvatars.args = {
  label: "Team member",
  placeholder: "Select team member",
  leftOptionIcon: Avatar,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: false,
  isSearchable: true,
};

export const DropdownWithError = Template.bind({});
DropdownWithError.args = {
  label: "Team member",
  placeholder: "Placeholder...",
  showArrow: true,
  error: "This is error.",
};
