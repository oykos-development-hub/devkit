import React from "react";
import { Path, Svg } from "../styles/shared";
const ExternalIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M16 11v6a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h6m4-3h6m0 0v6m0-6L8 12", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default ExternalIcon;
//# sourceMappingURL=ExternalIcon.js.map