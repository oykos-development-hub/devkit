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
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  CircleIcon,
  ClockIcon,
} from "./";
import { IconProps } from "./types";
import LinkedinIconTwo from "./variations/LinkedinIconTwo";
import InstagramIconTwo from "./variations/InstagramIconTwo";
import DownloadIcon from "./variations/DownloadIcon";

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

const Default: ComponentStory<typeof XIcon> = (args: IconProps) => (
  <StoryWrapper>
    <AssignIcon {...args} />
    <XIcon {...args} />
    <DangerIcon {...args} />
    <DangerAlertIcon {...args} />
    <CircleCheckIcon {...args} />
    <CircleIcon {...args} />
    <DownloadIcon {...args} />
    <UserIcon {...args} />
    <InstagramIcon {...args} />
    <InstagramIconTwo {...args} />
    <LinkedinIcon {...args} />
    <LinkedinIconTwo {...args} />
    <FacebookIcon {...args} />
    <GithubIcon {...args} />
    <GoogleIcon {...args} />
    <ChevronUpIcon {...args} />
    <ChevronDownIcon {...args} />
    <ChevronLeftIcon {...args} />
    <ChevronRightIcon {...args} />
    <CalendarIcon {...args} />
    <ClockIcon {...args} />
  </StoryWrapper>
);

export const DefaultIcons = Default.bind({});
DefaultIcons.args = {
  width: "50px",
  height: "50px",
};
