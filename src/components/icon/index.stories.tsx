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
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  CircleIcon,
  ClockIcon,
  LinkedinIconTwo,
  InstagramIconTwo,
  DownloadIcon,
  MapIcon,
  GithubIconTwo,
  UploadIconTwo,
  StarIcon,
  LoginIcon,
  LogoutIcon,
  FrownIcon,
  DownloadCloudIcon,
  TrashIcon,
  TrashIconTwo,
  UploadCloudIcon,
  SlashDividerIcon,
  CloseIcon,
  WifiIcon,
  WifiOffIcon,
  UserPlusIcon,
  UserMinusIcon,
  UserXIcon,
  UsersIcon,
  SidebarIcon,
  SettingsIcon,
  PlusIcon,
  MinusIcon,
  PowerIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  MenuIcon,
  FilePlusIcon,
  FileIcon,
  CloudIcon,
  PrinterIcon,
  RefreshCCWIcon,
  RefreshCWIcon,
  LoaderIcon,
  RSSIcon,
  SmileIcon,
  HeartIcon,
  EditIcon,
  EyeOffIcon,
  MailIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  EyeIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  HomeIcon,
  AlertTriangleIcon,
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "./";
import { IconProps } from "./types";

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
    <AlignRightIcon {...args} />
    <AlignLeftIcon {...args} />
    <AlignJustifyIcon {...args} />
    <AlignCenterIcon {...args} />
    <AlertTriangleIcon {...args} />
    <ArrowUpIcon {...args} />
    <ArrowDownIcon {...args} />
    <ArrowLeftIcon {...args} />
    <ArrowRightIcon {...args} />
    <MailIcon {...args} />
    <EyeIcon {...args} />
    <EyeOffIcon {...args} />
    <EditIcon {...args} />
    <HeartIcon {...args} />
    <RSSIcon {...args} />
    <LoaderIcon {...args} />
    <RefreshCCWIcon {...args} />
    <RefreshCWIcon {...args} />
    <PrinterIcon {...args} />
    <CloudIcon {...args} />
    <FileIcon {...args} />
    <FilePlusIcon {...args} />
    <MenuIcon {...args} />
    <MoreHorizontalIcon {...args} />
    <MoreVerticalIcon {...args} />
    <PlusIcon {...args} />
    <MinusIcon {...args} />
    <PowerIcon {...args} />
    <SettingsIcon {...args} />
    <UserPlusIcon {...args} />
    <UserMinusIcon {...args} />
    <UserXIcon {...args} />
    <UsersIcon {...args} />
    <SidebarIcon {...args} />
    <WifiIcon {...args} />
    <WifiOffIcon {...args} />
    <MapIcon {...args} />
    <AssignIcon {...args} />
    <XIcon {...args} />
    <CloseIcon {...args} />
    <DangerIcon {...args} />
    <CircleCheckIcon {...args} />
    <CircleIcon {...args} />
    <UploadIconTwo {...args} />
    <UploadCloudIcon {...args} />
    <DownloadIcon {...args} />
    <DownloadCloudIcon {...args} />
    <LoginIcon {...args} />
    <LogoutIcon {...args} />
    <UserIcon {...args} />
    <InstagramIcon {...args} />
    <InstagramIconTwo {...args} />
    <LinkedinIcon {...args} />
    <LinkedinIconTwo {...args} />
    <FacebookIcon {...args} />
    <GithubIcon {...args} />
    <GithubIconTwo {...args} />
    <GoogleIcon {...args} />
    <ChevronUpIcon {...args} />
    <ChevronDownIcon {...args} />
    <ChevronLeftIcon {...args} />
    <ChevronRightIcon {...args} />
    <CalendarIcon {...args} />
    <ClockIcon {...args} />
    <StarIcon {...args} />
    <SmileIcon {...args} />
    <FrownIcon {...args} />
    <TrashIcon {...args} />
    <TrashIconTwo {...args} />
    <SlashDividerIcon {...args} />
    <HomeIcon {...args} />
  </StoryWrapper>
);

export const DefaultIcons = Default.bind({});
DefaultIcons.args = {
  width: "50px",
  height: "50px",
};
