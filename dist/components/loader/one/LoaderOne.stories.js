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
import React from 'react';
import { Loader } from './index';
import { StoryWrapper } from "../../../shared/components/story-wrapper";
export default {
    title: 'Example/Loader One',
    component: Loader,
    argTypes: {
        className: {
            control: {
                type: 'text',
            },
        },
        fullComponent: {
            control: {
                type: 'boolean',
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Loader, __assign({}, args)))); };
export var LoaderOne = Template.bind({});
//# sourceMappingURL=LoaderOne.stories.js.map