import React, { useEffect, useState, useCallback } from "react";
import { Input } from "../input";
import { Container } from "./styles/container";
const pinRefs = {};
const pinPrefix = "pinRef-";
const re = /^(\d*\.)?\d+$/;
export const Pin = ({ handleInput, length = 4, type = "password" }) => {
    const [value, setValue] = useState([]);
    value.forEach((e, i) => {
        pinRefs[`${pinPrefix}${i}`] = React.createRef();
    });
    const checkKeyPress = useCallback((e) => {
        const { key, keyCode } = e;
        if (keyCode === 8 || keyCode === 46) {
            const filledValues = value.filter((filledValue) => !!filledValue);
            filledValues.pop();
            for (let i = filledValues.length; i < length; i++) {
                filledValues.push("");
            }
            setValue(filledValues);
        }
    }, [value]);
    const handleOnChange = (val, index) => {
        if (re.test(val)) {
            setValue((oldValue) => oldValue.map((e, i) => (i !== index ? e : val)));
        }
        if ((val === null || val === void 0 ? void 0 : val.length) > 1)
            val = val[val.length - 1];
        if ((val === null || val === void 0 ? void 0 : val.length) === length && re.test(val)) {
            return setValue(val.split(""));
        }
    };
    const handleFocus = () => {
        var _a, _b;
        const filledValues = value.filter((filledValue) => !!filledValue);
        if (filledValues.length && pinRefs[`pinRef-${filledValues.length}`]) {
            (_a = pinRefs[`pinRef-${filledValues.length}`].current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else
            (_b = pinRefs["pinRef-0"].current) === null || _b === void 0 ? void 0 : _b.focus();
    };
    useEffect(() => {
        window.addEventListener("keydown", checkKeyPress);
        return () => {
            window.removeEventListener("keydown", checkKeyPress);
        };
    }, [checkKeyPress]);
    useEffect(() => {
        if (handleInput) {
            handleInput(value.join(""));
        }
        setTimeout(() => {
            handleFocus();
        }, 100);
    }, [value]);
    useEffect(() => {
        const startValue = [];
        if (length) {
            for (let i = 0; i < length; i += 1) {
                startValue.push("");
            }
            setValue(startValue);
        }
    }, []);
    return (React.createElement(Container, null, value.map((e, i) => (React.createElement(Input, { type: type, id: `${i}`, key: i, value: e, onChange: (ev) => handleOnChange(ev.target.value, i), disabled: (!!i && !value[i - 1]) || !!value[i + 1], maxLength: length, inputRef: pinRefs[`${pinPrefix}${i}`], inputMode: "numeric", pattern: "[0-9]*" })))));
};
//# sourceMappingURL=index.js.map