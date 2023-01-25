import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import FileUpload from ".";
import { Typography } from "../typography";

export default {
  title: "Components/FileUpload",
  component: FileUpload,
  argTypes: {
    article: {
      control: {
        type: "boolean",
      },
    },
    dropZone: {
      control: {
        type: "boolean",
      },
    },
    multiple: {
      control: {
        type: "boolean",
      },
    },
  },
  maxFileSizeInBytes: {
    control: {
      type: "number",
    },
  },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => {
  const [file, setFile] = useState<{ [key: string]: any }>({});

  const handleUpload = (files: File | File[]) => {
    setFile(files);
  };

  return (
    <StoryWrapper style={{ flexDirection: "column", gap: "1em" }}>
      <FileUpload handleUpload={handleUpload} {...args} />

      {file?.name && file?.size && (
        <div style={{ width: "400px" }}>
          <Typography content="Single file list" variant="h6" />
          <ul>
            <li>
              <div style={{ display: "flex" }}>
                <Typography content={`${file.name} -`} variant="body1" style={{ whiteSpace: "nowrap" }} />

                <Typography content={`${file.size} b`} variant="body1" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </StoryWrapper>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  style: { width: "400px" },
  multiple: false,
};

const TemplateMultiple: ComponentStory<typeof FileUpload> = (args) => {
  const [files, setFiles] = useState<File | File[] | null>(null);

  const handleUpload = (files: File | File[]) => {
    setFiles(files);
  };

  return (
    <StoryWrapper style={{ flexDirection: "column", gap: "1em" }}>
      <FileUpload handleUpload={handleUpload} multiple {...args} />

      {!!files && (
        <div style={{ width: "400px" }}>
          <Typography content="Multiple file list" variant="h6" />
          <ul>
            {Object.values(files).map((file) => (
              <li>
                <div style={{ display: "flex" }}>
                  <Typography content={`${file.name} -`} variant="body1" style={{ whiteSpace: "nowrap" }} />

                  <Typography content={`${file.size} b`} variant="body1" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </StoryWrapper>
  );
};

export const Multiple = TemplateMultiple.bind({});
Multiple.args = {
  style: { width: "400px" },
};

const TemplateList: ComponentStory<typeof FileUpload> = (args) => (
  <StoryWrapper>
    <FileUpload handleUpload={() => {}} showList multiple {...args} />
  </StoryWrapper>
);

export const List = TemplateList.bind({});
List.args = {
  style: { width: "400px" },
};

export const DropZoneThemed: ComponentStory<typeof FileUpload> = (args) => (
  <StoryWrapper>
    <FileUpload handleUpload={() => {}} showList multiple dropZone {...args} />
  </StoryWrapper>
);
DropZoneThemed.args = {
  style: { width: "400px" },
  theme: Theme,
};
