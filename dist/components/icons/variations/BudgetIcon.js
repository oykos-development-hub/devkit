import React from "react";
import { Path, Svg } from "../styles/shared";
const BudgetIcon = (props) => {
    return (React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", fill: "none", viewBox: "0 0 50 50" },
        React.createElement("g", { stroke: props.stroke || "#615959", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", clipPath: "url(#clip0_1984_4859)" },
            React.createElement("path", { d: "M20.83 6.668a18.75 18.75 0 1022.5 22.5 2.083 2.083 0 00-2.082-2.084H27.08a4.167 4.167 0 01-4.167-4.166V8.334a1.876 1.876 0 00-2.083-1.666z" }),
            React.createElement("path", { d: "M31.25 7.292A18.75 18.75 0 0142.708 18.75h-9.375a2.083 2.083 0 01-2.083-2.083V7.292z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_1984_4859" },
                React.createElement(Path, { fill: props.fill || "#fff", d: "M0 0H50V50H0z" })))));
};
export default BudgetIcon;
//# sourceMappingURL=BudgetIcon.js.map