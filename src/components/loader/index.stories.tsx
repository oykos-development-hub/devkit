import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loader } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { LoaderProps } from "./types";

export default {
  title: "Example/Loader",
  component: Loader,
  argTypes: {
    variant: {
      control: {
        type: "text",
      },
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
    },
    testId: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: LoaderProps) => (
  <StoryWrapper>
    <Loader {...args} />
  </StoryWrapper>
);

export const VariantOneDefault = Template.bind({});

VariantOneDefault.args = {
  width: '100px',
  height: '100px',
  testId: 'VariantOneDefault',
  primaryColor: '#b2a422',
  secondaryColor: '#7199aa'
};
