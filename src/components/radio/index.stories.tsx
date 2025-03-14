import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Radio } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { RadioSize } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
    checked: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    style: {
      control: {
        type: "object",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const [checked, setIsChecked] = useState<boolean>(false);

  return (
    <StoryWrapper>
      <Radio {...args} onClick={() => setIsChecked(!checked)} checked={checked} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: RadioSize.sm,
  disabled: false,
  theme: Theme,
};
