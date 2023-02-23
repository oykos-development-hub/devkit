import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AvatarProps, AvatarSizes } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Avatar } from "./index";

export default {
  component: Avatar,
  title: "Components/Avatar",
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    supportingText: {
      control: {
        type: "boolean",
      },
    },
    src: {
      control: {
        type: "text",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    source: {
      control: {
        type: "text",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => (
  <StoryWrapper>
    <Avatar {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  size: AvatarSizes.md,
  name: "Olivia Rhye",
  email: "olivia@test.com",
  supportingText: true,
  statusIcon: true,
  src: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  theme: Theme,
};
