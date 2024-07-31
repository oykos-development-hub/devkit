import React from "react";
import { Path, Svg } from "../styles/shared";
const PlusCircleIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 24 24", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M12 8v8m-4-4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default PlusCircleIcon;
//# sourceMappingURL=PlusCircleIcon.js.map