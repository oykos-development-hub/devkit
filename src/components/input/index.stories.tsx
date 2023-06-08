import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { InputProps } from "./types";
import { Theme } from "../../shared/theme";
import { DangerIcon, HelpCircleIcon, MailIcon } from "../icon";
import { Dropdown } from "../dropdown";
import { Typography } from "../typography";
import { Datepicker } from "../datepicker";

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
    <div style={{ width: "300px" }}>
      <Input label="Input label" {...args} />
    </div>
  </StoryWrapper>
);

export const InputDefault = Template.bind({});
InputDefault.args = {
  placeholder: "placeholder...",
};

export const Amounts = Template.bind({});
Amounts.args = {
  label: <Typography content={"Select team member"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: "1,000.00",
  leftContent: <Typography content={<div>&euro;</div>} style={{ color: Theme.palette.gray700 }} />,
  rightContent: <HelpCircleIcon stroke={Theme.palette.gray700} width="14px" />,
};

export const PhoneNumber = Template.bind({});
const options = [
  { value: "us", label: <Typography content={"US"} variant={"bodySmall"} /> },
  { value: "es", label: <Typography content={"ES"} variant={"bodySmall"} /> },
];

PhoneNumber.args = {
  label: <Typography content={"Phone number"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  leftContent: (
    <Dropdown
      options={options}
      style={{ border: "0 !important", padding: 0, boxShadow: "none !important" }}
      placeholder={options[0].label}
    />
  ),
  rightContent: <HelpCircleIcon stroke={Theme.palette.gray400} width={"16px"} />,
};

export const Error = Template.bind({});
Error.args = {
  label: <Typography content={"Email"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: "Email here...",
  error: "This is error.",
  leftContent: <MailIcon stroke={Theme.palette.gray700} width={"20px"} />,
  rightContent: <DangerIcon stroke={Theme.palette.error500} size="16px" />,
};

//

export const WithHint = Template.bind({});
WithHint.args = {
  label: <Typography content={"Email"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: "Email here...",
  hint: "This is hint.",
  leftContent: <MailIcon stroke={Theme.palette.gray700} width={"20px"} />,
  rightContent: <HelpCircleIcon stroke={Theme.palette.gray400} width={"16px"} />,
};

export const Textarea = Template.bind({});
Textarea.args = {
  label: <Typography content={"Email"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: "Text here...",
  textarea: true,
};
