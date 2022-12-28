import React from "react";
import { Button } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";

export default {
  component: Button,
  title: "Components/Button",

  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["one"],
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    type: {
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
    theme: {
      control: {
        type: "object",
      },
    },
    icon: {
      control: {
        type: "text",
      },
    },
    iconPosition: {
      control: {
        type: "radio",
        options: ["left", "right"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <StoryWrapper>
    <Button {...args} />
  </StoryWrapper>
);

export const ButtonOneDefault = Template.bind({});

ButtonOneDefault.args = {
  label: "button",
};
