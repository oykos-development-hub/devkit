import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Loader } from "./index";
import { StoryWrapper } from "../../../shared/components/story-wrapper";

export default {
    title: "Example/Loader Two",
    component: Loader,
    argTypes: {
        className: {
            control: {
                type: "text",
            },
        },
        fullComponent: {
            control: {
                type: "boolean",
            },
        },
    },
} as ComponentMeta<typeof Loader>;

const SmallDiv = styled.div`
  width: 10%;
`;

const Template: ComponentStory<typeof Loader> = (args) => (
    <StoryWrapper>
        <SmallDiv>
            <Loader { ...args } />
        </SmallDiv>
    </StoryWrapper>
);

export const LoaderTwo = Template.bind({});
