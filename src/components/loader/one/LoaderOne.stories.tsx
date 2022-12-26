import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loader } from "./index";
import { StoryWrapper } from "../../../shared/components/story-wrapper";

export default {
  title: "Example/Loader One",
  component: Loader,
  argTypes: {
    className: {
      control: {
        type: "text",
      },
    },
    fullComponent: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <StoryWrapper>
    <Loader {...args} />
  </StoryWrapper>
);

export const LoaderOne = Template.bind({});
