import React from "react";
import { Path, Svg } from "../styles/shared";
const ReportIcon = (props) => {
    return (React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "51", height: "50", fill: "none", viewBox: "0 0 51 50" },
        React.createElement("g", Object.assign({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", clipPath: "url(#clip0_3392_16636)", stroke: props.stroke || "#615959" }, props),
            React.createElement(Path, { d: "M19.083 25v-8.333M31.583 25v-4.167M25.333 25v-2.083M6.583 8.333h37.5M8.666 8.333v20.834a4.167 4.167 0 004.167 4.166h25A4.167 4.167 0 0042 29.167V8.333M25.333 33.333v8.334M19.083 41.667h12.5" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_3392_16636" },
                React.createElement(Path, { fill: props.fill || "#fff", d: "M0 0H50V50H0z", transform: "translate(.333)" })))));
};
export default ReportIcon;
//# sourceMappingURL=ReportIcon.js.map