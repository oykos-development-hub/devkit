import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Breadcrumbs } from "./index";
import { XIcon } from "../icon";
const links = [
    { name: "link1", to: "" },
    { name: "link2", to: "" },
    { name: "link3", to: "" },
    { name: "link4", to: "" },
    { name: "link5", to: "" },
];
const linksWithIcons = links.map((link) => (Object.assign(Object.assign({}, link), { icon: React.createElement(XIcon, { size: "1em" }) })));
console.log(linksWithIcons);
export default {
    component: Breadcrumbs,
    title: "Components/Breadcrumbs",
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Breadcrumbs, Object.assign({}, args))));
export const BreadcrumbsDefault = Template.bind({});
BreadcrumbsDefault.args = {
    items: links,
    separator: React.createElement("span", null, ">"),
};
export const BreadcrumbsWithIcon = Template.bind({});
BreadcrumbsWithIcon.args = {
    items: linksWithIcons,
    separator: React.createElement("span", null, ">"),
};
export const StyledBreadcrumbs = Template.bind({});
StyledBreadcrumbs.args = {
    items: linksWithIcons,
    separator: React.createElement("span", null, ">"),
    style: { backgroundColor: "#C0E0FF" },
};
//# sourceMappingURL=index.stories.js.map