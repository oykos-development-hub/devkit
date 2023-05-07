import React from "react";
import { Path, Svg } from "../styles/shared";
const FolderIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 22 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M21 17a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default FolderIcon;
//# sourceMappingURL=FolderIcon.js.map