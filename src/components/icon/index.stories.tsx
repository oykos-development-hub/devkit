import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { AssignIcon, XIcon, DangerIcon, CircleCheckIcon } from "./";
import { IconProps } from "./types";

export default {
    title: "Components/Icons",
    component: XIcon,
    argTypes: {
        onClick: {
            defaultValue: () => alert("Icon clicked!"),
        },
        theme: {
            control: {
                type: "object",
            },
        },
        style: {
            defaultValue: {
                width: "40px",
                height: "40px",
                padding: "0.2rem",
            },
        },
    },
} as ComponentMeta<typeof XIcon>;

const Default: ComponentStory<typeof XIcon> = (args) => (
    <StoryWrapper>
        <AssignIcon {...args} />
        <XIcon {...args} />
        <DangerIcon {...args} />
        <CircleCheckIcon {...args} />
    </StoryWrapper>
);

export const DefaultIcons = Default.bind({});
DefaultIcons.args = {};

const Custom: ComponentStory<typeof XIcon> = (args) => (
    <StoryWrapper>
        <AssignIcon {...args} />
        <XIcon {...args} />
        <DangerIcon {...args} />
        <CircleCheckIcon {...args} />
    </StoryWrapper>
);

export const CustomIcons = Custom.bind({});
CustomIcons.args = {
    size: "100px",
};
