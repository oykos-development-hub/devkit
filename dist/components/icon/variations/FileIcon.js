import React from "react";
import { Path, Svg } from "../styles/shared";
const FileIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 18 22", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M10 1H3a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8m-7-7l7 7m-7-7v7h7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default FileIcon;
//# sourceMappingURL=FileIcon.js.map