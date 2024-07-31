import React from "react";
import { Path, Svg } from "../styles/shared";
const ContractIcon = (props) => {
    return (React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", fill: "none", viewBox: "0 0 50 50" },
        React.createElement("g", { stroke: props.stroke || "#615959", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", clipPath: "url(#clip0_3392_16645)" },
            React.createElement(Path, { d: "M29.166 6.25v8.333a2.083 2.083 0 002.084 2.084h8.333" }),
            React.createElement(Path, { d: "M10.416 25V10.417a4.167 4.167 0 014.167-4.167h14.583l10.417 10.417V25M10.416 43.75h29.167M10.416 37.5h29.167M10.416 31.25h29.167" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_3392_16645" },
                React.createElement(Path, { fill: props.fill || "#fff", d: "M0 0H50V50H0z" })))));
};
export default ContractIcon;
//# sourceMappingURL=ContractIcon.js.map