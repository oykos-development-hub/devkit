import React from "react";
import { Path, Svg } from "../styles/shared";
const CalendarIcon = (props) => {
    return (React.createElement(Svg, Object.assign({ viewBox: "0 0 20 22", onClick: props.onClick, fill: props.fill || "none" }, props),
        React.createElement(Path, Object.assign({ d: "M14 1v4M6 1v4M1 9h18M3 3h14a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", stroke: props.stroke || "#000" }, props))));
};
export default CalendarIcon;
//# sourceMappingURL=CalendarIcon.js.map