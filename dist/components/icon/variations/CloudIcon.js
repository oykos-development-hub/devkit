import React from "react";
import { Path, Svg } from "../styles/shared";
const CloudIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 24 18", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M18 7h-1.26A8 8 0 109 17h9a5 5 0 100-10z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default CloudIcon;
//# sourceMappingURL=CloudIcon.js.map