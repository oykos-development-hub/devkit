import { DangerIcon, HelpCircleIcon, MailIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSDropdown } from "../dropdown";
import { SSSTypography } from "../typography";
import { SSSInput } from "./";
import { SSSInputProps } from "./types";

export default {
  title: "Components/Input",
  component: SSSInput,
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof SSSInput>;

const Template: ComponentStory<typeof SSSInput> = (args: SSSInputProps) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(args?.value ?? "");
  }, [args.value]);

  return (
    <StoryWrapper>
      <div style={{ width: "400px" }}>
        <SSSInput label="Input" {...args} name="test" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </StoryWrapper>
  );
};

export const InputDefault = Template.bind({});
InputDefault.args = {
  placeholder: "placeholder...",
};

export const Currency = Template.bind({});
Currency.args = {
  label: <SSSTypography content={"Amount"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: "1.000,00",
  leftContent: <SSSTypography content={<div>&euro;</div>} style={{ color: Theme.palette.gray700 }} />,
  rightContent: <HelpCircleIcon stroke={Theme.palette.gray700} width="14px" />,
  type: "currency",
  value: "123456",
};

export const PhoneNumber = Template.bind({});
const options = [
  { id: "us", title: <SSSTypography content={"US"} variant={"bodySmall"} /> },
  { id: "es", title: <SSSTypography content={"ES"} variant={"bodySmall"} /> },
];

PhoneNumber.args = {
  label: <SSSTypography content={"Phone number"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  leftContent: (
    <SSSDropdown
      options={options}
      style={{ border: "0 !important", padding: 0, boxShadow: "none !important" }}
      placeholder={options[0].title}
      name="phone_number"
    />
  ),
  rightContent: <HelpCircleIcon stroke={Theme.palette.gray400} width={"16px"} />,
};

export const Error = Template.bind({});
Error.args = {
  label: <SSSTypography content={"Email"} variant={"bodySmall"} style={{ fontWeight: 600 }} />,
  placeholder: "Email here...",
  error: "This is error.",
  leftContent: <MailIcon stroke={Theme.palette.gray700} width={"20px"} />,
  rightContent: <DangerIcon stroke={Theme.palette.error500} size="16px" />,
  disabled: false,
};

//

export const WithHint = Template.bind({});
WithHint.args = {
  label: "test",
  disabled: true,
  placeholder: "Email here...",
  hint: "This is hint.",
  leftContent: <MailIcon stroke={Theme.palette.gray700} width={"20px"} />,
  rightContent: <HelpCircleIcon stroke={Theme.palette.gray400} width={"16px"} />,
};
