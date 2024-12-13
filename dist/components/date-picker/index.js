import React, { useState, useEffect, useRef, useMemo } from "react";
import { DangerIcon, Datepicker } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
import { Container } from "./styles/container";
import { SSSInput } from "../input";
import { CalendarIcon } from "../icons";
import sr from "date-fns/locale/sr-Latn";
import { registerLocale } from "react-datepicker";
import { SSSTypography } from "../typography";
import { LabelWrapper } from "../input/styles/styledInput";
registerLocale("sr", sr);
export const SSSDatepicker = (props) => {
    var _a, _b, _c, _d, _e;
    const [date, setDate] = useState((_a = props.selected) !== null && _a !== void 0 ? _a : undefined);
    const [prevInputValue, setPrevInputValue] = useState("");
    const isRawInputRef = useRef(false);
    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split("/").map(Number);
        if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year) {
            const date = new Date(year, month - 1, day);
            if (date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year) {
                return date;
            }
        }
        return null;
    };
    function handleCharacterRemoval(value, selectedCursor) {
        if (!value.endsWith('/') && prevInputValue.endsWith('/')) {
            return [value.slice(0, -1), selectedCursor];
        }
        if (prevInputValue[selectedCursor] === '/' && selectedCursor > 0) {
            let start = selectedCursor - 1;
            while (start > 0 && !!isNaN(Number(value[start]))) {
                start--;
            }
            return [prevInputValue.slice(0, start) + prevInputValue.slice(selectedCursor), selectedCursor - 1];
        }
        return [value, selectedCursor];
    }
    function handleCharacterInsertion(value, cursorPosition) {
        const slashCount = (value.match(/\//g) || []).length;
        if (slashCount >= 2) {
            return [value, cursorPosition];
        }
        if ((cursorPosition === 2 || cursorPosition === 5) && value[cursorPosition] !== '/') {
            return [value.slice(0, cursorPosition) + '/' + value.slice(cursorPosition), cursorPosition + 1];
        }
        return [value, cursorPosition];
    }
    const validateMaxDay = (day, cursorPosition) => {
        if (!day)
            return true;
        cursorPosition = cursorPosition - 1;
        if (cursorPosition !== 0 && cursorPosition !== 1) {
            return true;
        }
        if (day.length > 2) {
            return false;
        }
        if (day.length === 1 || cursorPosition === 0) {
            return parseInt(day[0]) >= 0 && parseInt(day[0]) <= 3;
        }
        const firstDigit = parseInt(day[0]);
        const secondDigit = parseInt(day[1]);
        if (firstDigit === 3 && secondDigit > 1) {
            return false;
        }
        return true;
    };
    const validateMaxMonth = (month, cursorPosition) => {
        if (!month)
            return true;
        cursorPosition = cursorPosition - 1;
        if (cursorPosition !== 3 && cursorPosition !== 4) {
            return true;
        }
        if (month.length > 2) {
            return false;
        }
        if (month.length === 1 || cursorPosition === 3) {
            return parseInt(month[0]) >= 0 && parseInt(month[0]) <= 1;
        }
        const firstDigit = parseInt(month[0]);
        const secondDigit = parseInt(month[1]);
        if (firstDigit === 1 && secondDigit > 2) {
            return false;
        }
        return true;
    };
    const validateMaxYear = (year, cursorPosition) => {
        if (!year)
            return true;
        cursorPosition = cursorPosition - 1;
        if (cursorPosition !== 6 && cursorPosition !== 7 && cursorPosition !== 8 && cursorPosition !== 9) {
            return true;
        }
        if (year.length > 4) {
            return false;
        }
        return true;
    };
    const validateMax = (value, cursorPosition) => {
        const [day, month, year] = value.split('/');
        const validDay = validateMaxDay(day, cursorPosition);
        const validMonth = validateMaxMonth(month, cursorPosition);
        const validYear = validateMaxYear(year, cursorPosition);
        return validDay && validMonth && validYear;
    };
    const handleChangeRaw = (e) => {
        let { value, selectionStart } = e.target;
        if (value === undefined) {
            isRawInputRef.current = false;
            return;
        }
        selectionStart = selectionStart || 0;
        isRawInputRef.current = true;
        if (/[^0-9/]/.test(value) || (value.match(/\//g) || []).length > 2) {
            e.target.value = prevInputValue;
            e.target.setSelectionRange(selectionStart - 1, selectionStart - 1);
            return;
        }
        if (value.length > 10) {
            e.target.value = prevInputValue;
            e.target.setSelectionRange(selectionStart - 1, selectionStart - 1);
            return;
        }
        if (value === "") {
            if (date) {
                setDate(undefined);
                props.onChange(null);
                return;
            }
        }
        const isValid = validateMax(value, selectionStart);
        if (!isValid) {
            e.target.value = prevInputValue;
            e.target.setSelectionRange(selectionStart - 1, selectionStart - 1);
            return;
        }
        let newValue;
        let newCursorPosition;
        if (prevInputValue.length > value.length) {
            [newValue, newCursorPosition] = handleCharacterRemoval(value, selectionStart || 0);
        }
        else {
            [newValue, newCursorPosition] = handleCharacterInsertion(value, selectionStart || 0);
        }
        if (value !== newValue) {
            e.target.value = newValue;
        }
        if (selectionStart !== newCursorPosition) {
            e.target.setSelectionRange(newCursorPosition, newCursorPosition);
        }
        setPrevInputValue(newValue);
        if (value.length !== 10) {
            return;
        }
        const formattedDate = parseDate(newValue);
        if (formattedDate instanceof Date) {
            if (formattedDate.getTime() != (date === null || date === void 0 ? void 0 : date.getTime())) {
                setDate(formattedDate);
                props.onChange(formattedDate);
            }
        }
        else if (date) {
            setDate(undefined);
            props.onChange(null);
        }
    };
    const handleChange = (inputDate) => {
        if (!isRawInputRef.current && inputDate instanceof Date && (date === null || date === void 0 ? void 0 : date.getTime()) != inputDate.getTime()) {
            setDate(inputDate);
            props.onChange(inputDate);
        }
    };
    const mergedProps = useMemo(() => (Object.assign(Object.assign({ theme: Theme, disabled: props.isDisabled || false }, props), { placeholderText: "dd/mm/yyyy", locale: "sr" })), [props]);
    useEffect(() => {
        if (props.selected) {
            if (!date || props.selected.getTime() !== date.getTime()) {
                setDate(props.selected);
                props.onChange(props.selected);
            }
        }
        else if (date !== undefined) {
            setDate(undefined);
            props.onChange(null);
        }
    }, [props.selected]);
    return (React.createElement(Container, { theme: mergedProps.theme, disabled: mergedProps.disabled, error: !!mergedProps.error, className: mergedProps.className },
        React.createElement(Datepicker, Object.assign({ customInput: React.createElement(SSSInput, { rightContent: mergedProps.error ? React.createElement(DangerIcon, null) : React.createElement(CalendarIcon, null), error: mergedProps.error, name: mergedProps.name, label: typeof mergedProps.label === "string" ? (React.createElement(LabelWrapper, null,
                    React.createElement(SSSTypography, { content: mergedProps.label, variant: "bodySmall", style: {
                            fontWeight: 600,
                            color: mergedProps.disabled ? (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray300 : (_c = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _c === void 0 ? void 0 : _c.gray900,
                        } }),
                    React.createElement(SSSTypography, { content: "*", variant: "bodyLarge", style: {
                            marginLeft: 5,
                            color: mergedProps.disabled && mergedProps.isRequired
                                ? (_d = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _d === void 0 ? void 0 : _d.gray300
                                : mergedProps.isRequired
                                    ? (_e = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _e === void 0 ? void 0 : _e.error400
                                    : "transparent",
                        } }))) : (mergedProps.label) }) }, mergedProps, { dateFormat: "dd/MM/yyyy", onChange: handleChange, onChangeRaw: handleChangeRaw, selected: date }))));
};
//# sourceMappingURL=index.js.map