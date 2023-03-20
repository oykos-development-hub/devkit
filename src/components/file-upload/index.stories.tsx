import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FileUpload } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { UploadIcon } from "../icon";

export default {
  title: "Components/FileUpload",
  component: FileUpload,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary"],
      },
    },
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof FileUpload>;

const onFileUpload = (acceptedFiles: FileList) => {
  console.log("File(s) uploaded:", acceptedFiles);
  // Handle the uploaded files here.
};

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <StoryWrapper>
    <FileUpload {...args} onUpload={onFileUpload} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  multiple: false,
  note: "Select a file or drag and drop here",
  hint: "JPG, PNG or PDF, file size no more than 10MB",
};

export const Multiple = Template.bind({});
Multiple.args = {
  variant: "secondary",
  buttonVariant: "secondary",
  buttonText: "SELECT FILES",
  multiple: true,
  note: "Select a files or drag and drop here",
  hint: "JPG, PNG or PDF, file size no more than 10MB",
};
