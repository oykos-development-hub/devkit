import React from "react";
import { Path, Svg } from "../styles/shared";
const PlusIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 16 16", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M8 1v14M1 8h14", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default PlusIcon;
//# sourceMappingURL=PlusIcon.js.map