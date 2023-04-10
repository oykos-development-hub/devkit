import React from "react";
import { Path, Svg } from "../styles/shared";
const SidebarIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M7 1v18M3 1h14a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default SidebarIcon;
//# sourceMappingURL=SidebarIcon.js.map