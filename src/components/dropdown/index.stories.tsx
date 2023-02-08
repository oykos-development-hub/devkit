import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Dropdown } from "./index";
import { CircleCheckIcon } from "../icon";

const dropdownOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
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

const Template: ComponentStory<typeof Dropdown> = (args: any) => (
  <StoryWrapper>
    <div style={{ width: "400px" }}>
      <Dropdown {...args} />
    </div>
  </StoryWrapper>
);

export const DropdownDefault = Template.bind({});

DropdownDefault.args = {
  label: "Dropdown label*",
};

//

export const DropdownWithIcons = Template.bind({});

DropdownWithIcons.args = {
  controlIcon: <CircleCheckIcon size="16px" />,
  optionIcon: <CircleCheckIcon size="16px" />,
};

//

export const MultipleSelect = Template.bind({});

MultipleSelect.args = {
  isMulti: true,
};

//

export const MultipleSelectWithIcons = Template.bind({});

MultipleSelectWithIcons.args = {
  isMulti: true,
  controlIcon: <CircleCheckIcon size="16px" />,
  optionIcon: <CircleCheckIcon size="16px" />,
};

//

export const StyledDropdown = Template.bind({});

StyledDropdown.args = {
  style: {
    border: "2px solid blue",
    borderRadius: "16px",
  },
};
