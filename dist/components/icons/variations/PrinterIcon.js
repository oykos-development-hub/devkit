import React from "react";
import { Path, Svg } from "../styles/shared";
const PrinterIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 22 22", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M5 8V1h12v7M5 17H3a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M5 13h12v8H5v-8z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default PrinterIcon;
//# sourceMappingURL=PrinterIcon.js.map