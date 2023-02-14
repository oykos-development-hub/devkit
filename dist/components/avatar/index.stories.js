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
import { AvatarSizes, AvatarVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Avatar } from "./index";
export default {
    component: Avatar,
    title: "Components/Avatar",
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["square", "circle"],
            },
        },
        size: {
            control: {
                type: "radio",
                options: ["xs", "sm", "md", "lg", "xl"],
            },
        },
        src: {
            control: {
                type: "text",
            },
        },
        name: {
            control: {
                type: "text",
            },
        },
        source: {
            control: {
                type: "text",
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Avatar, __assign({}, args)))); };
export var Square = Template.bind({});
Square.args = {
    variant: AvatarVariants.square,
    name: "Olivia Rhye",
    source: "oykos.me",
    src: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    theme: Theme,
};
export var Circle = Template.bind({});
Circle.args = {
    variant: AvatarVariants.circle,
    size: AvatarSizes.md,
    name: "Olivia Rhye",
    source: "oykos.me",
    src: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map