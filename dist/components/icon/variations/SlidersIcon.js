import React from "react";
import { Path, Svg } from "../styles/shared";
const SlidersIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 24 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M4 19v-7m0-4V1m8 18v-9m0-4V1m8 18v-5m0-4V1M1 12h6m2-6h6m2 8h6", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default SlidersIcon;
//# sourceMappingURL=SlidersIcon.js.map