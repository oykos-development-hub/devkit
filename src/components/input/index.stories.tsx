import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { InputProps } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["standard", "outlined"],
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    fontSize: {
      control: {
        type: "text",
      },
    },
    type: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    margin: {
      control: {
        type: "text",
      },
    },
    borderColor: {
      control: {
        type: "text",
      },
    },
    borderRadius: {
      control: {
        type: "text",
      },
    },
    error: {
      control: {
        type: "text",
      },
    },
    errorColor: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    textarea: {
      control: {
        type: "boolean",
      },
    },
    iconLeft: {
      control: {
        type: "boolean",
      },
    },
    iconRight: {
      control: {
        type: "boolean",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <StoryWrapper>
    <Input {...args} />
  </StoryWrapper>
);

// standard
export const StandardInputDefault = Template.bind({});

StandardInputDefault.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  variant: "standard",
};

export const StandardInputThemed = Template.bind({});

StandardInputThemed.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  variant: "standard",
  theme: Theme,
};

// outlined
export const OutlinedInputDefault = Template.bind({});

OutlinedInputDefault.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  variant: "outlined",
};

export const OutlinedInputThemed = Template.bind({});

OutlinedInputThemed.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  variant: "outlined",
  theme: Theme,
};
