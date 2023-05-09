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
  UploadIcon,
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
  ArchiveIcon,
  ArrowDownCircleIcon,
  ImageIcon,
  ArrowLeftCircleIcon,
  BellIcon,
  BarChartTwo,
  BarChart,
  ArrowRightCircleIcon,
  CheckSquareIcon,
  BellOffIcon,
  CloudOffIcon,
  CopyIcon,
  DatabaseIcon,
  ClipboardIcon,
  FileMinusIcon,
  EditIconTwo,
  EditIconThree,
  ExternalIcon,
  CornerUpIcon,
  FilterIcon,
  FileTextIcon,
  FolderMinusIcon,
  FolderPlusIcon,
  GlobeIcon,
  InfoIcon,
  HelpCircleIcon,
  InboxIcon,
  MenuIconTwo,
  LockIcon,
  FolderIcon,
  LinkIcon,
  MinusCircleIcon,
  MinusSquareIcon,
  PaperclipIcon,
  SearchIcon,
  SendIcon,
  RepeatIcon,
  RotateCCWIcon,
  RotateCWIcon,
  ShareIcon,
  SlidersIcon,
  SaveIcon,
  UnlockIcon,
  UserCheckIcon,
  CloseCircleIcon,
  ZoomInIcon,
  ZoomOutIcon,
  TwoLayersIcon,
  ThreeLayersIcon,
  FiltersLinesIcon,
  FiltersLinesTwo,
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

const Template: ComponentStory<typeof XIcon> = (args: IconProps) => (
  <StoryWrapper>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 5rem)",
        gridGap: "1rem",
      }}
    >
      <LinkIcon {...args} />
      <FolderIcon {...args} />
      <LockIcon {...args} />
      <MenuIconTwo {...args} />
      <InboxIcon {...args} />
      <HelpCircleIcon {...args} />
      <InfoIcon {...args} />
      <GlobeIcon {...args} />
      <FolderPlusIcon {...args} />
      <FolderMinusIcon {...args} />
      <FileTextIcon {...args} />
      <FilterIcon {...args} />
      <CornerUpIcon {...args} />
      <ExternalIcon {...args} />
      <EditIconThree {...args} />
      <EditIconTwo {...args} />
      <ClipboardIcon {...args} />
      <DatabaseIcon {...args} />
      <CopyIcon {...args} />
      <CloudOffIcon {...args} />
      <CheckSquareIcon {...args} />
      <BarChart {...args} />
      <BarChartTwo {...args} />
      <BellIcon {...args} />
      <BellOffIcon {...args} />
      <ImageIcon {...args} />
      <ArrowLeftCircleIcon {...args} />
      <ArrowDownCircleIcon {...args} />
      <ArrowRightCircleIcon {...args} />
      <ArchiveIcon {...args} />
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
      <FileMinusIcon {...args} />
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
      <UploadIcon {...args} />
      <UploadCloudIcon {...args} />
      <FiltersLinesTwo {...args} />
      <FiltersLinesIcon {...args} />
      <ThreeLayersIcon {...args} />
      <TwoLayersIcon {...args} />
      <ZoomInIcon {...args} />
      <ZoomOutIcon {...args} />
      <CloseCircleIcon {...args} />
      <UserCheckIcon {...args} />
      <UnlockIcon {...args} />
      <SaveIcon {...args} />
      <SlidersIcon {...args} />
      <ShareIcon {...args} />
      <RotateCWIcon {...args} />
      <RotateCCWIcon {...args} />
      <RepeatIcon {...args} />
      <SendIcon {...args} />
      <SearchIcon {...args} />
      <PaperclipIcon {...args} />
      <MinusSquareIcon {...args} />
      <MinusCircleIcon {...args} />
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
    </div>
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  width: "30px",
  height: "30px",
};
