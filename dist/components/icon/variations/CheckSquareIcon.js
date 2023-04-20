import React from "react";
import { Path, Svg } from "../styles/shared";
const CheckSquareIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 21 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M7 9l3 3L20 2m-1 8v7a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h11", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default CheckSquareIcon;
//# sourceMappingURL=CheckSquareIcon.js.map