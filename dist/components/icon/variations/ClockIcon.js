import React from "react";
import { Path, Svg } from "../styles/shared";
const ClockIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 22 22", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 5v6l4 2m6-2c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10z", stroke: props.stroke || "#000" }, props))));
export default ClockIcon;
//# sourceMappingURL=ClockIcon.js.map