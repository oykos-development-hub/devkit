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
import { RangeDatePicker } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { DateFormat } from "./types";
export default {
    title: "Example/RangeDatePicker",
    component: RangeDatePicker,
    argTypes: {
        className: {
            control: {
                type: "string",
            },
        },
        dateFormat: {
            options: DateFormat,
            control: {
                type: "select",
            },
        },
        styleCalendar: {
            defaultValue: {
                color: "#000",
                backgroundColor: "#9e9e9e",
                border: "none",
                borderRadius: "0.7rem",
                width: "300px",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                margin: "0em",
                padding: "0em",
                outline: "none",
                fontFamily: "Rubik, sans-serif",
            },
        },
        styleWrapper: {
            defaultValue: {
                width: "fit-content",
                alignItems: "center",
                justifyContent: "center",
                margin: "0em",
                padding: "0em",
                border: "none",
                outline: "none",
            },
        },
    },
};
var today = new Date();
console.log(today.toISOString().split("T")[1]);
var Template = function (args) {
    var _a = useState(today), start = _a[0], setStart = _a[1];
    var _b = useState(today), end = _b[0], setEnd = _b[1];
    var onRangeChange = function (startDate, endDate) {
        setStart(startDate);
        setEnd(endDate);
    };
    return (React.createElement(StoryWrapper, null,
        React.createElement(RangeDatePicker, __assign({}, args, { startDateValue: start, endDateValue: end, label: "Pick a date", onRangeChange: onRangeChange }))));
};
export var RangeDatePickerExample = Template.bind({});
RangeDatePickerExample.args = {};
//# sourceMappingURL=index.stories.js.map