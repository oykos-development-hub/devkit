var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
import { Container } from "./styles/container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../input";
export const Datepicker = (_a) => {
    var { style, theme, calendarIcon, onChange } = _a, rest = __rest(_a, ["style", "theme", "calendarIcon", "onChange"]);
    const [date, setDate] = useState(new Date());
    const handleDateChange = (date) => {
        setDate(date);
        onChange && onChange(date);
    };
    return (React.createElement(Container, { style: style, theme: theme },
        React.createElement(DatePicker, Object.assign({ className: "myDatePicker", selected: date, onChange: handleDateChange, dateFormat: rest.dateFormat, customInput: rest.customInput ? rest.customInput : React.createElement(Input, { rightContent: calendarIcon }) }, rest))));
};
//# sourceMappingURL=index.js.map