import React from "react";
import { Path, Svg } from "../styles/shared";
const ImageIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M3 19h14a2 2 0 002-2V3a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2zm0 0L14 8l5 5M8 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default ImageIcon;
//# sourceMappingURL=ImageIcon.js.map