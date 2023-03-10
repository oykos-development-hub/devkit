import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Tabs } from "./index";
import { TabsProps } from "./types";

const tabsArr = [
  { title: "Tab 1", content: "Tab 1 content" },
  { title: "Tab 2", content: "Tab 2 content" },
  { title: "Tab 3", content: "Tab 3 content" },
  { title: "Tab 4", content: "Tab 4 content" },
];

const disabledTabs = [
  { title: "Tab 1", content: "Tab 1 content", disabled: true },
  { title: "Tab 2", content: "Tab 2 content" },
  { title: "Tab 3", content: "Tab 3 content", disabled: true },
  { title: "Tab 4", content: "Tab 4 content" },
];

export default {
  component: Tabs,
  title: "Components/Tabs",
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => (
  <StoryWrapper>
    <Tabs {...args} />
  </StoryWrapper>
);

export const DefaultTabs = Template.bind({});

DefaultTabs.args = {
  tabs: tabsArr,
  renderContent: (content) => <div style={{ padding: "2em 0" }}>{content}</div>,
};

//

export const WithDisabledTabs = Template.bind({});

WithDisabledTabs.args = {
  tabs: disabledTabs,
  renderContent: (content) => <div style={{ padding: "2em 0" }}>{content}</div>,
};

//

export const StyledTabs = Template.bind({});

StyledTabs.args = {
  tabs: tabsArr,
  renderContent: (content) => <div style={{ padding: "2em 0" }}>{content}</div>,
  style: {
    borderColor: "dark",
    borderWidth: "2px",
    borderRadius: "0.5em 0.5em 0 0",
  },
};
