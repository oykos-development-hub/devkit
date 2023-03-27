import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Dropdown } from "./index";
import { CircleCheckIcon } from "../icon";
import { DropdownProps } from "./types";

const dropdownOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
];

const CheckIcon = (
  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.6663 1L5.49967 10.1667L1.33301 6"
      stroke="#004FFF"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => (
  <StoryWrapper>
    <div style={{ width: "300px" }}>
      <Dropdown {...args} />
    </div>
  </StoryWrapper>
);

export const DropdownDefault = Template.bind({});

DropdownDefault.args = {
  placeholder: "placeholder...",
  rightOptionIcon: CheckIcon,
};

export const DropdownWithIcons = Template.bind({});
DropdownWithIcons.args = {
  label: "Dropdown label*",
  placeholder: "placeholder...",
  controlIcon: <CircleCheckIcon style={{ color: "grey" }} size="24px" />,
  leftOptionIcon: <CircleCheckIcon style={{ color: "grey" }} size="24px" />,
  rightOptionIcon: CheckIcon,
};

//

export const MultipleSelect = Template.bind({});

MultipleSelect.args = {
  label: "Dropdown label*",
  placeholder: "placeholder...",
  isMulti: true,
  rightOptionIcon: CheckIcon,
};

export const MultipleSelectWithIcons = Template.bind({});
MultipleSelectWithIcons.args = {
  label: "Dropdown label*",
  placeholder: "placeholder...",
  isMulti: true,
  controlIcon: <CircleCheckIcon style={{ color: "grey" }} size="24px" />,
  leftOptionIcon: <CircleCheckIcon style={{ color: "grey" }} size="24px" />,
  rightOptionIcon: CheckIcon,
};

export const StyledDropdown = Template.bind({});
StyledDropdown.args = {
  label: "Dropdown label*",
  placeholder: "placeholder...",
  style: {
    border: "1px solid red",
    borderRadius: "16px",
  },
  rightOptionIcon: CheckIcon,
};
