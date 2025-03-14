import React from "react";
import { Path, Svg } from "../styles/shared";
const AwardIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 24 24", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M8.21 13.89L7 23l5-3 5 3-1.21-9.12M19 8A7 7 0 115 8a7 7 0 0114 0z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default AwardIcon;
//# sourceMappingURL=AwardIcon.js.map