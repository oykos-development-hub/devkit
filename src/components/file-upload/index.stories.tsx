import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FileUpload } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";

export default {
  title: "Components/FileUpload",
  component: FileUpload,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["password", "numeric"],
      },
    },
  },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <StoryWrapper>
    <FileUpload {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {};
