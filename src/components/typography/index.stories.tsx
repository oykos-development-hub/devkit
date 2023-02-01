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

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  variant: TypographyVariants.bodyLarge,
  content: "Body Large",
  theme: Theme,
};

export const BodyMedium = Template.bind({});
BodyMedium.args = {
  variant: TypographyVariants.bodyMedium,
  content: "Body Medium",
  theme: Theme,
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  variant: TypographyVariants.bodySmall,
  content: "Body Small",
  theme: Theme,
};

export const BodyLargeSemiBold = Template.bind({});
BodyLargeSemiBold.args = {
  variant: TypographyVariants.bodyLargeSemiBold,
  content: "Body Large, semi bold",
  theme: Theme,
};

export const BodyMediumSemiBold = Template.bind({});
BodyMediumSemiBold.args = {
  variant: TypographyVariants.bodyMediumSemiBold,
  content: "Body Medium, semi bold",
  theme: Theme,
};

export const BodySmallSemiBold = Template.bind({});
BodySmallSemiBold.args = {
  variant: TypographyVariants.bodySmallSemiBold,
  content: "Body Small, semi bold",
  theme: Theme,
};

export const LinkLarge = Template.bind({});
LinkLarge.args = {
  variant: TypographyVariants.linkLarge,
  content: "Link Large",
  theme: Theme,
};

export const LinkMedium = Template.bind({});
LinkMedium.args = {
  variant: TypographyVariants.linkMedium,
  content: "Link Medium",
  theme: Theme,
};

export const LinkSmall = Template.bind({});
LinkSmall.args = {
  variant: TypographyVariants.linkSmall,
  content: "Link Small",
  theme: Theme,
};

export const LinkLargeSemiBold = Template.bind({});
LinkLargeSemiBold.args = {
  variant: TypographyVariants.linkLargeSemiBold,
  content: "Link Large, semi bold",
  theme: Theme,
};

export const LinkMediumSemiBold = Template.bind({});
LinkMediumSemiBold.args = {
  variant: TypographyVariants.linkMediumSemiBold,
  content: "Link Medium, semi bold",
  theme: Theme,
};

export const LinkSmallSemiBold = Template.bind({});
LinkSmallSemiBold.args = {
  variant: TypographyVariants.linkSmallSemiBold,
  content: "Link Small, semi bold",
  theme: Theme,
};

export const Caption = Template.bind({});
Caption.args = {
  variant: TypographyVariants.caption,
  content: "Caption",
  theme: Theme,
};

export const HelperText = Template.bind({});
HelperText.args = {
  variant: TypographyVariants.helperText,
  content: "Helper Text",
  theme: Theme,
};

export const Code = Template.bind({});
Code.args = {
  variant: TypographyVariants.code,
  content: "Code",
  theme: Theme,
};
