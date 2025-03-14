import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Table } from "./index";
import { Theme } from "../../shared/theme";
import { CircleCheckIcon } from "../icon";
const tableHeadings = ["City", "Code", "Latitude", "Longitude"];
const tableData = [
    { city: "London", code: "UK", latitude: 51.5285578, longitude: -0.2420242 },
    { city: "Manchester", code: "UK", latitude: 53.4722249, longitude: -2.2936739 },
];
export default {
    title: "Components/Table",
    component: Table,
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
    },
};
const Default = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(Table, Object.assign({}, args))));
export const DefaultTable = Default.bind({});
DefaultTable.args = {
    titleElement: (React.createElement("div", null,
        React.createElement("h3", { style: { margin: 0, marginBottom: "0.25em" } }, "This is table title"),
        React.createElement("p", { style: { margin: 0 } }, "Additional content..."))),
    headerContent: (React.createElement("tr", null, tableHeadings.map((heading, index) => (React.createElement("th", { key: index },
        React.createElement("div", null,
            React.createElement("span", null, heading),
            React.createElement(CircleCheckIcon, { size: "1em", onClick: () => alert("Icon is clicked"), style: { cursor: "pointer" } }))))))),
    bodyContent: tableData.map((data, index) => (React.createElement("tr", { key: index },
        React.createElement("td", null, data.city),
        React.createElement("td", null, data.code),
        React.createElement("td", null, data.latitude),
        React.createElement("td", null, data.longitude)))),
};
export const NoDataTable = Default.bind({});
NoDataTable.args = {
    headerContent: (React.createElement("tr", null, tableHeadings.map((heading, index) => (React.createElement("th", { key: index },
        React.createElement("div", null,
            React.createElement("span", null, heading),
            React.createElement(CircleCheckIcon, { size: "1em", onClick: () => alert("Icon is clicked"), style: { cursor: "pointer" } }))))))),
    noDataMessage: "No data",
};
//# sourceMappingURL=index.stories.js.map