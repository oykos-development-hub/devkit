import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SSSLoader } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSLoaderProps } from "./types";
import { Theme } from "../../shared/theme";
import { SSSTypography } from "../typography";

export default {
  title: "Components/Loader",
  component: SSSLoader,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["one", "two"],
    },
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    primaryColor: {
      control: {
        type: "text",
      },
    },
    secondaryColor: {
      control: {
        type: "text",
      },
    },
    wrapperBackgroundColor: {
      control: {
        type: "text",
      },
    },
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof SSSLoader>;

const Template: ComponentStory<typeof SSSLoader> = (args: SSSLoaderProps) => (
  <StoryWrapper>
    <SSSLoader {...args} />
    <SSSTypography content="This is a loader" />
  </StoryWrapper>
);

export const CircleLoader = Template.bind({});
CircleLoader.args = {
  size: "lg",
};
