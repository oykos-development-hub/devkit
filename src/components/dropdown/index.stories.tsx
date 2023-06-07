import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Dropdown } from "./index";
import { CheckIcon, UserIcon } from "../icon";
import { DropdownProps, ValueType } from "./types";
import { Typography } from "../typography";
import Avatar from "./styles/avatar";

const dropdownOptions = [
  { value: "one", label: <Typography content={"One"} variant={"bodySmall"} /> },
  { value: "two", label: <Typography content={"Two"} variant={"bodySmall"} /> },
  {
    value: "three",
    label: <Typography variant={"bodySmall"} content={"Three"} />,
  },
  { value: "four", label: <Typography content={"Four"} variant={"bodySmall"} /> },
  { value: "five", label: <Typography content={"Five"} variant={"bodySmall"} /> },
];

export default {
  component: Dropdown,
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
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => {
  const [value, setValue] = useState<ValueType | null>(null);

  return (
    <StoryWrapper>
      <div style={{ width: "300px", display: "flex" }}>
        <Dropdown {...args} value={value} onChange={(e) => setValue(e)} />
      </div>
    </StoryWrapper>
  );
};

export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
  label: "Team member",
  placeholder: "Select team member",
  showArrow: true,
};

export const DropdownWithIcons = Template.bind({});
DropdownWithIcons.args = {
  label: <Typography content={"Team member"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: <Typography content={"Select team member"} variant={"bodySmall"} />,
  leftOptionIcon: <UserIcon stroke={Theme.palette.primary900} width="24px" />,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: true,
  closeMenuOnSelect: true,
};

export const DropdownSearch = Template.bind({});
DropdownSearch.args = {
  label: <Typography content={"Team member"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: <Typography content={"Select team member"} variant={"bodySmall"} />,
  isSearchable: true,
  isClearable: true,
  backspaceRemovesValue: true,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: true,
  closeMenuOnSelect: true,
  noOptionsText: <Typography content={"No data"} variant={"h6"} />,
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  label: <Typography content={"Team member"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: <Typography content={"Select team member"} variant={"bodySmall"} />,
  isMulti: true,
  isSearchable: true,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: true,
  closeMenuOnSelect: false,
};

export const MultipleSelectSearch = Template.bind({});
MultipleSelectSearch.args = {
  label: <Typography content={"Team member"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: <Typography content={"Select team member"} variant={"bodySmall"} />,
  isMulti: true,
  isSearchable: true,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: true,
  closeMenuOnSelect: false,
};

export const DropdownWithAvatars = Template.bind({});
DropdownWithAvatars.args = {
  label: <Typography content={"Team member"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: <Typography content={"Select team member"} variant={"helperText"} />,
  leftOptionIcon: Avatar,
  rightOptionIcon: <CheckIcon stroke={Theme.palette.primary500} />,
  showArrow: false,
  isSearchable: true,
  closeMenuOnSelect: false,
};
