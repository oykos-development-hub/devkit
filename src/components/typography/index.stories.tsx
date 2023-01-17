import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { TypographyVariants, VariantNames } from "./variants";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    content: {
      defaultValue: () => <span>Button</span>,
    },
    variant: {
      control: {
        type: "select",
        options: [...VariantNames],
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
    style: {
      defaultValue: {
        color: "#333",
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <StoryWrapper>
    <Typography {...args}>{args.content}</Typography>
  </StoryWrapper>
);

export const HeadlineH1 = Template.bind({});
HeadlineH1.args = {
  variant: TypographyVariants.h1,
  content: "HeadlineH1",
  theme: Theme,
};

export const HeadlineH1Custom = Template.bind({});
HeadlineH1Custom.args = {
  variant: TypographyVariants.h1,
  content: "Headline H1 Custom Style",
  style: {
    color: "#51a322",
    margin: "5rem 2rem",
    letterSpacing: "3px",
  },
};

export const HeadlineH2 = Template.bind({});
HeadlineH2.args = {
  variant: TypographyVariants.h2,
  content: "HeadlineH2",
  theme: Theme,
};

export const HeadlineH3 = Template.bind({});
HeadlineH3.args = {
  variant: TypographyVariants.h3,
  content: "HeadlineH3",
  theme: Theme,
};

export const HeadlineH4 = Template.bind({});
HeadlineH4.args = {
  variant: TypographyVariants.h4,
  content: "HeadlineH4",
  theme: Theme,
};

export const HeadlineH5 = Template.bind({});
HeadlineH5.args = {
  variant: TypographyVariants.h5,
  content: "HeadlineH5",
  theme: Theme,
};

export const HeadlineH6 = Template.bind({});
HeadlineH6.args = {
  variant: TypographyVariants.h6,
  content: "HeadlineH6",
  theme: Theme,
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: TypographyVariants.subtitle1,
  content: "Subtitle1",
  theme: Theme,
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  variant: TypographyVariants.subtitle2,
  content: "Subtitle2",
  theme: Theme,
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: TypographyVariants.body1,
  content: "Body1",
  theme: Theme,
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: TypographyVariants.body2,
  content: "Body2",
  theme: Theme,
};

export const Button = Template.bind({});
Button.args = {
  variant: TypographyVariants.button,
  content: "Button",
  theme: Theme,
};

export const Caption = Template.bind({});
Caption.args = {
  variant: TypographyVariants.caption,
  content: "Caption",
  theme: Theme,
};

export const Overline = Template.bind({});
Overline.args = {
  variant: TypographyVariants.overline,
  content: "Overline",
  theme: Theme,
};
