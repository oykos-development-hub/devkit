var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
            defaultValue: function () { return React.createElement("span", null, "Button"); },
        },
        variant: {
            control: {
                type: "select",
                options: __spreadArray([], VariantNames, true),
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
            options: __spreadArray([], VariantNames, true),
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
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Typography, __assign({}, args), args.content))); };
export var Headings = Template.bind({});
Headings.args = {
    variant: TypographyVariants.h1,
    content: "Headline",
    theme: Theme,
};
export var BodyLarge = Template.bind({});
BodyLarge.args = {
    variant: TypographyVariants.bodyLarge,
    fontWeight: WeightVariants.regular,
    content: "Body Large",
    theme: Theme,
};
export var BodyMedium = Template.bind({});
BodyMedium.args = {
    variant: TypographyVariants.bodyMedium,
    fontWeight: WeightVariants.regular,
    content: "Body Medium",
    theme: Theme,
};
export var BodySmall = Template.bind({});
BodySmall.args = {
    variant: TypographyVariants.bodySmall,
    fontWeight: WeightVariants.regular,
    content: "Body Small",
    theme: Theme,
};
export var Caption = Template.bind({});
Caption.args = {
    variant: TypographyVariants.caption,
    fontSize: (_a = Theme === null || Theme === void 0 ? void 0 : Theme.typographyFontSize) === null || _a === void 0 ? void 0 : _a.caption,
    content: "Caption",
    theme: Theme,
};
export var HelperText = Template.bind({});
HelperText.args = {
    variant: TypographyVariants.helperText,
    fontSize: (_b = Theme === null || Theme === void 0 ? void 0 : Theme.typographyFontSize) === null || _b === void 0 ? void 0 : _b.helperText,
    content: "Helper Text",
    theme: Theme,
};
export var Code = Template.bind({});
Code.args = {
    variant: TypographyVariants.code,
    fontSize: (_c = Theme === null || Theme === void 0 ? void 0 : Theme.typographyFontSize) === null || _c === void 0 ? void 0 : _c.code,
    content: "Code",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map