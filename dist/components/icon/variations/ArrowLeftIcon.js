import React from "react";
import { Path, Svg } from "../styles/shared";
const ArrowLeftIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 16 16", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M15 8H1m0 0l7 7M1 8l7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default ArrowLeftIcon;
//# sourceMappingURL=ArrowLeftIcon.js.map