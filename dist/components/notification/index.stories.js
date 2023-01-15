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
import { Notification } from "./";
import { NotificationVariants as Variants } from "./types";
import { Theme } from "../../shared/theme";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { initialShadow } from "./elements/shared";
export default {
    title: "Example/Notification",
    component: Notification,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: Object.keys(Variants).map(function (key) { return key.toLowerCase(); }),
            },
        },
        boxShadow: {
            control: {
                type: "text",
            },
        },
        message: {
            control: {
                type: "text",
            },
        },
        iconWidth: {
            control: {
                type: "range",
                min: 5,
                max: 100,
                step: 1,
            },
        },
        iconTop: {
            control: {
                type: "range",
                min: 0,
                max: 50,
                step: 0.01,
            },
        },
        borderRadius: {
            control: {
                type: "range",
                min: 0,
                max: 2.5,
                step: 0.05,
            },
        },
        fontFamily: {
            control: {
                type: "text",
            },
        },
        className: {
            control: {
                type: "text",
            },
        },
        onClose: {
            control: {
                type: "boolean",
            },
        },
        additionalText: {
            control: {
                type: "text",
            },
        },
        isSnackBar: {
            control: {
                type: "boolean",
            },
        },
    },
};
var Template = function (args) { return (React.createElement(StoryWrapper, null,
    React.createElement(Notification, __assign({}, args)))); };
export var FailureNotification = Template.bind({});
FailureNotification.args = {
    color: "",
    backgroundColor: "",
    leftIconColor: "",
    closeIconColor: "",
    iconWidth: 20,
    iconTop: 1,
    isSnackBar: false,
    boxShadow: initialShadow,
    borderRadius: 0.5,
    variant: "error",
    message: "There was an error!",
    closeIcon: true,
    theme: Theme,
};
export var SuccessNotification = Template.bind({});
SuccessNotification.args = {
    color: "",
    backgroundColor: "",
    leftIconColor: "",
    closeIconColor: "",
    iconWidth: 20,
    iconTop: 1,
    isSnackBar: false,
    boxShadow: initialShadow,
    borderRadius: 0.5,
    variant: "success",
    message: "Profile successfully updated!",
    closeIcon: true,
    theme: Theme,
};
export var InfoNotification = Template.bind({});
InfoNotification.args = {
    color: "",
    backgroundColor: "",
    leftIconColor: "",
    closeIconColor: "",
    iconWidth: 20,
    iconTop: 1,
    isSnackBar: false,
    boxShadow: initialShadow,
    borderRadius: 0.5,
    variant: "info",
    message: "You have successfully added this journey to My Journeys.",
    closeIcon: false,
    theme: Theme,
};
export var InfoNotificationTwoIcons = Template.bind({});
InfoNotificationTwoIcons.args = {
    color: "",
    backgroundColor: "",
    leftIconColor: "",
    closeIconColor: "",
    iconWidth: 20,
    iconTop: 1,
    variant: "info",
    isSnackBar: false,
    boxShadow: initialShadow,
    borderRadius: 0.5,
    message: "Traveller info will become visible after adding the journey to your list.",
    closeIcon: true,
    theme: Theme,
};
export var NeutralNotification = Template.bind({});
NeutralNotification.args = {
    color: "",
    backgroundColor: "",
    leftIconColor: "",
    closeIconColor: "",
    iconWidth: 20,
    iconTop: 1,
    isSnackBar: false,
    boxShadow: initialShadow,
    borderRadius: 0.5,
    variant: "neutral",
    message: "Neutral informative message.",
    closeIcon: true,
    theme: Theme,
};
export var ButtonNotification = Template.bind({});
ButtonNotification.args = {
    color: "",
    backgroundColor: "",
    leftIconColor: "",
    closeIconColor: "",
    iconWidth: 20,
    iconTop: 1,
    boxShadow: initialShadow,
    borderRadius: 0.5,
    variant: "neutral",
    message: "Neutral informative message.",
    additionalText: "Are you sure you want to proceed? Because if you click this button, absolutely nothing will happen.",
    button: React.createElement("button", { type: "button" }, "Confirm"),
    closeIcon: true,
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map