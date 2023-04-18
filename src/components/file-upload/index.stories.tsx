import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { FileUpload } from "./index";
import { FileUploadProps } from "./types";

export default {
  component: FileUpload,
  title: "Components/FileUpload",
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary"],
      },
    },
    buttonVariant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
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

const Template: ComponentStory<typeof FileUpload> = (args: FileUploadProps) => (
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
