import React, { useMemo } from "react";
import { TypographyVariants, VariantNames } from "@oykos-development/devkit-react-ts-styled-components";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSTypography } from "./index";
export default {
    title: "Components/Typography",
    component: SSSTypography,
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
const Template = (props) => {
    const mergedProps = useMemo(() => (Object.assign(Object.assign({ variant: TypographyVariants.h1, theme: Theme }, props), { content: "Typography" })), [props]);
    return (React.createElement(StoryWrapper, null,
        React.createElement(SSSTypography, Object.assign({}, mergedProps))));
};
export const CustomTypography = Template.bind({});
CustomTypography.args = {
    variant: TypographyVariants.h1,
    content: "Headline",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map