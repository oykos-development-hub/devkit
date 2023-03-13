import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Tabs } from "./index";
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
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Tabs, Object.assign({}, args))));
export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
    tabs: tabsArr,
};
export const WithDisabledTabs = Template.bind({});
WithDisabledTabs.args = {
    tabs: disabledTabs,
};
export const StyledTabs = Template.bind({});
StyledTabs.args = {
    tabs: tabsArr,
    style: {
        borderColor: "dark",
        borderWidth: "2px",
        borderRadius: "0.5em 0.5em 0 0",
    },
};
//# sourceMappingURL=index.stories.js.map