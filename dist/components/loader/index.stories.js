import React from "react";
import { Loader } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
export default {
    title: "Components/Loader",
    component: Loader,
    argTypes: {
        variant: {
            control: {
                type: "radio",
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
        primaryColor: {
            control: {
                type: "text",
            },
        },
        secondaryColor: {
            control: {
                type: "text",
            },
        },
        wrapperBackgroundColor: {
            control: {
                type: "text",
            },
        },
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        testId: {
            control: {
                type: "text",
            },
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Loader, Object.assign({}, args))));
export const One = Template.bind({});
One.args = {
    variant: "one",
    width: "48px",
    height: "48px",
    primaryColor: Theme.palette.gray200,
    secondaryColor: Theme.palette.gray300,
    wrapperBackgroundColor: Theme.palette.gray900,
};
export const Two = Template.bind({});
Two.args = {
    variant: "two",
    width: "100px",
    height: "100px",
    primaryColor: Theme.palette.gray200,
    secondaryColor: Theme.palette.gray300,
    wrapperBackgroundColor: Theme.palette.gray900,
};
export const Three = Template.bind({});
Three.args = {
    variant: "three",
    wrapperBackgroundColor: Theme.palette.gray900,
};
export const VariantTwoThemed = Template.bind({});
VariantTwoThemed.args = {
    variant: "two",
    wrapperBackgroundColor: Theme.palette.gray900,
};
//# sourceMappingURL=index.stories.js.map