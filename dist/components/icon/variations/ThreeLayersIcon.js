import React from "react";
import { Path, Svg } from "../styles/shared";
const ThreeLayersIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 22 22", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M1 16l10 5 10-5M1 11l10 5 10-5M11 1L1 6l10 5 10-5-10-5z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default ThreeLayersIcon;
//# sourceMappingURL=ThreeLayersIcon.js.map