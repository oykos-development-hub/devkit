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
import { AvatarSizes } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Avatar } from "./index";
export default {
    component: Avatar,
    title: "Components/Avatar",
    argTypes: {
        size: {
            control: {
                type: "radio",
                options: ["xs", "sm", "md", "lg", "xl"],
            },
        },
        supportingText: {
            control: {
                type: "boolean",
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
export var Default = Template.bind({});
Default.args = {
    size: AvatarSizes.md,
    name: "Olivia Rhye",
    email: "olivia@test.com",
    supportingText: true,
    statusIcon: true,
    src: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map