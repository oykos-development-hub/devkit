import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FileUpload } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { UploadIcon } from "../icon";
import { Button, ButtonVariants, Typography } from "../../index";

export default {
  title: "Components/FileUpload",
  component: FileUpload,
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof FileUpload>;

const onFileUpload = (acceptedFiles: File[]) => {
  console.log("Files uploaded:", acceptedFiles);
  // Handle the uploaded files here.
};

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <StoryWrapper>
    <FileUpload {...args} onFileUpload={onFileUpload} />
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
  multiple: false,
  icon: customIcon("52px", "#212121"),
  content: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        gap: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          gap: "12px",
        }}
      >
        <Typography variant={"bodySmall"} content={"Select a file or drag and drop here"} />
        <Typography variant={"helperText"} content={"JPG, PNG or PDF, file size no more than 10MB"} />
      </div>

      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: 0 }}>
        <Button variant={ButtonVariants.primary} content={"SELECT FILE"} />
      </div>
    </div>
  ),
};
