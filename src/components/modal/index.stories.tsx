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
    <>
      <div style={{ padding: "2em 0.5em", width: "300px" }}>
        <Typography content="This is modal content." variant="bodyLarge" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography content="This is footer text." variant="bodyMedium" />
        <div style={{ display: "flex", gap: "0.5em" }}>
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </>
  ),
};

export const ModalVariantDark = Template.bind({});
ModalVariantDark.args = {
  title: "Modal title",
  variant: "dark",
  content: (
    <>
      <div style={{ padding: "2em 0.5em", width: "300px" }}>
        <Typography content="This is modal content." variant="bodyMedium" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography content="This is footer text." variant="bodyMedium" />
        <div style={{ display: "flex", gap: "0.5em" }}>
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </>
  ),
};
