import React from "react";
import { Path, Svg } from "../styles/shared";
const SaveIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M15 19v-8H5v8M5 1v5h8m4 13H3a2 2 0 01-2-2V3a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default SaveIcon;
//# sourceMappingURL=SaveIcon.js.map