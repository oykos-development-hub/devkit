import React from "react";
import { Path, Svg } from "../styles/shared";
const CheckIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 18 13", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M17 1L6 12 1 7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default CheckIcon;
//# sourceMappingURL=CheckIcon.js.map