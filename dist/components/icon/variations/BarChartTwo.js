import React from "react";
import { Path, Svg } from "../styles/shared";
const BarChartTwo = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 14 18", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M13 17V7M7 17V1M1 17v-6", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default BarChartTwo;
//# sourceMappingURL=BarChartTwo.js.map