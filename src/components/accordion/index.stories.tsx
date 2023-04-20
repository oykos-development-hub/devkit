import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AccordionProps } from "./types";
import { Accordion } from "./index";
import { Typography } from "../../index";
import { Theme } from "../../shared/theme";
import { MenuIcon } from "../icon";
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

const accordionData = [
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
];

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => (
  <StoryWrapper style={{ display: "grid", alignContent: "center" }}>
    <Accordion style={{ width: "400px" }} {...args} data={accordionData} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  customIcon: <MenuIcon />,
};
