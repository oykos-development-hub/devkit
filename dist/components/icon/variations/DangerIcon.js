import React from "react";
import { Path, Svg } from "../styles/shared";
const DangerIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 22 22" }, props, { onClick: props.onClick, fill: props.fill || "none" }),
    React.createElement(Path, Object.assign({}, props, { d: "M11 7V11M11 15H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", stroke: props.stroke || "#000" }))));
export default DangerIcon;
//# sourceMappingURL=DangerIcon.js.map