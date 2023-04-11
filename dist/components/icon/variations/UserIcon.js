import React from "react";
import { Path, Svg } from "../styles/shared";
const UserIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 18 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M17 19v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M13 5a4 4 0 11-8 0 4 4 0 018 0z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default UserIcon;
//# sourceMappingURL=UserIcon.js.map