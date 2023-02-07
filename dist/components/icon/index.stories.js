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
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { AssignIcon, XIcon, DangerIcon, CircleCheckIcon } from "./";
export default {
    title: "Components/Icons",
    component: XIcon,
    argTypes: {
        onClick: {
            defaultValue: function () { return alert("Icon clicked!"); },
        },
        theme: {
            control: {
                type: "object",
            },
        },
        style: {
            defaultValue: {
                width: "40px",
                height: "40px",
                padding: "0.2rem",
            },
        },
    },
};
var Default = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(AssignIcon, __assign({}, args)),
    React.createElement(XIcon, __assign({}, args)),
    React.createElement(DangerIcon, __assign({}, args)),
    React.createElement(CircleCheckIcon, __assign({}, args)))); };
export var DefaultIcons = Default.bind({});
DefaultIcons.args = {};
var Custom = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(AssignIcon, __assign({}, args)),
    React.createElement(XIcon, __assign({}, args)),
    React.createElement(DangerIcon, __assign({}, args)),
    React.createElement(CircleCheckIcon, __assign({}, args)))); };
export var CustomIcons = Custom.bind({});
CustomIcons.args = {
    size: "100px",
};
//# sourceMappingURL=index.stories.js.map