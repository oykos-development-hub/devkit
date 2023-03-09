import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Tabs } from "./index";
const tabsArr = [
    { title: "Tab 1", content: "Tab 1 content" },
    { title: "Tab 2", content: "Tab 2 content" },
    { title: "Tab 3", content: "Tab 3 content" },
    { title: "Tab 4", content: "Tab 4 content" },
];
export default {
    component: Tabs,
    title: "Components/Tabs",
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Tabs, Object.assign({}, args))));
export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
    tabs: tabsArr,
    renderContent: (content) => React.createElement("div", { style: { padding: "2em 0" } }, content),
};
export const WithDisabledTabs = Template.bind({});
WithDisabledTabs.args = {
    tabs: tabsArr,
    renderContent: (content) => React.createElement("div", { style: { padding: "2em 0" } }, content),
    disabledTabs: ["Tab 1", "Tab 4"],
};
export const StyledTabs = Template.bind({});
StyledTabs.args = {
    tabs: tabsArr,
    renderContent: (content) => React.createElement("div", { style: { padding: "2em 0" } }, content),
    style: {
        borderColor: "dark",
        borderWidth: "2px",
        borderRadius: "0.5em 0.5em 0 0",
    },
};
//# sourceMappingURL=index.stories.js.map