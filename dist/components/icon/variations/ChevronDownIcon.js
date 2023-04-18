import React from "react";
import { Path, Svg } from "../styles/shared";
const ChevronDownIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 14 8" }, props, { onClick: props.onClick, fill: props.fill || "none" }),
    React.createElement(Path, Object.assign({}, props, { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 1l6 6 6-6", stroke: props.stroke || "#000" }))));
export default ChevronDownIcon;
//# sourceMappingURL=ChevronDownIcon.js.map