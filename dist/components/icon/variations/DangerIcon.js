import React from "react";
import { Path, Svg } from "../styles/shared";
const DangerIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 20", onClick: props.onClick }, props),
    React.createElement(Path, Object.assign({ d: "M10 4a1 1 0 011 1v6a1 1 0 11-2 0V5a1 1 0 011-1zM10 14a1 1 0 100 2 1 1 0 000-2z" }, props)),
    React.createElement(Path, Object.assign({ fillRule: "evenodd", d: "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM2 10a8 8 0 1016 0 8 8 0 00-16 0z", clipRule: "evenodd" }, props))));
export default DangerIcon;
//# sourceMappingURL=DangerIcon.js.map