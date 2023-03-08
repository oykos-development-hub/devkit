import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { CheckboxSize } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    checked: {
      control: {
        disable: true,
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
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <StoryWrapper>
      <Checkbox
        {...args}
        checked={value}
        onClick={() => {
          if (args.disabled) return;

          setValue(!value);
        }}
      />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.sm,
  disabled: false,
  theme: Theme,
};
