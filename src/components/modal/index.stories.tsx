import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Modal } from "./index";
import { Button } from "../button";

export default {
  component: Modal,
  title: "Components/Modal",
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
    },
    defaultValue: Theme,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalDefault = Template.bind({});
ModalDefault.args = {
  title: "Modal title",
  footerContent: [<button>Hello</button>, <button>World</button>],
  content: <div style={{ padding: "1em" }}>This is modal content.</div>,
};
