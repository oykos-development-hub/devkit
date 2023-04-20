import React from "react";
import { Path, Svg } from "../styles/shared";
const LoaderIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 22 22", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M11 1v4m0 12v4M3.93 3.93l2.83 2.83m8.48 8.48l2.83 2.83M1 11h4m12 0h4M3.93 18.07l2.83-2.83m8.48-8.48l2.83-2.83", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default LoaderIcon;
//# sourceMappingURL=LoaderIcon.js.map