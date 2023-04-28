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
import React from "react";
import { Container } from "./styles/container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../input";
import CalendarIcon from "../icon/variations/CalendarIcon";
import { DangerIcon } from "../icon";
export const Datepicker = (_a) => {
    var { style, theme, error, label, onChange, selectsRange, className } = _a, rest = __rest(_a, ["style", "theme", "error", "label", "onChange", "selectsRange", "className"]);
    return (React.createElement(Container, { style: style, theme: theme, error: error, className: className },
        React.createElement(DatePicker, Object.assign({ onChange: onChange, selectsRange: selectsRange, customInput: rest.customInput ? (rest.customInput) : (React.createElement(Input, { rightContent: error ? React.createElement(DangerIcon, null) : React.createElement(CalendarIcon, null), error: error, label: label })) }, rest))));
};
//# sourceMappingURL=index.js.map