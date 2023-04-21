import React from "react";
import { Path, Svg } from "../styles/shared";
const ArchiveIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 24 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M21 6v13H3V6m7 4h4M1 1h22v5H1V1z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default ArchiveIcon;
//# sourceMappingURL=ArchiveIcon.js.map