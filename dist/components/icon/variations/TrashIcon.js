import React from "react";
import { Path, Svg } from "../styles/shared";
const TrashIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 22", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M1 5h2m0 0h16M3 5v14a2 2 0 002 2h10a2 2 0 002-2V5H3zm3 0V3a2 2 0 012-2h4a2 2 0 012 2v2", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default TrashIcon;
//# sourceMappingURL=TrashIcon.js.map