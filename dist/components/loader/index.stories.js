import React from "react";
import { Loader } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
export default {
    title: "Components/Loader",
    component: Loader,
    argTypes: {
        variant: {
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
export const VariantOneDefault = Template.bind({});
VariantOneDefault.args = {
    width: "100px",
    height: "100px",
    testId: "VariantOneDefault",
    primaryColor: "#b2a422",
    secondaryColor: "#7199aa",
};
export const VariantOneThemed = Template.bind({});
VariantOneThemed.args = {
    testId: "VariantOneThemed",
    theme: Theme,
};
export const VariantTwoDefault = Template.bind({});
VariantTwoDefault.args = {
    variant: "two",
    width: "100px",
    height: "100px",
    testId: "VariantTwoDefault",
    primaryColor: "#b2a422",
    secondaryColor: "#7199aa",
};
export const VariantTwoThemed = Template.bind({});
VariantTwoThemed.args = {
    variant: "two",
    testId: "VariantTwoThemed",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map