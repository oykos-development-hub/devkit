import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SSSAlertProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSAlert } from "./";
import { CircleCheckIcon, DangerIcon, InfoIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
import { SSSTypography } from "../typography";

export default {
  component: SSSAlert,
  title: "Components/Alert",
  argTypes: {
    content: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "radio",
        options: ["success", "error", "info"],
      },
    },

    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
    style: {
      control: {
        type: "object",
      },
      defaultValue: {
        width: "600px",
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
    },
  },
} as ComponentMeta<typeof SSSAlert>;

const Template: ComponentStory<typeof SSSAlert> = (args: SSSAlertProps) => {
  const [closed, setClosed] = useState<boolean>(false);
  return <StoryWrapper>{!closed && <SSSAlert {...args} onClose={() => setClosed(true)} />}</StoryWrapper>;
};

export const Success = Template.bind({});
Success.args = {
  content: <SSSTypography content="Success" variant="bodyMedium" />,
  variant: "success",
  size: "md",
  icon: <CircleCheckIcon fill={"none"} stroke={"white"} />,
  closeIcon: true,
};

export const Error = Template.bind({});
Error.args = {
  content: <SSSTypography content="Error message" variant="bodyMedium" />,
  variant: "error",
  size: "md",
  icon: <DangerIcon fill={"none"} stroke={"white"} />,
  closeIcon: true,
};

export const Warning = Template.bind({});
Warning.args = {
  content: <SSSTypography content="Warning message" variant="bodyMedium" />,
  variant: "warning",
  size: "md",
  icon: <DangerIcon fill={"none"} stroke={"white"} />,
  closeIcon: true,
};

export const Info = Template.bind({});
Info.args = {
  content: <SSSTypography content="Info message!" variant="bodyMedium" />,
  variant: "info",
  size: "md",
  icon: <InfoIcon stroke={"white"} />,
  closeIcon: true,
};
