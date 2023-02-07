import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import Dropdown from "./index";
import { CircleCheckIcon } from "../icon";

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
  controlLeftIcon: <CircleCheckIcon size="16px" />,
  isMulti: true,
  optionLeftIcon: <CircleCheckIcon size="16px" />,
  options: [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
    { value: "four", label: "Four" },
  ],
  showArrow: true,
};
