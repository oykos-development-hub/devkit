var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export var initialShadow = "0 1px 2px rgba(97, 97, 97, 1), 0 2px 4px rgba(97, 97, 97, 1)";
export var DatePickerWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  cursor: pointer;\n  width: ", ";\n  height: ", ";\n  justify-content: center;\n  margin: ", ";\n  min-width: fit-content;\n  padding: ", ";\n  position: ", ";\n  top: ", ";\n  gap: ", ";\n\n  .react-datepicker {\n    border: ", ";\n    border-radius: ", ";\n    align-items: center;\n    box-sizing: border-box;\n    display: flex;\n    cursor: pointer;\n    width: ", ";\n    height: ", ";\n    justify-content: center;\n    margin: ", ";\n    min-width: fit-content;\n    padding: ", ";\n    position: ", ";\n    top: ", ";\n    gap: ", ";\n    outline: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    box-shadow: ", ";\n\n    &__header {\n      border-radius: ", ";\n      border-bottom-right-radius: 0 !important;\n      border-bottom-left-radius: 0 !important;\n      background-color: ", ";\n    }\n\n    &__current-month {\n      border-bottom: 1px solid ", ";\n      padding: 23px 0;\n      color: ", ";\n      margin: 0;\n      font-size: 20px;\n    }\n\n    &__day--selected {\n      background-color: ", ";\n    }\n\n    &__day-name {\n      color: ", ";\n      margin: 9.46px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    &__navigation {\n      top: 13px;\n    }\n\n    &__navigation--next,\n    &__navigation--previous {\n      top: 15px;\n      border: 1px solid ", ";\n      border-radius: 50%;\n      box-shadow: 0 1px 2px rgba(97, 97, 97, 0.2), 0 2px 4px rgba(97, 97, 97, 0.2);\n      height: 40px;\n      width: 40px;\n    }\n\n    &__navigation-icon--next,\n    &__navigation-icon--previous {\n      &::before {\n        top: 8px;\n        left: -4px;\n        border-width: 2px 2px 0 0;\n        border-color: ", ";\n      }\n    }\n\n    &__navigation--next {\n      right: 12px;\n    }\n\n    &__navigation--previous {\n      left: 12px;\n    }\n\n    &__month-container {\n      width: 100%;\n    }\n\n\n    &__day {\n      margin: 0.5px;\n      border-radius: 0;\n      width: 45px;\n      height: 40px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n\n      &--outside-month {\n        color: transparent !important;\n        pointer-events: none;\n      }\n\n      &--in-range {\n        background-color: ", ";\n        color: ", ";\n        right: 0.46px;\n        bottom: 0.46px;\n        border-radius: 0;\n\n        &:hover {\n          background-color: #E6F4F8;\n        }\n      }\n\n      &--keyboard-selected {\n        color: ", ";\n        background-color: ", ";\n        font-weight: bold;\n        box-shadow: 0 1.56082px 3.12163px rgba(15, 86, 179, 0.18),\n        0 3.12163px 6.24327px rgba(15, 86, 179, 0.18);\n        \n      }\n\n      &--range-end {\n        background-color: ", ";\n        color: white;\n\n        &:hover {\n          background-color: ", ";\n        }\n      }\n  }\n"], ["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  cursor: pointer;\n  width: ", ";\n  height: ", ";\n  justify-content: center;\n  margin: ", ";\n  min-width: fit-content;\n  padding: ", ";\n  position: ", ";\n  top: ", ";\n  gap: ", ";\n\n  .react-datepicker {\n    border: ", ";\n    border-radius: ", ";\n    align-items: center;\n    box-sizing: border-box;\n    display: flex;\n    cursor: pointer;\n    width: ", ";\n    height: ", ";\n    justify-content: center;\n    margin: ", ";\n    min-width: fit-content;\n    padding: ", ";\n    position: ", ";\n    top: ", ";\n    gap: ", ";\n    outline: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    box-shadow: ", ";\n\n    &__header {\n      border-radius: ", ";\n      border-bottom-right-radius: 0 !important;\n      border-bottom-left-radius: 0 !important;\n      background-color: ", ";\n    }\n\n    &__current-month {\n      border-bottom: 1px solid ", ";\n      padding: 23px 0;\n      color: ", ";\n      margin: 0;\n      font-size: 20px;\n    }\n\n    &__day--selected {\n      background-color: ", ";\n    }\n\n    &__day-name {\n      color: ", ";\n      margin: 9.46px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    &__navigation {\n      top: 13px;\n    }\n\n    &__navigation--next,\n    &__navigation--previous {\n      top: 15px;\n      border: 1px solid ", ";\n      border-radius: 50%;\n      box-shadow: 0 1px 2px rgba(97, 97, 97, 0.2), 0 2px 4px rgba(97, 97, 97, 0.2);\n      height: 40px;\n      width: 40px;\n    }\n\n    &__navigation-icon--next,\n    &__navigation-icon--previous {\n      &::before {\n        top: 8px;\n        left: -4px;\n        border-width: 2px 2px 0 0;\n        border-color: ", ";\n      }\n    }\n\n    &__navigation--next {\n      right: 12px;\n    }\n\n    &__navigation--previous {\n      left: 12px;\n    }\n\n    &__month-container {\n      width: 100%;\n    }\n\n\n    &__day {\n      margin: 0.5px;\n      border-radius: 0;\n      width: 45px;\n      height: 40px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n\n      &--outside-month {\n        color: transparent !important;\n        pointer-events: none;\n      }\n\n      &--in-range {\n        background-color: ", ";\n        color: ", ";\n        right: 0.46px;\n        bottom: 0.46px;\n        border-radius: 0;\n\n        &:hover {\n          background-color: #E6F4F8;\n        }\n      }\n\n      &--keyboard-selected {\n        color: ", ";\n        background-color: ", ";\n        font-weight: bold;\n        box-shadow: 0 1.56082px 3.12163px rgba(15, 86, 179, 0.18),\n        0 3.12163px 6.24327px rgba(15, 86, 179, 0.18);\n        \n      }\n\n      &--range-end {\n        background-color: ", ";\n        color: white;\n\n        &:hover {\n          background-color: ", ";\n        }\n      }\n  }\n"])), function (props) { var _a; return ((_a = props.styleWrapper) === null || _a === void 0 ? void 0 : _a.width) || "fit-content"; }, function (props) { var _a; return ((_a = props.styleWrapper) === null || _a === void 0 ? void 0 : _a.height) || "fit-content"; }, function (props) { var _a; return ((_a = props.styleWrapper) === null || _a === void 0 ? void 0 : _a.margin) || "0em"; }, function (props) { var _a; return ((_a = props.styleWrapper) === null || _a === void 0 ? void 0 : _a.padding) || "0em"; }, function (props) { var _a; return ((_a = props.styleWrapper) === null || _a === void 0 ? void 0 : _a.position) || "relative"; }, function (props) { var _a; return ((_a = props.styleWrapper) === null || _a === void 0 ? void 0 : _a.top) || "0em"; }, function (props) { var _a; return ((_a = props.styleWrapper) === null || _a === void 0 ? void 0 : _a.gap) || "0em"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.border) || "none"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.borderRadius) || "0em"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.width) || "100%"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.height) || "100%"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.margin) || "0em"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.padding) || "1rem"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.position) || "relative"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.top) || "0em"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.gap) || "0em"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.outline) || "none"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.fontFamily) || ((_b = props.theme.fontFamily) === null || _b === void 0 ? void 0 : _b.one) || "sans-serif"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = props.theme.lineHeight) === null || _b === void 0 ? void 0 : _b.sm) || "1em"; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.boxShadow) || initialShadow; }, function (props) { var _a; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.borderRadius) || "0em"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.backgroundColor) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.light.four) || "#7f7f7f"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "orange"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "orange"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "orange"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "orange"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "orange"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "orange"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.backgroundColor) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.light.four) || "#616161"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.light.one) || "#fff"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.light.one) || "#fff"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.backgroundColor) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.dark.four) || "#616161"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "orange"; }, function (props) { var _a, _b; return ((_a = props.styleCalendar) === null || _a === void 0 ? void 0 : _a.color) || ((_b = props.theme.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "#0068B6FF"; });
export var StyledDatePicker = styled(DatePicker)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  cursor: pointer;\n  width: ", ";\n  height: ", ";\n  justify-content: center;\n  margin: ", ";\n  min-width: fit-content;\n  padding: ", ";\n  position: ", ";\n  top: ", ";\n  gap: ", ";\n  outline: ", ";\n  font-family: ", ";\n  line-height: ", ";\n\n  &:hover {\n    transition: all 0.3s;\n    outline: 1px solid red;\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.4;\n  }\n"], ["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  cursor: pointer;\n  width: ", ";\n  height: ", ";\n  justify-content: center;\n  margin: ", ";\n  min-width: fit-content;\n  padding: ", ";\n  position: ", ";\n  top: ", ";\n  gap: ", ";\n  outline: ", ";\n  font-family: ", ";\n  line-height: ", ";\n\n  &:hover {\n    transition: all 0.3s;\n    outline: 1px solid red;\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.4;\n  }\n"])), function (props) { var _a; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.width) || "fit-content"; }, function (props) { var _a; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.height) || "fit-content"; }, function (props) { var _a; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.margin) || "0em"; }, function (props) { var _a; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.padding) || "1rem"; }, function (props) { var _a; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.position) || "relative"; }, function (props) { var _a; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.top) || "0em"; }, function (props) { var _a; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.gap) || "0em"; }, function (props) { var _a; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.outline) || "none"; }, function (props) { var _a, _b; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.fontFamily) || ((_b = props.theme.fontFamily) === null || _b === void 0 ? void 0 : _b.one) || "sans-serif"; }, function (props) { var _a, _b; return ((_a = props.styleInput) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = props.theme.lineHeight) === null || _b === void 0 ? void 0 : _b.sm) || "1em"; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=shared.js.map