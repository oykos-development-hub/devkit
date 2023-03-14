import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SwitchProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Switch } from "./index";
import { Typography } from "../typography";

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
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args: SwitchProps) => (
  <StoryWrapper>
    <Switch {...args} />
  </StoryWrapper>
);

export const NoContent = Template.bind({});
NoContent.args = {
  size: "md",
  disabled: false,
};

export const WithContent = Template.bind({});
WithContent.args = {
  size: "md",
  disabled: false,
  content: <Typography content={"Remember me"} />,
};
