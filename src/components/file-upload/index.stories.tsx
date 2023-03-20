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

const customIcon = (size: string, color: string) => (
  <UploadIcon
    style={{
      width: size,
      height: size,
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
    }}
  />
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  multiple: false,
  icon: customIcon("52px", "#212121"),
};
