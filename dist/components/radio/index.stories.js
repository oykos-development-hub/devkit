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
import React, { useState } from "react";
import { Radio } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { RadioSize } from "./types";
import { Theme } from "../../shared/theme";
export default {
    title: "Components/Radio",
    component: Radio,
    argTypes: {
        size: {
            control: {
                type: "radio",
                options: ["sm", "md"],
            },
        },
        checked: {
            control: {
                type: "boolean",
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        style: {
            control: {
                type: "object",
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
    },
};
var Template = function (args) {
    var _a = useState(false), value = _a[0], setValue = _a[1];
    return (React.createElement(StoryWrapper, null,
        React.createElement(Radio, __assign({}, args, { checked: value, onClick: function () {
                if (args.disabled)
                    return;
                setValue(!value);
            } }))));
};
export var Default = Template.bind({});
Default.args = {
    size: RadioSize.sm,
    disabled: false,
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map