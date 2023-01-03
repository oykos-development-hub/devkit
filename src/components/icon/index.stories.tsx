import React from "react";

import { ColorNames } from "../../shared/colors";
import { Directions, IconProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Icon } from "./index";

export const Icons = (args: IconProps) => (
  <StoryWrapper>
    <Icon {...args} />
  </StoryWrapper>
);

export default {
  title: "Example/Icon",
  component: Icons,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["No color", ...ColorNames],
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
    fill: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    direction: {
      control: {
        type: "select",
        options: ["No direction", ...Object.keys(Directions).map((key: string) => key)],
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
};
