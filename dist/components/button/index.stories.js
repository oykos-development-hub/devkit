import React, { useMemo, useState } from "react";
import { ButtonSizes, ButtonVariants, TypographyVariants } from "@oykos-development/devkit-react-ts-styled-components";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSButton } from "./index";
import { CircleIcon } from "../icons";
import { SSSTypography } from "../typography";
export default {
    component: SSSButton,
    title: "Components/Button",
    argTypes: {
        content: {
            defaultValue: () => React.createElement("span", null, "Button"),
        },
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        style: {},
        size: {
            control: {
                type: "radio",
                options: ["xs", "sm", "md", "lg", "xl"],
            },
        },
    },
};
const Template = (props) => {
    const [clickedCounter, setClickedCounter] = useState(0);
    const clickHandler = useMemo(() => () => setClickedCounter(clickedCounter + 1), [clickedCounter]);
    const typographyVariant = useMemo(() => {
        switch (props.size) {
            case ButtonSizes.xs:
            case ButtonSizes.sm:
                return TypographyVariants.bodySmall;
            case ButtonSizes.md:
            case ButtonSizes.lg:
                return TypographyVariants.bodyMedium;
            default:
                return TypographyVariants.bodyLarge;
        }
    }, [props.size]);
    const mergedProps = useMemo(() => {
        var _a;
        return (Object.assign(Object.assign({ variant: ButtonVariants.primary, size: ButtonSizes.lg, theme: Theme }, props), { onClick: clickHandler, content: (_a = props.content) !== null && _a !== void 0 ? _a : (React.createElement(SSSTypography, { content: `Button is clicked ${clickedCounter} times.`, variant: typographyVariant })) }));
    }, [props, clickedCounter]);
    return (React.createElement(StoryWrapper, null,
        React.createElement(SSSButton, Object.assign({}, mergedProps))));
};
export const CustomButton = Template.bind({});
CustomButton.args = {
    variant: ButtonVariants.primary,
    size: ButtonSizes.lg,
    content: null,
};
export const StyledButton = Template.bind({});
StyledButton.args = {
    variant: ButtonVariants.secondary,
    size: ButtonSizes.xl,
    style: {
        backgroundColor: Theme.palette.gray50,
        color: Theme.palette.primary500,
    },
    content: null,
};
export const IconButton = Template.bind({});
IconButton.args = {
    variant: ButtonVariants.secondary,
    size: ButtonSizes.xs,
    style: { padding: "10px" },
    content: React.createElement(CircleIcon, { width: "16px", height: "16px", fill: "transparent", stroke: "#FFF", style: { display: "flex" } }),
};
export const LoadingButton = Template.bind({});
LoadingButton.args = {
    variant: ButtonVariants.secondary,
    size: ButtonSizes.xs,
    isLoading: true,
    content: React.createElement(SSSTypography, { content: "Loading Button" }),
};
//# sourceMappingURL=index.stories.js.map