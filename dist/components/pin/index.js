import React, { useEffect, useState, useCallback } from "react";
import { Input } from "../input";
import { StyledMainWrapper } from "./styles";
var pinRefs = {};
var pinPrefix = "pinRef-";
var re = /^(\d*\.)?\d+$/;
export var Pin = function (_a) {
    var handleInput = _a.handleInput, _b = _a.length, length = _b === void 0 ? 4 : _b, _c = _a.type, type = _c === void 0 ? "password" : _c, variant = _a.variant;
    var _d = useState([]), value = _d[0], setValue = _d[1];
    value.forEach(function (e, i) {
        pinRefs["".concat(pinPrefix).concat(i)] = React.createRef();
    });
    var checkKeyPress = useCallback(function (e) {
        var key = e.key, keyCode = e.keyCode;
        if (keyCode === 8 || keyCode === 46) {
            var filledValues = value.filter(function (filledValue) { return !!filledValue; });
            filledValues.pop();
            for (var i = filledValues.length; i < length; i++) {
                filledValues.push("");
            }
            setValue(filledValues);
        }
    }, [value]);
    var handleOnChange = function (val, index) {
        if (re.test(val)) {
            setValue(function (oldValue) { return oldValue.map(function (e, i) { return (i !== index ? e : val); }); });
        }
        if ((val === null || val === void 0 ? void 0 : val.length) === length && re.test(val)) {
            return setValue(val.split(""));
        }
    };
    var handleFocus = function () {
        var _a, _b;
        var filledValues = value.filter(function (filledValue) { return !!filledValue; });
        if (filledValues.length && pinRefs["pinRef-".concat(filledValues.length)]) {
            (_a = pinRefs["pinRef-".concat(filledValues.length)].current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else
            (_b = pinRefs["pinRef-0"].current) === null || _b === void 0 ? void 0 : _b.focus();
    };
    useEffect(function () {
        window.addEventListener("keydown", checkKeyPress);
        return function () {
            window.removeEventListener("keydown", checkKeyPress);
        };
    }, [checkKeyPress]);
    useEffect(function () {
        if (handleInput) {
            handleInput(value.join(""));
        }
        setTimeout(function () {
            handleFocus();
        }, 100);
    }, [value]);
    useEffect(function () {
        var startValue = [];
        if (length) {
            for (var i = 0; i < length; i += 1) {
                startValue.push("");
            }
            setValue(startValue);
        }
    }, []);
    return (React.createElement(StyledMainWrapper, null, value.map(function (e, i) { return (React.createElement(Input, { variant: variant, type: type, id: "".concat(i), key: i, value: e, onChange: function (ev) { return handleOnChange(ev.target.value, i); }, disabled: (!!i && !value[i - 1]) || !!value[i], maxLength: length, inputRef: pinRefs["".concat(pinPrefix).concat(i)], inputMode: "numeric", pattern: "[0-9]*" })); })));
};
//# sourceMappingURL=index.js.map