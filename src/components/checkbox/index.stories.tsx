import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SSSCheckbox } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { CheckboxSize } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
import { SSSCheckboxProps } from "./types";

export default {
  title: "Components/Checkbox",
  component: SSSCheckbox,
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
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof SSSCheckbox>;

const Template: ComponentStory<typeof SSSCheckbox> = (args: SSSCheckboxProps) => {
  const [checked, setIsChecked] = useState<boolean>(false);
  return (
    <StoryWrapper>
      <SSSCheckbox {...args} checked={checked} name="test" onChange={() => setIsChecked((prev) => !prev)} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.sm,
  disabled: false,
};
