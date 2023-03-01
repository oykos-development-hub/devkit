import React from "react";
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { TypographyVariants, VariantNames } from "./variants";
export default {
    title: "Components/Typography",
    component: Typography,
    argTypes: {
        content: {
            defaultValue: () => React.createElement("span", null, "Button"),
        },
        variant: {
            control: {
                type: "select",
                options: [...VariantNames],
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
        style: {
            defaultValue: {
                color: "#333",
            },
        },
    },
    variant: {
        control: {
            type: "select",
            options: [...VariantNames],
        },
    },
    theme: {
        control: {
            type: "object",
        },
    },
    style: {
        defaultValue: {
            color: "#333",
        },
    },
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Typography, Object.assign({}, args), args.content)));
export const Headings = Template.bind({});
Headings.args = {
    variant: TypographyVariants.h1,
    content: "Headline",
    theme: Theme,
};
export const BodyLarge = Template.bind({});
BodyLarge.args = {
    variant: TypographyVariants.bodyLarge,
    content: "Body Large",
    theme: Theme,
};
export const BodyMedium = Template.bind({});
BodyMedium.args = {
    variant: TypographyVariants.bodyMedium,
    content: "Body Medium",
    theme: Theme,
};
export const BodySmall = Template.bind({});
BodySmall.args = {
    variant: TypographyVariants.bodySmall,
    content: "Body Small",
    theme: Theme,
};
export const LinkLarge = Template.bind({});
LinkLarge.args = {
    variant: TypographyVariants.linkLarge,
    content: "Link Large",
    theme: Theme,
};
export const LinkMedium = Template.bind({});
LinkMedium.args = {
    variant: TypographyVariants.linkMedium,
    content: "Link Medium",
    theme: Theme,
};
export const LinkSmall = Template.bind({});
LinkSmall.args = {
    variant: TypographyVariants.linkSmall,
    content: "Link Small",
    theme: Theme,
};
export const Caption = Template.bind({});
Caption.args = {
    variant: TypographyVariants.caption,
    content: "Caption",
    theme: Theme,
};
export const HelperText = Template.bind({});
HelperText.args = {
    variant: TypographyVariants.helperText,
    content: "Helper Text",
    theme: Theme,
};
export const Code = Template.bind({});
Code.args = {
    variant: TypographyVariants.code,
    content: "Code",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map