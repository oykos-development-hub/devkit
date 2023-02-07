import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { TypographyVariants, VariantNames, WeightVariants } from "./variants";

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
    fontWeight: {
      options: Object.keys(WeightVariants),
      mapping: WeightVariants,
      control: {
        type: "radio",
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

export const Headings = Template.bind({});
Headings.args = {
  variant: TypographyVariants.h1,
  content: "Headline",
  theme: Theme,
};

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  variant: TypographyVariants.bodyLarge,
  fontWeight: WeightVariants.regular,
  content: "Body Large",
  theme: Theme,
};

export const BodyMedium = Template.bind({});
BodyMedium.args = {
  variant: TypographyVariants.bodyMedium,
  fontWeight: WeightVariants.regular,
  content: "Body Medium",
  theme: Theme,
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  variant: TypographyVariants.bodySmall,
  fontWeight: WeightVariants.regular,
  content: "Body Small",
  theme: Theme,
};

export const Caption = Template.bind({});
Caption.args = {
  variant: TypographyVariants.caption,
  fontSize: Theme?.typographyFontSize?.caption,
  content: "Caption",
  theme: Theme,
};

export const HelperText = Template.bind({});
HelperText.args = {
  variant: TypographyVariants.helperText,
  fontSize: Theme?.typographyFontSize?.helperText,
  content: "Helper Text",
  theme: Theme,
};

export const Code = Template.bind({});
Code.args = {
  variant: TypographyVariants.code,
  fontSize: Theme?.typographyFontSize?.code,
  content: "Code",
  theme: Theme,
};
