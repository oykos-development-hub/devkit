import React from "react";
import { Path, Svg } from "../styles/shared";
const ShareIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 18 22", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M1 11v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6L9 1m0 0L5 5m4-4v13", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default ShareIcon;
//# sourceMappingURL=ShareIcon.js.map