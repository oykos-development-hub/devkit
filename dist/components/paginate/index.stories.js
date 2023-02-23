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
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Pagination } from "./index";
import { Theme } from "../../shared/theme";
var paginationData = [
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "AndorrA", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bermuda", code: "BM" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Bouvet Island", code: "BV" },
    { name: "Brazil", code: "BR" },
    { name: "British Indian Ocean Territory", code: "IO" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
];
export default {
    component: Pagination,
    title: "Components/Pagination",
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["filled", "outlined", "underlined"],
            },
        },
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        position: {
            control: {
                type: "radio",
                options: ["left", "center", "right"],
            },
        },
    },
};
var Template = function (_a) {
    var renderContent = _a.renderContent, args = __rest(_a, ["renderContent"]);
    var contentToShow = function (data) { return (React.createElement("div", null, data.map(function (country) { return (React.createElement("p", { key: country, style: { textAlign: "center" } },
        React.createElement("strong", null, country.name))); }))); };
    return (React.createElement(StoryWrapper, null,
        React.createElement("div", { style: { width: "70%" } },
            React.createElement(Pagination, __assign({}, args, { renderContent: contentToShow })))));
};
export var VariantFilled = Template.bind({});
var paginationArgs = {
    data: paginationData,
    itemsPerPage: 4,
    previousLabel: (React.createElement("p", { style: { display: "flex", alignItems: "center", gap: "0.5em", margin: 0 } },
        React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M12.8334 7H1.16675M1.16675 7L7.00008 12.8333M1.16675 7L7.00008 1.16667", stroke: "#616161", strokeWidth: "1.67", strokeLinecap: "round", strokeLinejoin: "round" })),
        "Previous")),
    nextLabel: (React.createElement("p", { style: { display: "flex", alignItems: "center", gap: "0.5em", margin: 0 } },
        "Next",
        React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M1.16666 7H12.8333M12.8333 7L7 1.16667M12.8333 7L7 12.8333", stroke: "#616161", strokeWidth: "1.67", strokeLinecap: "round", strokeLinejoin: "round" })))),
    pageRangeDisplayed: 3,
};
VariantFilled.args = __assign(__assign({}, paginationArgs), { variant: "filled" });
export var VariantOutlined = Template.bind({});
VariantOutlined.args = __assign(__assign({}, paginationArgs), { variant: "outlined" });
export var VariantUnderlined = Template.bind({});
VariantUnderlined.args = __assign(__assign({}, paginationArgs), { variant: "underlined" });
export var OnlyWithArrows = Template.bind({});
OnlyWithArrows.args = __assign(__assign({}, paginationArgs), { displayPages: false, previousLabel: (React.createElement("p", { style: { display: "flex", alignItems: "center", gap: "0.5em", margin: 0 } },
        React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M12.8334 7H1.16675M1.16675 7L7.00008 12.8333M1.16675 7L7.00008 1.16667", stroke: "#616161", strokeWidth: "1.67", strokeLinecap: "round", strokeLinejoin: "round" })))), nextLabel: (React.createElement("p", { style: { display: "flex", alignItems: "center", gap: "0.5em", margin: 0 } },
        React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M1.16666 7H12.8333M12.8333 7L7 1.16667M12.8333 7L7 12.8333", stroke: "#616161", strokeWidth: "1.67", strokeLinecap: "round", strokeLinejoin: "round" })))), position: "center" });
export var WithPaginationText = Template.bind({});
WithPaginationText.args = __assign(__assign({}, paginationArgs), { renderPaginationText: function (selected, total) { return "Page ".concat(selected, " of ").concat(total); }, previousLabel: (React.createElement("p", { style: { display: "flex", alignItems: "center", gap: "0.5em", margin: 0 } },
        React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M12.8334 7H1.16675M1.16675 7L7.00008 12.8333M1.16675 7L7.00008 1.16667", stroke: "#616161", strokeWidth: "1.67", strokeLinecap: "round", strokeLinejoin: "round" })))), nextLabel: (React.createElement("p", { style: { display: "flex", alignItems: "center", gap: "0.5em", margin: 0 } },
        React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M1.16666 7H12.8333M12.8333 7L7 1.16667M12.8333 7L7 12.8333", stroke: "#616161", strokeWidth: "1.67", strokeLinecap: "round", strokeLinejoin: "round" })))) });
//# sourceMappingURL=index.stories.js.map