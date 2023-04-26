import React from "react";
import { Path, Svg } from "../styles/shared";
const MinusIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 16 2", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M1 1h14", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default MinusIcon;
//# sourceMappingURL=MinusIcon.js.map