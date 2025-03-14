import React from "react";
import { Path, Svg } from "../styles/shared";
const DownloadIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M19 13v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4m4-5l5 5m0 0l5-5m-5 5V1", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default DownloadIcon;
//# sourceMappingURL=DownloadIcon.js.map