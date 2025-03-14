import React from "react";
import { Path, Svg } from "../styles/shared";
const ChevronUpIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 14 8" }, props, { onClick: props.onClick, fill: props.fill || "none" }),
    React.createElement(Path, Object.assign({}, props, { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 7L7 1 1 7", stroke: props.stroke || "#000" }))));
export default ChevronUpIcon;
//# sourceMappingURL=ChevronUpIcon.js.map