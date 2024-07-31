import React from "react";
import { Path, Svg } from "../styles/shared";
const BuildingsIcon = (props) => {
    return (React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", fill: "none", viewBox: "0 0 50 50" },
        React.createElement("g", { stroke: props.stroke || "#615959", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", clipPath: "url(#clip0_1879_7404)" },
            React.createElement("path", { d: "M6.25 43.75h37.5" }),
            React.createElement("path", { d: "M6.25 20.833h37.5" }),
            React.createElement("path", { d: "M10.417 12.5L25 6.25l14.583 6.25" }),
            React.createElement("path", { d: "M8.333 20.833V43.75" }),
            React.createElement("path", { d: "M41.667 20.833V43.75" }),
            React.createElement("path", { d: "M16.667 29.167v6.25" }),
            React.createElement("path", { d: "M25 29.167v6.25" }),
            React.createElement("path", { d: "M33.333 29.167v6.25" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_1879_7404" },
                React.createElement(Path, { fill: props.fill || "#fff", d: "M0 0H50V50H0z" })))));
};
export default BuildingsIcon;
//# sourceMappingURL=BuildingsIcon.js.map