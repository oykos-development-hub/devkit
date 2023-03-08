import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { BreadcrumbsProps } from "./types";
import { Breadcrumbs } from "./index";
import { XIcon } from "../icon";
import { Item } from "./types";

const links: Item[] = [
  { name: "link1", to: "" },
  { name: "link2", to: "" },
  { name: "link3", to: "" },
  { name: "link4", to: "" },
  { name: "link5", to: "" },
];

const linksWithIcons = links.map((link) => ({ ...link, icon: <XIcon size="1em" /> }));
console.log(linksWithIcons);

export default {
  component: Breadcrumbs,
  title: "Components/Breadcrumbs",
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args: BreadcrumbsProps) => (
  <StoryWrapper>
    <Breadcrumbs {...args} />
  </StoryWrapper>
);

export const BreadcrumbsDefault = Template.bind({});

BreadcrumbsDefault.args = {
  items: links,
  separator: <span>&gt;</span>,
};

//

export const BreadcrumbsWithIcon = Template.bind({});

BreadcrumbsWithIcon.args = {
  items: linksWithIcons,
  separator: <span>&gt;</span>,
};

//

export const StyledBreadcrumbs = Template.bind({});

StyledBreadcrumbs.args = {
  items: linksWithIcons,
  separator: <span>&gt;</span>,
  style: { backgroundColor: "#C0E0FF" },
};
