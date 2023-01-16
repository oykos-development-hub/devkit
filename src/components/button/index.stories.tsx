import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./index";
import { ButtonProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    content: {
      defaultValue: () => <span>Button</span>,
    },
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      defaultValue: () => alert("Button clicked!"),
    },
    theme: {
      control: {
        type: "object",
      },
    },
    style: {
      defaultValue: {
        width: "fit-content",
        height: "fit-content",
        padding: "1em 2em",
        margin: "0em",
        borderRadius: "1em",
        borderWidth: "1px",
        gap: "0.5em",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <StoryWrapper>
    <Button {...args} />
  </StoryWrapper>
);

// Primary
export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  content: "Primary Default",
  onClick: () => alert("PrimaryDefault clicked!"),
};

export const PrimaryCustomStyle = Template.bind({});
PrimaryCustomStyle.args = {
  content: "Primary Custom Style",
  style: {
    width: "150px",
    boxShadow: "5px 5px 2px #333",
    backgroundColor: "green",
    fontWeight: 900,
  },
  onClick: () => alert("PrimaryCustomStyle clicked!"),
};

export const PrimaryThemed = Template.bind({});
PrimaryThemed.args = {
  content: "Primary Themed",
  theme: Theme,
  onClick: () => alert("PrimaryThemed clicked!"),
};

// Secondary
export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  content: "Secondary Default",
  variant: "secondary",
  onClick: () => alert("SecondaryDefault clicked!"),
};

export const SecondaryCustomStyle = Template.bind({});
SecondaryCustomStyle.args = {
  content: "Secondary Custom Style",
  variant: "secondary",
  style: {
    width: "150px",
    boxShadow: "5px 5px 2px #333",
    backgroundColor: "white",
    color: "blue",
    fontWeight: 900,
  },
  onClick: () => alert("SecondaryCustomStyle clicked!"),
};

export const SecondaryThemed = Template.bind({});
SecondaryThemed.args = {
  content: "Secondary Themed",
  variant: "secondary",
  theme: Theme,
  onClick: () => alert("SecondaryThemed clicked!"),
};

// Tertiary
export const TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
  content: "Tertiary Default",
  variant: "tertiary",
  onClick: () => alert("TertiaryDefault clicked!"),
};

export const TertiaryCustomStyle = Template.bind({});
TertiaryCustomStyle.args = {
  content: "Tertiary Custom Style",
  variant: "tertiary",
  style: {
    width: "150px",
    boxShadow: "0px 0px 4px #333",
    backgroundColor: "white",
    color: "#333",
    padding: "4px 8px",
  },
  onClick: () => alert("TertiaryCustomStyle clicked!"),
};

export const TertiaryThemed = Template.bind({});
TertiaryThemed.args = {
  content: "Tertiary Themed",
  variant: "tertiary",
  theme: Theme,
  onClick: () => alert("TertiaryThemed clicked!"),
};
