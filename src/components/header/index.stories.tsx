import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HeaderProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSHeader } from "./index";
import { BellIcon, PlanIcon } from "../icons";
import { Theme } from "../../shared/theme";

export default {
  component: SSSHeader,
  title: "Components/Header",
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
    style: {
      control: {
        type: "object",
      },
      defaultValue: {
        width: "600px",
        height: "auto",
      },
    },
  },
} as ComponentMeta<typeof SSSHeader>;

const Template: ComponentStory<typeof SSSHeader> = (args: HeaderProps) => (
  <StoryWrapper>
    <SSSHeader {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  icon: <BellIcon stroke={"white"} width="23" height="25" />,
};
