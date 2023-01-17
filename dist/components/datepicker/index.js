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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerWrapper } from "./styles/shared";
export var RangeDatePicker = function (props) {
    var _a = useState(false), calendarOpened = _a[0], setCalendarOpened = _a[1];
    var onDateRangeChange = function (value) {
        var startDate = value[0], endDate = value[1];
        props.onRangeChange(startDate, endDate);
    };
    return (React.createElement("div", null,
        React.createElement(DatePickerWrapper, __assign({}, props),
            React.createElement(DatePicker, __assign({}, props, { startDate: props.startDateValue, endDate: props.endDateValue, onChange: onDateRangeChange, open: calendarOpened, onInputClick: function () { return setCalendarOpened(true); }, selectsRange: true, wrapperClassName: "range-datepicker-wrapper", className: "custom-datepicker", dateFormat: props.dateFormat, placeholderText: props.placeholderText || "Start date - End date", customInput: React.createElement("input", { name: "range-datepicker-custom-input", placeholder: "Start date - End date", onClick: function () { return setCalendarOpened(true); } }) })))));
};
//# sourceMappingURL=index.js.map