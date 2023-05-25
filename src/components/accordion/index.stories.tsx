import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AccordionProps } from "./types";
import { Accordion, AccordionItem } from "./index";
import { Typography } from "../../index";
import { Theme } from "../../shared/theme";
import { ChevronDownIcon, MenuIcon, MoreVerticalIcon } from "../icon";
import { StoryWrapper } from "../../shared/components/story-wrapper";

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
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <StoryWrapper style={{ display: "grid", alignContent: "center" }}>
      <div style={{ width: "400px" }}>
        <AccordionItem isOpen={open} toggle={() => setOpen(!open)} content="test" title="title" />
      </div>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      title: <Typography variant={"bodySmall"} content={"Accordion Title"} />,
      content: (
        <Typography
          variant={"bodySmall"}
          content={
            "Lorem ipsum dolor sit amet. Aut internos autem et dolorem consequuntur a culpa itaque! Lorem ipsum dolor sit amet. Aut internos autem et dolorem consequuntur a culpa itaque!"
          }
          style={{ color: "#616161" }}
        />
      ),
    },
    {
      title: <Typography variant={"bodySmall"} content={"Accordion 1"} />,
      content: <Typography variant={"bodySmall"} content={"Accordion 1 content."} style={{ color: "#616161" }} />,
    },
  ],
};

export const CustomHeaderAndContentAccordion = Template.bind({});
CustomHeaderAndContentAccordion.args = {
  data: [
    {
      customHeader: (
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            Custom Accordion 1 <ChevronDownIcon />
          </div>
        </div>
      ),
      customContent: <div style={{ padding: "4px 16px 16px" }}>test custom content</div>,
    },
  ],
};
