var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { BodyMedium } from "../../typography/styles/variants";
import { Variants } from "../types";
export var Container = styled.div(function (_a) {
    var theme = _a.theme, variant = _a.variant, displayPages = _a.displayPages, renderPaginationText = _a.renderPaginationText, fullWidth = _a.fullWidth;
    var _b = theme.palette, primary50 = _b.primary50, primary500 = _b.primary500, gray50 = _b.gray50, gray500 = _b.gray500, gray800 = _b.gray800, gray900 = _b.gray900, gray700 = _b.gray700, gray300 = _b.gray300;
    var activeBackground = {
        filled: primary50,
        outlined: gray50,
        underlined: "transparent",
    };
    var color = {
        filled: gray500,
        outlined: gray700,
        underlined: gray700,
    };
    var activeColor = {
        filled: primary500,
        outlined: gray800,
        underlined: gray700,
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    & * {\n      font-family: \"Inter\";\n    }\n\n    position: relative;\n    color: ", ";\n    width: 100%;\n\n    & ul {\n      list-style: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: ", ";\n      width: 100%;\n      padding: 0;\n      color: ", ";\n      border-top: 1px solid ", ";\n      padding: 1em 0;\n      margin: 0;\n      padding: 1em 0;\n\n      & li,\n      & li.active {\n        cursor: pointer;\n        border-radius: ", ";\n        border: ", ";\n      }\n\n      & li:first-child,\n      & li:last-child {\n        color: ", ";\n        border: ", ";\n        display: block;\n\n        & path {\n          stroke: ", ";\n          fill: ", ";\n        }\n      }\n\n      & li {\n        display: ", ";\n      }\n\n      & li:first-child {\n        margin-right: ", ";\n        margin-left: 1.5em;\n        border-radius: ", ";\n      }\n\n      & li:last-child {\n        margin-right: 1.5em;\n        margin-left: ", ";\n        border-radius: ", ";\n      }\n\n      & li.active {\n        background-color: ", ";\n        color: ", ";\n\n        a {\n          text-decoration: ", ";\n        }\n\n        & path {\n          fill: ", ";\n          stroke: ", ";\n        }\n      }\n\n      & a {\n        padding: 0.5em;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-width: 1em;\n        height: 1em;\n      }\n    }\n\n    & ", " {\n      position: absolute;\n      white-space: nowrap;\n      bottom: 1.25em;\n      left: 50%;\n      transform: translateX(-50%);\n      margin: 0;\n      color: ", ";\n    }\n  "], ["\n    & * {\n      font-family: \"Inter\";\n    }\n\n    position: relative;\n    color: ", ";\n    width: 100%;\n\n    & ul {\n      list-style: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: ", ";\n      width: 100%;\n      padding: 0;\n      color: ", ";\n      border-top: 1px solid ", ";\n      padding: 1em 0;\n      margin: 0;\n      padding: 1em 0;\n\n      & li,\n      & li.active {\n        cursor: pointer;\n        border-radius: ", ";\n        border: ", ";\n      }\n\n      & li:first-child,\n      & li:last-child {\n        color: ", ";\n        border: ", ";\n        display: block;\n\n        & path {\n          stroke: ", ";\n          fill: ", ";\n        }\n      }\n\n      & li {\n        display: ", ";\n      }\n\n      & li:first-child {\n        margin-right: ", ";\n        margin-left: 1.5em;\n        border-radius: ", ";\n      }\n\n      & li:last-child {\n        margin-right: 1.5em;\n        margin-left: ", ";\n        border-radius: ", ";\n      }\n\n      & li.active {\n        background-color: ", ";\n        color: ", ";\n\n        a {\n          text-decoration: ", ";\n        }\n\n        & path {\n          fill: ", ";\n          stroke: ", ";\n        }\n      }\n\n      & a {\n        padding: 0.5em;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-width: 1em;\n        height: 1em;\n      }\n    }\n\n    & ", " {\n      position: absolute;\n      white-space: nowrap;\n      bottom: 1.25em;\n      left: 50%;\n      transform: translateX(-50%);\n      margin: 0;\n      color: ", ";\n    }\n  "])), gray900, variant === Variants["outlined"] ? 0 : "0.5em", color[variant], gray300, variant === Variants["outlined"] ? 0 : "0.5em", variant === Variants["outlined"] ? "1px solid ".concat(gray300) : "none", gray700, variant === Variants["underlined"] ? "none" : "1px solid ".concat(gray300), gray700, gray700, !displayPages || renderPaginationText ? "none" : "block", fullWidth ? "auto" : "none", variant === Variants["outlined"] ? "0.5em 0 0 0.5em" : "none", fullWidth ? "auto" : "none", variant === Variants["outlined"] ? "0 0.5em 0.5em 0" : "none", activeBackground[variant], activeColor[variant], variant === Variants["underlined"] ? "underline" : "none", primary500, primary500, BodyMedium, gray900);
});
var templateObject_1;
//# sourceMappingURL=container.js.map