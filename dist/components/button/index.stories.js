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
import { Button } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
export default {
    component: Button,
    title: "Components/Button",
    argTypes: {
        content: {
            defaultValue: function () { return (React.createElement("span", null, "Button")); }
        },
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        onClick: {
            defaultValue: function () { return alert('Button clicked!'); }
        },
        theme: {
            control: {
                type: "object",
            },
        },
        style: {
            defaultValue: {
                width: 'fit-content',
                height: 'fit-content',
                padding: '1em 2em',
                margin: '0em',
                borderRadius: '1em',
                borderWidth: '1px',
                gap: '0.5em'
            }
        }
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Button, __assign({}, args)))); };
export var PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
    content: "Primary Default",
    onClick: function () { return alert('PrimaryDefault clicked!'); }
};
export var PrimaryCustomStyle = Template.bind({});
PrimaryCustomStyle.args = {
    content: "Primary Custom Style",
    style: {
        width: '150px',
        boxShadow: '5px 5px 2px #333',
        backgroundColor: 'green',
        fontWeight: 900
    },
    onClick: function () { return alert('PrimaryCustomStyle clicked!'); }
};
export var PrimaryThemed = Template.bind({});
PrimaryThemed.args = {
    content: "Primary Themed",
    theme: Theme,
    onClick: function () { return alert('PrimaryThemed clicked!'); }
};
export var SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
    content: "Secondary Default",
    variant: "secondary",
    onClick: function () { return alert('SecondaryDefault clicked!'); }
};
export var SecondaryCustomStyle = Template.bind({});
SecondaryCustomStyle.args = {
    content: "Secondary Custom Style",
    variant: "secondary",
    style: {
        width: '150px',
        boxShadow: '5px 5px 2px #333',
        backgroundColor: "white",
        color: "blue",
        fontWeight: 900
    },
    onClick: function () { return alert('SecondaryCustomStyle clicked!'); }
};
export var SecondaryThemed = Template.bind({});
SecondaryThemed.args = {
    content: "Secondary Themed",
    variant: "secondary",
    theme: Theme,
    onClick: function () { return alert('SecondaryThemed clicked!'); }
};
export var TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
    content: "Tertiary Default",
    variant: "tertiary",
    onClick: function () { return alert('TertiaryDefault clicked!'); }
};
export var TertiaryCustomStyle = Template.bind({});
TertiaryCustomStyle.args = {
    content: "Tertiary Custom Style",
    variant: "tertiary",
    style: {
        width: '150px',
        boxShadow: '0px 0px 4px #333',
        backgroundColor: "white",
        color: "#333",
        padding: '4px 8px'
    },
    onClick: function () { return alert('TertiaryCustomStyle clicked!'); }
};
export var TertiaryThemed = Template.bind({});
TertiaryThemed.args = {
    content: "Tertiary Themed",
    variant: "tertiary",
    theme: Theme,
    onClick: function () { return alert('TertiaryThemed clicked!'); }
};
//# sourceMappingURL=index.stories.js.map