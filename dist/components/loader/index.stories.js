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
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Loader, __assign({}, args)))); };
export var VariantOneDefault = Template.bind({});
VariantOneDefault.args = {
    width: "100px",
    height: "100px",
    testId: "VariantOneDefault",
    primaryColor: "#b2a422",
    secondaryColor: "#7199aa",
};
export var VariantOneThemed = Template.bind({});
VariantOneThemed.args = {
    testId: "VariantOneThemed",
    theme: Theme,
};
export var VariantTwoDefault = Template.bind({});
VariantTwoDefault.args = {
    variant: "two",
    width: "100px",
    height: "100px",
    testId: "VariantTwoDefault",
    primaryColor: "#b2a422",
    secondaryColor: "#7199aa",
};
export var VariantTwoThemed = Template.bind({});
VariantTwoThemed.args = {
    variant: "two",
    testId: "VariantTwoThemed",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map