import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AccordionData, AccordionProps } from "./types";
import { Accordion, AccordionItem } from "./index";
import { Button, Typography } from "../../index";
import { Theme } from "../../shared/theme";
import { BellIcon, ChevronDownIcon, InfoIcon, MenuIcon, MoreVerticalIcon } from "../icon";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Input } from "../input";

export default {
  component: Accordion,
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
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = (args: AccordionData) => {
  const [open, setOpen] = React.useState(false);
  return (
    <StoryWrapper style={{ display: "grid", alignContent: "center" }}>
      <div style={{ width: "400px" }}>
        <AccordionItem isOpen={open} toggle={() => setOpen(!open)} {...args} />
      </div>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: <Typography variant="bodySmall" content="Accordion Title" />,
  content: <Typography variant="bodySmall" content="Accordion Content" />,
};

export const CustomHeaderAndContentAccordion = Template.bind({});
CustomHeaderAndContentAccordion.args = {
  customHeader: (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <InfoIcon style={{ marginRight: "0.5rem" }} width="20px" height="20px" />
          <Typography variant="bodySmall" content="Custom Accordion" />
        </div>
        <ChevronDownIcon />
      </div>
    </div>
  ),
  customContent: (
    <div style={{ padding: "4px 16px 16px" }}>
      <Typography
        content="This is an example accordion with custom content. It has some text with an Input and a Button below it."
        variant="bodySmall"
        style={{ marginBottom: "0.25rem" }}
      />
      <Input style={{ marginBottom: "0.25rem" }} />
      <Button content="Button" />
    </div>
  ),
};
