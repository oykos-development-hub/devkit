import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { TypographyProps } from "./types";
// import { Theme } from "../../shared/theme";

export default {
  title: "Example/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "text",
      },
    },
    noMargins: {
      control: {
        type: "boolean",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args: TypographyProps) => (
  <StoryWrapper>
    <Typography {...args}>{args.children}</Typography>
  </StoryWrapper>
);

export const HeadlineH1 = Template.bind({});
HeadlineH1.args = {
  variant: "h1",
  color: "",
  children: "HeadlineH1",
};

export const HeadlineH2 = Template.bind({});
HeadlineH2.args = {
  variant: "h2",
  color: "",
  children: "HeadlineH2",
};

export const HeadlineH3 = Template.bind({});
HeadlineH3.args = {
  variant: "h3",
  color: "",
  children: "HeadlineH3",
};

export const HeadlineH4 = Template.bind({});
HeadlineH4.args = {
  variant: "h4",
  color: "",
  children: "HeadlineH4",
};

export const HeadlineH5 = Template.bind({});
HeadlineH5.args = {
  variant: "h5",
  color: "",
  children: "HeadlineH5",
};

export const HeadlineH6 = Template.bind({});
HeadlineH6.args = {
  variant: "h6",
  color: "",
  children: "HeadlineH6",
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: "subtitle1",
  color: "",
  children: "Subtitle1",
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  variant: "subtitle2",
  color: "",
  children: "Subtitle2",
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: "body1",
  color: "",
  children: "Body1",
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: "body2",
  color: "",
  children: "Body2",
};

export const Button = Template.bind({});
Button.args = {
  variant: "button",
  color: "",
  children: "Button",
};

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption",
  color: "",
  children: "Caption",
};

export const Overline = Template.bind({});
Overline.args = {
  variant: "overline",
  color: "",
  children: "Overline",
};
