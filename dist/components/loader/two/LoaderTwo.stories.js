var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import styled from "styled-components";
import { Loader } from './index';
import { StoryWrapper } from "../../../shared/components/story-wrapper";
export default {
    title: 'Example/Loader Two',
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
var SmallDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 10%;\n"], ["\n  width: 10%;\n"])));
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(SmallDiv, null,
        React.createElement(Loader, __assign({}, args))))); };
export var LoaderTwo = Template.bind({});
var templateObject_1;
//# sourceMappingURL=LoaderTwo.stories.js.map