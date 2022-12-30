import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { TypographyProps } from "./types";
import { Theme } from "../../shared/theme";
import { ColorNames } from "../../shared/colors";
import { VariantNames } from "./variants";

export default {
  title: "Example/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [...VariantNames],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["No color", ...ColorNames],
      },
    },
    margin: {
      control: {
        type: "text",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
    children: {
      control: {
        type: "select",
        options: [...VariantNames],
      },
    },
    fontFamily: {
      control: {
        type: "text",
      },
    },
    fontSize: {
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
  color: "asphalt1",
  children: "HeadlineH1",
  margin: "1rem",
  theme: Theme,
};

export const HeadlineH2 = Template.bind({});
HeadlineH2.args = {
  variant: "h2",
  color: "atlantis1",
  children: "HeadlineH2",
  theme: Theme,
};

export const HeadlineH3 = Template.bind({});
HeadlineH3.args = {
  variant: "h3",
  color: "red4",
  children: "HeadlineH3",
  margin: "1.9rem",
  theme: Theme,
};

export const HeadlineH4 = Template.bind({});
HeadlineH4.args = {
  variant: "h4",
  color: "red4",
  children: "HeadlineH4",
  margin: "1.65rem",
  theme: Theme,
};

export const HeadlineH5 = Template.bind({});
HeadlineH5.args = {
  variant: "h5",
  color: "green",
  children: "HeadlineH5",
  margin: "1.25rem",
  theme: Theme,
};

export const HeadlineH6 = Template.bind({});
HeadlineH6.args = {
  variant: "h6",
  color: "purple1",
  children: "HeadlineH6",
  theme: Theme,
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: "subtitle1",
  color: "blue5",
  children: "Subtitle1",
  margin: "1.8rem",
  theme: Theme,
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  variant: "subtitle2",
  color: "atlantis2",
  children: "Subtitle2",
  margin: "0.8rem",
  theme: Theme,
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: "body1",
  color: "asphalt4",
  children: "Body1",
  margin: "0.5rem",
  theme: Theme,
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: "body2",
  color: "#22B287FF",
  children: "Body2",
  margin: "1.5rem",
  theme: Theme,
};

export const Button = Template.bind({});
Button.args = {
  variant: "button",
  color: "red4",
  children: "Button",
  margin: "1.3rem",
  theme: Theme,
};

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption",
  color: "#b2a422",
  children: "Caption",
  margin: "2rem",
  theme: Theme,
};

export const Overline = Template.bind({});
Overline.args = {
  variant: "overline",
  color: "#333",
  children: "Overline",
  margin: "1.7rem",
  theme: Theme,
};
