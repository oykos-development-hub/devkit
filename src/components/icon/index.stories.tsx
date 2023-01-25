import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { AssignIcon, XIcon, DangerIcon, CircleCheckIcon } from "./";
import { IconProps } from "./types";
import EyeIcon from "./variations/EyeIcon";
import TrashIcon from "./variations/TrashIcon";
import ListIcon from "./variations/ListIcon";
import UploadIcon from "./variations/UploadIcon";

export default {
  title: "Components/Icons",
  component: XIcon,
  argTypes: {
    onClick: {
      defaultValue: () => alert("Icon clicked!"),
    },
    theme: {
      control: {
        type: "object",
      },
    },
    style: {
      defaultValue: {
        width: "40px",
        height: "40px",
        padding: "0.2rem",
      },
    },
  },
} as ComponentMeta<typeof XIcon>;

const Default: ComponentStory<typeof XIcon> = (args) => (
  <StoryWrapper>
    <AssignIcon {...args} />
    <XIcon {...args} />
    <DangerIcon {...args} />
    <CircleCheckIcon {...args} />
    <EyeIcon {...args} />
    <TrashIcon {...args} />
    <ListIcon {...args} />
    <UploadIcon {...args} />
  </StoryWrapper>
);

export const DefaultIcons = Default.bind({});
DefaultIcons.args = {};

const Custom: ComponentStory<typeof XIcon> = (args) => (
  <StoryWrapper>
    <AssignIcon {...args} />
    <XIcon {...args} />
    <DangerIcon {...args} />
    <CircleCheckIcon {...args} />
    <EyeIcon {...args} />
    <TrashIcon {...args} />
    <ListIcon {...args} />
    <UploadIcon {...args} />
  </StoryWrapper>
);

export const CustomIcons = Custom.bind({});
CustomIcons.args = {
  size: "100px",
};
