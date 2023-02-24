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
import { Modal } from "./index";
import { Typography } from "../typography";
export default {
    component: Modal,
    title: "Components/Modal",
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
        },
        open: {
            control: {
                type: "boolean",
            },
            defaultValue: true,
        },
        variant: {
            control: {
                type: "select",
                options: ["light", "dark"],
            },
        },
    },
};
var Template = function (args) {
    return React.createElement(Modal, __assign({}, args));
};
export var ModalDefault = Template.bind({});
ModalDefault.args = {
    title: "Modal title",
    content: (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { padding: "2em 0.5em", width: "300px" } },
            React.createElement(Typography, { content: "This is modal content.", variant: "body1" })),
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
            React.createElement(Typography, { content: "This is footer text.", variant: "body2" }),
            React.createElement("div", { style: { display: "flex", gap: "0.5em" } },
                React.createElement("button", null, "Ok"),
                React.createElement("button", null, "Cancel"))))),
};
export var ModalVariantDark = Template.bind({});
ModalVariantDark.args = {
    title: "Modal title",
    variant: "dark",
    content: (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { padding: "2em 0.5em", width: "300px" } },
            React.createElement(Typography, { content: "This is modal content.", variant: "body1" })),
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
            React.createElement(Typography, { content: "This is footer text.", variant: "body2" }),
            React.createElement("div", { style: { display: "flex", gap: "0.5em" } },
                React.createElement("button", null, "Ok"),
                React.createElement("button", null, "Cancel"))))),
};
//# sourceMappingURL=index.stories.js.map