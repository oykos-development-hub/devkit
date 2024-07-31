import React, { useMemo } from "react";
import { TypographyVariants, VariantNames } from "@oykos-development/devkit-react-ts-styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SSSTypographyProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSTypography } from "./index";

export default {
  title: "Components/Typography",
  component: SSSTypography,
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
} as ComponentMeta<typeof SSSTypography>;

const Template: ComponentStory<typeof SSSTypography> = (props: SSSTypographyProps) => {
  const mergedProps = useMemo(
    () => ({
      variant: TypographyVariants.h1,
      theme: Theme,
      ...props,
      content: "Typography",
    }),
    [props],
  );

  return (
    <StoryWrapper>
      <SSSTypography {...mergedProps} />
    </StoryWrapper>
  );
};

export const CustomTypography = Template.bind({});
CustomTypography.args = {
  variant: TypographyVariants.h1,
  content: "Headline",
  theme: Theme,
};
