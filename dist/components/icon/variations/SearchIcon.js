import React from "react";
import { Path, Svg } from "../styles/shared";
const SearchIcon = (props) => (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 20", onClick: props.onClick, fill: props.fill || "none" }, props),
    React.createElement(Path, Object.assign({ d: "M19 19l-4.35-4.35M17 9A8 8 0 111 9a8 8 0 0116 0z", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", stroke: props.stroke || "#000" }, props))));
export default SearchIcon;
//# sourceMappingURL=SearchIcon.js.map