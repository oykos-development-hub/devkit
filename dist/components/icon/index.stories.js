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
import React from "react";
import { Directions } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { DefaultIcon, AssignIcon, XIcon, DangerIcon } from "./icons";
export default {
    title: "Example/Icons",
    component: DefaultIcon,
    argTypes: {
        theme: {
            control: {
                type: "object",
                options: Theme,
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
        direction: {
            control: {
                type: "select",
                options: __spreadArray(["No direction"], Object.keys(Directions).map(function (key) { return key; }), true),
            },
        },
        className: {
            control: {
                type: "text",
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(AssignIcon, __assign({}, args)),
    React.createElement(XIcon, __assign({}, args)),
    React.createElement(DangerIcon, __assign({}, args)))); };
export var Icon = Template.bind({});
Icon.args = {
    color: "",
    fill: "",
    width: "50",
    height: "",
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map