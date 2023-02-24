var _a, _b, _c;
import React from "react";
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { TypographyVariants, VariantNames, WeightVariants } from "./variants";
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
        fontWeight: {
            options: Object.keys(WeightVariants),
            mapping: WeightVariants,
            control: {
                type: "radio",
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
    fontWeight: {
        options: Object.keys(WeightVariants),
        mapping: WeightVariants,
        control: {
            type: "radio",
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
    fontWeight: WeightVariants.regular,
    content: "Body Large",
    theme: Theme,
};
export const BodyMedium = Template.bind({});
BodyMedium.args = {
    variant: TypographyVariants.bodyMedium,
    fontWeight: WeightVariants.regular,
    content: "Body Medium",
    theme: Theme,
};
export const BodySmall = Template.bind({});
BodySmall.args = {
    variant: TypographyVariants.bodySmall,
    fontWeight: WeightVariants.regular,
    content: "Body Small",
    theme: Theme,
};
export const Caption = Template.bind({});
Caption.args = {
    variant: TypographyVariants.caption,
    fontSize: (_a = Theme === null || Theme === void 0 ? void 0 : Theme.typographyFontSize) === null || _a === void 0 ? void 0 : _a.caption,
    content: "Caption",
    theme: Theme,
};
export const HelperText = Template.bind({});
HelperText.args = {
    variant: TypographyVariants.helperText,
    fontSize: (_b = Theme === null || Theme === void 0 ? void 0 : Theme.typographyFontSize) === null || _b === void 0 ? void 0 : _b.helperText,
    content: "Helper Text",
    theme: Theme,
};
export const Code = Template.bind({});
Code.args = {
    variant: TypographyVariants.code,
    fontSize: (_c = Theme === null || Theme === void 0 ? void 0 : Theme.typographyFontSize) === null || _c === void 0 ? void 0 : _c.code,
    content: "Code",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map