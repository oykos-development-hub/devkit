import React from "react";
import { Path, Svg } from "../styles/shared";
const InfoIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 22 22", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M11 15v-4m0-4h.01M21 11c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default InfoIcon;
//# sourceMappingURL=InfoIcon.js.map