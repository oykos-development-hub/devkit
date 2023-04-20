import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Tabs } from "./index";
import { TabsProps } from "./types";

const tabsArr = [
  { id: 1, title: "Tab 1" },
  { id: 2, title: "Tab 2" },
  { id: 3, title: "Tab 3" },
  { id: 4, title: "Tab 4" },
];

const disabledTabs = [
  { id: 1, title: "Tab 1", disabled: true },
  { id: 2, title: "Tab 2" },
  { id: 3, title: "Tab 3", disabled: true },
  { id: 4, title: "Tab 4" },
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
};

//

export const WithDisabledTabs = Template.bind({});

WithDisabledTabs.args = {
  tabs: disabledTabs,
};

//

export const StyledTabs = Template.bind({});

StyledTabs.args = {
  tabs: tabsArr,
  style: {
    borderRadius: "0.5em 0.5em 0 0",
  },
};
