import React, { useEffect, useMemo, useState } from "react";
import { DangerIcon, Datepicker } from "@oykos-development/devkit-react-ts-styled-components";
import { registerLocale } from "react-datepicker";
import { Theme } from "../../shared/theme";
import { Container } from "./styles/container";
import { SSSInput } from "../input";
import { CalendarIcon } from "../icons";
import sr from "date-fns/locale/sr-Latn";
import { SSSTypography } from "../typography";
import { parse, isValid } from "date-fns";
import { LabelWrapper } from "../input/styles/styledInput";
registerLocale("sr", sr);
export const SSSDatepicker = (props) => {
    var _a, _b, _c, _d;
    const [date, setDate] = useState();
    const mergedProps = useMemo(() => (Object.assign(Object.assign({ theme: Theme, disabled: false }, props), { placeholderText: "dd/mm/yyyy", locale: "sr" })), [props]);
    const handleChange = (date) => {
        props.onChange(date);
    };
    const parseDate = (str, format) => {
        const parsed = parse(str, format, new Date());
        if (isValid(parsed)) {
            return parsed;
        }
        return undefined;
    };
    const onChangeRaw = (e) => {
        if (!e.target || !e.target.value) {
            return;
        }
        const rawValue = e.target.value;
        const sanitizedValue = rawValue.replace(/[^\d]/g, "");
        let formattedValue = "";
        if (sanitizedValue.length <= 2) {
            formattedValue = sanitizedValue;
        }
        else if (sanitizedValue.length <= 4) {
            formattedValue = `${sanitizedValue.slice(0, 2)}/${sanitizedValue.slice(2)}`;
        }
        else if (sanitizedValue.length <= 8) {
            formattedValue = `${sanitizedValue.slice(0, 2)}/${sanitizedValue.slice(2, 4)}/${sanitizedValue.slice(4)}`;
        }
        if (formattedValue !== rawValue) {
            e.target.value = formattedValue;
        }
        const trimmedInput = formattedValue.trim();
        if (/^\d{2}\/\d{2}\/\d{4}$/.test(trimmedInput)) {
            const parsedDate = parseDate(trimmedInput, "dd/MM/yyyy");
            if (isValid(parsedDate)) {
                setDate(parsedDate);
            }
        }
    };
    useEffect(() => {
        var _a;
        setDate((_a = props.selected) !== null && _a !== void 0 ? _a : undefined);
    }, [props.selected]);
    return (React.createElement(Container, { theme: mergedProps.theme, disabled: mergedProps.disabled, error: !!mergedProps.error, className: mergedProps.className },
        React.createElement(Datepicker, Object.assign({ customInput: React.createElement(SSSInput, { rightContent: mergedProps.error ? React.createElement(DangerIcon, null) : React.createElement(CalendarIcon, null), error: mergedProps.error, name: mergedProps.name, label: typeof mergedProps.label === "string" ? (React.createElement(LabelWrapper, null,
                    React.createElement(SSSTypography, { content: mergedProps.label, variant: "bodySmall", style: {
                            fontWeight: 600,
                            color: mergedProps.disabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray900,
                        } }),
                    React.createElement(SSSTypography, { content: "*", variant: "bodyLarge", style: {
                            marginLeft: 5,
                            color: mergedProps.disabled && mergedProps.isRequired
                                ? (_c = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _c === void 0 ? void 0 : _c.gray300
                                : mergedProps.isRequired
                                    ? (_d = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _d === void 0 ? void 0 : _d.error400
                                    : "transparent",
                        } }))) : (mergedProps.label) }) }, mergedProps, { dateFormat: "dd/MM/yyyy", onChange: handleChange, onChangeRaw: onChangeRaw, onSelect: (date) => setDate(date), selected: date }))));
};
//# sourceMappingURL=index.js.map