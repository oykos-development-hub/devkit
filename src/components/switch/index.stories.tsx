import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SwitchProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Switch } from "./index";

export default {
  component: Switch,
  title: "Components/Switch",
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
    rtl: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args: SwitchProps) => {
  const [checked, setIsChecked] = useState<boolean>(false);
  return (
    <StoryWrapper>
      <Switch {...args} onChange={() => setIsChecked((prev) => !prev)} checked={checked} />
    </StoryWrapper>
  );
};

export const NoContent = Template.bind({});
NoContent.args = {
  size: "md",
  disabled: false,
};

export const WithContent = Template.bind({});
WithContent.args = {
  size: "md",
  disabled: false,
  content: "Switch Label",
};
