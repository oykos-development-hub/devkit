import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSBreadcrumbsProps } from "./types";
import { SSSBreadcrumbs } from "./index";
import { CloseIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSBreadcrumbsItem } from "./types";

const links: SSSBreadcrumbsItem[] = [
  { name: "link1", to: "" },
  { name: "link2", to: "" },
  { name: "link3", to: "" },
  { name: "link4", to: "" },
  { name: "link5", to: "" },
];

const linksWithIcons = links.map((link) => ({ ...link, icon: <CloseIcon width="0.8em" /> }));
console.log(linksWithIcons);

export default {
  component: SSSBreadcrumbs,
  title: "Components/Breadcrumbs",
} as ComponentMeta<typeof SSSBreadcrumbs>;

const Template: ComponentStory<typeof SSSBreadcrumbs> = (args: SSSBreadcrumbsProps) => (
  <StoryWrapper>
    <SSSBreadcrumbs {...args} />
  </StoryWrapper>
);

export const BreadcrumbsDefault = Template.bind({});
BreadcrumbsDefault.args = {
  items: links,
  separator: <span>&gt;</span>,
};

export const BreadcrumbsWithIcon = Template.bind({});
BreadcrumbsWithIcon.args = {
  items: linksWithIcons,
  separator: <span>&gt;</span>,
};

export const StyledBreadcrumbs = Template.bind({});
StyledBreadcrumbs.args = {
  items: linksWithIcons,
  separator: <span>&gt;</span>,
  style: { backgroundColor: "#C0E0FF" },
};
