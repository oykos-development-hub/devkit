import React from "react";
import { Path, Svg } from "../styles/shared";
const AdsIcon = (props) => {
    return (React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "51", height: "50", fill: "none", viewBox: "0 0 51 50" },
        React.createElement("g", { stroke: props.stroke || "#615959", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", clipPath: "url(#clip0_1879_7645)" },
            React.createElement("path", { d: "M15.25 25h6.25v8.333h-6.25V25z" }),
            React.createElement("path", { d: "M21.5 12.5H9a2.083 2.083 0 00-2.083 2.083v25A2.083 2.083 0 009 41.667h33.333a2.084 2.084 0 002.084-2.084v-25a2.083 2.083 0 00-2.084-2.083h-12.5" }),
            React.createElement("path", { d: "M21.5 8.333a2.083 2.083 0 012.083-2.083h4.167a2.083 2.083 0 012.083 2.083v6.25a2.083 2.083 0 01-2.083 2.084h-4.167a2.083 2.083 0 01-2.083-2.084v-6.25zM29.834 33.333H34M29.834 25h8.333" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_1879_7645" },
                React.createElement(Path, { fill: props.fill || "#fff", d: "M0 0H50V50H0z", transform: "translate(.667)" })))));
};
export default AdsIcon;
//# sourceMappingURL=AdsIcon.js.map