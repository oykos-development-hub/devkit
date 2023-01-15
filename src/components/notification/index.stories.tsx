import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notification } from "./";
import { NotificationVariants as Variants } from "./types";
import { Theme } from "../../shared/theme";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { initialShadow } from "./elements/shared";

export default {
  title: "Example/Notification",
  component: Notification,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.keys(Variants).map((key: string) => key.toLowerCase()),
      },
    },
    boxShadow: {
      control: {
        type: "text",
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
    iconWidth: {
      control: {
        type: "range",
        min: 5,
        max: 100,
        step: 1,
      },
    },
    iconTop: {
      control: {
        type: "range",
        min: 0,
        max: 50,
        step: 0.01,
      },
    },
    borderRadius: {
      control: {
        type: "range",
        min: 0,
        max: 2.5,
        step: 0.05,
      },
    },
    fontFamily: {
      control: {
        type: "text",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
    onClose: {
      control: {
        type: "boolean",
      },
    },
    additionalText: {
      control: {
        type: "text",
      },
    },
    isSnackBar: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <StoryWrapper>
    <Notification {...args} />
  </StoryWrapper>
);

export const FailureNotification = Template.bind({});
FailureNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "error",
  message: "There was an error!",
  closeIcon: true,
  theme: Theme,
};

export const SuccessNotification = Template.bind({});
SuccessNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "success",
  message: "Profile successfully updated!",
  closeIcon: true,
  theme: Theme,
};

export const InfoNotification = Template.bind({});
InfoNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "info",
  message: "You have successfully added this journey to My Journeys.",
  closeIcon: false,
  theme: Theme,
};

export const InfoNotificationTwoIcons = Template.bind({});
InfoNotificationTwoIcons.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  variant: "info",
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  message: "Traveller info will become visible after adding the journey to your list.",
  closeIcon: true,
  theme: Theme,
};

export const NeutralNotification = Template.bind({});
NeutralNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "neutral",
  message: "Neutral informative message.",
  closeIcon: true,
  theme: Theme,
};

export const ButtonNotification = Template.bind({});
ButtonNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "neutral",
  message: "Neutral informative message.",
  additionalText: "Are you sure you want to proceed? Because if you click this button, absolutely nothing will happen.",
  button: <button type="button">Confirm</button>,
  closeIcon: true,
  theme: Theme,
};
