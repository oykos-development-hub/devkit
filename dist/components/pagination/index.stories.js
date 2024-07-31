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
import { Theme } from "../../shared/theme";
import { SSSPagination } from ".";
export default {
    component: SSSPagination,
    title: "Components/Pagination",
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["filled"],
            },
        },
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        pageCount: {
            control: {
                type: "number",
            },
            defaultValue: 10,
        },
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return (React.createElement(StoryWrapper, null,
        React.createElement("div", { style: { width: "70%" } },
            React.createElement(SSSPagination, Object.assign({}, args)))));
};
export const Default = Template.bind({});
Default.args = {
    variant: "filled",
    itemsPerPage: 4,
    pageRangeDisplayed: 3,
    pageCount: 10,
    onChange: (page) => console.log("Pagination change callback -", page),
};
//# sourceMappingURL=index.stories.js.map