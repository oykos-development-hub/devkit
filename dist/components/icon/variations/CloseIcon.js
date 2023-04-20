import React from "react";
import { Path, Svg } from "../styles/shared";
const CloseIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 14 14", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M13 1L1 13M1 1l12 12", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default CloseIcon;
//# sourceMappingURL=CloseIcon.js.map