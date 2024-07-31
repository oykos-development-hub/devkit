import React from "react";
import { Svg, Path } from "../styles/shared";
const DocumentForAccounting = (props) => {
    return (React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "51", height: "50", fill: props.fill || "none", viewBox: "0 0 51 50", onClick: props.onClick },
        React.createElement("g", { stroke: "#615959", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", clipPath: "url(#clip0_2042_962)" },
            React.createElement(Path, { d: "M10.75 43.75V10.417a4.167 4.167 0 014.167-4.167H35.75a4.167 4.167 0 014.167 4.167V43.75l-6.25-4.167L29.5 43.75l-4.167-4.167-4.166 4.167L17 39.583l-6.25 4.167z" }),
            React.createElement(Path, { d: "M31.583 29.167V25a4.167 4.167 0 00-4.166-4.167h-8.334m0 0l4.167-4.166m-4.167 4.166L23.25 25" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2042_962" },
                React.createElement(Path, { fill: "#fff", d: "M0 0H50V50H0z", transform: "translate(.333)" })))));
};
export default DocumentForAccounting;
//# sourceMappingURL=DocumentForAccounting.js.map