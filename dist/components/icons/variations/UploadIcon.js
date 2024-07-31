import React from "react";
import { Path, Svg } from "../styles/shared";
const UploadIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M19 13v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4m14-7l-5-5m0 0L5 6m5-5v12", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default UploadIcon;
//# sourceMappingURL=UploadIcon.js.map