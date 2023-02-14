import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { InputProps } from "./types";
import { Theme } from "../../shared/theme";
import { CircleCheckIcon, XIcon } from "../icon";
import { Dropdown } from "../dropdown";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <StoryWrapper>
    <div style={{ width: "400px" }}>
      <Input {...args} />
    </div>
  </StoryWrapper>
);

export const InputDefault = Template.bind({});

InputDefault.args = {
  placeholder: "placeholder...",
};

//

export const StyledInput = Template.bind({});

StyledInput.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  style: {
    border: "2px solid blue",
    padding: "2em",
  },
};

//

export const WithContent = Template.bind({});

WithContent.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  leftContent: (
    <div style={{ padding: "0 1em", display: "flex", alignItems: "center" }}>
      <CircleCheckIcon style={{ color: "grey" }} size="24px" />
    </div>
  ),
  rightContent: (
    <div style={{ padding: "0 0.75em", display: "flex", alignItems: "center" }}>
      <XIcon style={{ color: "grey" }} size="14px" />
    </div>
  ),
};

//

export const WithError = Template.bind({});

WithError.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  error: "This is error.",
};

//

export const WithHint = Template.bind({});

WithHint.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  hint: "This is hint.",
};

//

export const WithDropdown = Template.bind({});

const options = [
  { value: "us", label: "US" },
  { value: "es", label: "ES" },
];

WithDropdown.args = {
  leftContent: (
    <Dropdown
      options={options}
      style={{ border: "none", width: "76px", boxShadow: "none" }}
      placeholder={options[0].label}
    />
  ),
};