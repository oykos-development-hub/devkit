import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import {
  AssignIcon,
  XIcon,
  DangerIcon,
  CircleCheckIcon,
  UserIcon,
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
  DangerAlertIcon,
  ChevronUpIcon,
} from "./";

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
    <UserIcon {...args} />
    <InstagramIcon {...args} />
    <LinkedinIcon {...args} />
    <FacebookIcon {...args} />
    <GithubIcon {...args} />
    <GoogleIcon {...args} />
    <DangerAlertIcon {...args} />
    <ChevronUpIcon {...args} />
  </StoryWrapper>
);

export const DefaultIcons = Default.bind({});
DefaultIcons.args = {
  width: "100px",
  height: "100px",
};

const Custom: ComponentStory<typeof XIcon> = (args) => (
  <StoryWrapper>
    <AssignIcon {...args} />
    <XIcon {...args} />
    <DangerIcon {...args} />
    <CircleCheckIcon {...args} />
    <UserIcon {...args} />
    <InstagramIcon {...args} />
    <LinkedinIcon {...args} />
    <FacebookIcon {...args} />
    <GithubIcon {...args} />
    <GoogleIcon {...args} />
    <DangerAlertIcon {...args} />
    <ChevronUpIcon {...args} />
  </StoryWrapper>
);

export const CustomIcons = Custom.bind({});
CustomIcons.args = {
  width: "100px",
  height: "100px",
};
