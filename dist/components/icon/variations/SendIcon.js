import React from "react";
import { Path, Svg } from "../styles/shared";
const SendIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 22 22", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M21 1L10 12M21 1l-7 20-4-9M21 1L1 8l9 4", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default SendIcon;
//# sourceMappingURL=SendIcon.js.map