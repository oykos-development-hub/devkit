import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FooterProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSFooter } from "./index";
import { Theme } from "../../shared/theme";

export default {
  component: SSSFooter,
  title: "Components/Footer",
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
} as ComponentMeta<typeof SSSFooter>;

const Template: ComponentStory<typeof SSSFooter> = (args: FooterProps) => (
  <StoryWrapper>
    <SSSFooter {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
