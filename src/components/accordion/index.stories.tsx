import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SSSAccordionProps } from "./types";
import { SSSAccordion } from "./index";
import { Theme } from "../../shared/theme";
import { ChevronDownIcon, MoreVerticalIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { StoryWrapper } from "../../shared/components/story-wrapper";

export default {
  component: SSSAccordion,
  title: "Components/Accordion",
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
    style: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof SSSAccordion>;

const Template: ComponentStory<typeof SSSAccordion> = (args: SSSAccordionProps) => (
  <StoryWrapper style={{ display: "grid", alignContent: "center" }}>
    <div style={{ width: "400px" }}>
      <SSSAccordion {...args} />
    </div>
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: "Accordion title",
  content: "Accordion content",
};

const moreOptionsIcon = (e: any) => {
  e.stopPropagation();
  console.log("clicked");
};

export const CustomAccordion = Template.bind({});
CustomAccordion.args = {
  customHeader: (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <div style={{ fontSize: "16px" }}>Test custom accordion</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ChevronDownIcon width="15px" height="8px" />
        <MoreVerticalIcon
          width="4px"
          height="16px"
          style={{ paddingRight: "12px", paddingLeft: "20px" }}
          onClick={(e) => moreOptionsIcon(e)}
        />
      </div>
    </div>
  ),
  customContent: <div style={{ padding: "4px 16px 16px 16px", fontSize: "14px" }}>custom accordion content</div>,
};

export const CustomAccordionWithInput = Template.bind({});
CustomAccordionWithInput.args = {
  customHeader: (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <div style={{ fontSize: "16px" }}>Test custom accordion</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ChevronDownIcon width="15px" height="8px" />
        <MoreVerticalIcon
          width="4px"
          height="16px"
          style={{ paddingRight: "12px", paddingLeft: "20px" }}
          onClick={(e) => moreOptionsIcon(e)}
        />
      </div>
    </div>
  ),
  customContent: (
    <div style={{ padding: "4px 16px 16px 16px", fontSize: "14px" }}>
      <input type="text" placeholder="name" />
    </div>
  ),
};
