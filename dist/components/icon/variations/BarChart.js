import React from "react";
import { Path, Svg } from "../styles/shared";
const BarChart = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 14 18", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M7 17V7m6 10V1M1 17v-4", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default BarChart;
//# sourceMappingURL=BarChart.js.map