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
import { Pin } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
export default {
    title: "Components/PIN input",
    component: Pin,
    argTypes: {
        type: {
            control: {
                type: "radio",
                options: ["password", "numeric"],
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Pin, __assign({}, args)))); };
export var PINPassword = Template.bind({});
PINPassword.args = {
    type: "password",
};
export var PINNumeric = Template.bind({});
PINNumeric.args = {
    type: "numeric",
};
//# sourceMappingURL=index.stories.js.map