import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SSSSwitchProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSSwitch } from "./index";
import { SSSTypography } from "../typography";

export default {
  component: SSSSwitch,
  title: "Components/Switch",
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
  },
} as ComponentMeta<typeof SSSSwitch>;

const Template: ComponentStory<typeof SSSSwitch> = (args: SSSSwitchProps) => {
  const [checked, setIsChecked] = useState<boolean>(false);
  return (
    <StoryWrapper>
      <SSSSwitch
        {...args}
        onChange={(name) => {
          setIsChecked((prev) => !prev);
        }}
        checked={checked}
        name="test"
      />
    </StoryWrapper>
  );
};

export const NoContent = Template.bind({});
NoContent.args = {
  size: "md",
  disabled: false,
};

export const WithContent = Template.bind({});
WithContent.args = {
  size: "md",
  disabled: false,
  content: (
    <div style={{ marginLeft: "0.5rem" }}>
      <SSSTypography content={"Remember me"} />
    </div>
  ),
};
