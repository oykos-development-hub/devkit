import React from "react";
import { Path, Svg } from "../styles/shared";
export const CircleIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 22 22", onClick: props.onClick, fill: props.fill || "#000" }, props),
    React.createElement(Path, { stroke: props.stroke || "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z" })));
export default CircleIcon;
//# sourceMappingURL=CircleIcon.js.map