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
import { ColorNames } from "../../shared/colors";
import { Directions } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Icon } from "./index";
export var Icons = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Icon, __assign({}, args)))); };
export default {
    title: "Example/Icon",
    component: Icons,
    argTypes: {
        color: {
            control: {
                type: "select",
                options: __spreadArray(["No color"], ColorNames, true),
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
        fill: {
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
//# sourceMappingURL=index.stories.js.map