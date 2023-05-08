import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { FileUpload } from "./index";
import { FileUploadProps } from "./types";
import { Typography } from "../typography";
import { Button } from "../button";
import UploadCloudIcon from "../icon/variations/UploadCloudIcon";

export default {
  component: FileUpload,
  title: "Components/FileUpload",
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary"],
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

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  multiple: false,
  note: "Select a file or drag and drop here",
  hint: "JPG, PNG or PDF, file size no more than 10MB",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  buttonVariant: "secondary",
  buttonText: "SELECT FILES",
  multiple: true,
  note: "Select a files or drag and drop here",
  hint: "JPG, PNG or PDF, file size no more than 10MB",
  disabled: false,
};

export const SecondaryWithoutIcon = Template.bind({});
SecondaryWithoutIcon.args = {
  variant: "secondary",
  buttonVariant: "secondary",
  buttonText: "SELECT FILES",
  multiple: true,
  note: <Typography variant={"bodySmall"} content={"Select a files or drag and drop here"} />,
  hint: "",
  disabled: false,
  icon: <></>,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  buttonVariant: "primary",
  buttonText: "SELECT FILE",
  multiple: false,
  note: "Title",
  hint: (
    <Typography
      variant={"helperText"}
      style={{ marginTop: "2rem", textDecoration: "underline" }}
      content={"Passport.png"}
    />
  ),
  icon: <></>,
  disabled: false,
};

export const TertiaryWithCustomButton = Template.bind({});
TertiaryWithCustomButton.args = {
  variant: "tertiary",
  multiple: false,
  note: "Title",
  customButton: (
    <Button
      size={"sm"}
      variant={"primary"}
      content={
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <UploadCloudIcon stroke={"white"} width={"20px"} />
          <Typography variant={"bodyMedium"} content={"Ucitaj"} style={{ color: "white" }} />
        </div>
      }
      onClick={() => alert("Success!")}
      theme={Theme}
    />
  ),
  hint: (
    <Typography
      variant={"helperText"}
      style={{ marginTop: "2rem", textDecoration: "underline", fontWeight: 600 }}
      content={"Passport.png"}
    />
  ),
  icon: <></>,
  disabled: false,
};
