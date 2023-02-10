import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Modal } from "./index";
import { ModalProps } from "./types";
import { Typography } from "../typography";

export default {
  component: Modal,
  title: "Components/Modal",
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
    },
    open: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    variant: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => {
  return <Modal {...args} />;
};

export const ModalDefault = Template.bind({});
ModalDefault.args = {
  title: "Modal title",
  content: (
    <div>
      <div style={{ padding: "2em 0.5em", width: "300px" }}>
        <Typography content="This is modal content." variant="body1" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography content="This is footer text." variant="body2" />
        <div style={{ display: "flex", gap: "0.5em" }}>
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  ),
};
