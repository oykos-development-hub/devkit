import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSTabs } from "./index";
import { SSSTabsProps } from "./types";

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
  component: SSSTabs,
  title: "Components/Tabs",
} as ComponentMeta<typeof SSSTabs>;

const Template: ComponentStory<typeof SSSTabs> = (args: SSSTabsProps) => (
  <StoryWrapper style={{ gap: 0 }}>
    <SSSTabs {...args} />
  </StoryWrapper>
);

export const DefaultTabs = Template.bind({});

DefaultTabs.args = {
  tabs: tabsArr,
  style: {
    borderWidth: "1px",
    borderRadius: "0.5em 0.5em 0 0",
  },
};

//

export const WithDisabledTabs = Template.bind({});

WithDisabledTabs.args = {
  tabs: disabledTabs,
  style: {
    borderWidth: "1px",
    borderRadius: "0.5em 0.5em 0 0",
  },
};
