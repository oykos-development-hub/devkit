import React from "react";
import { SSSLoader } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSTypography } from "../typography";
export default {
    title: "Components/Loader",
    component: SSSLoader,
    argTypes: {
        variant: {
            control: {
                type: "radio",
            },
            options: ["one", "two"],
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
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(SSSLoader, Object.assign({}, args)),
    React.createElement(SSSTypography, { content: "This is a loader" })));
export const CircleLoader = Template.bind({});
CircleLoader.args = {
    size: "lg",
};
//# sourceMappingURL=index.stories.js.map