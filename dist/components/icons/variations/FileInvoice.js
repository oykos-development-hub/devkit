import React from "react";
import { Path, Svg } from "../styles/shared";
const FileInvoice = (props) => {
    return (React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 50 50", onClick: props.onClick, fill: props.fill || "none" },
        React.createElement("g", { stroke: props.stroke || "#615959", strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement(Path, { strokeWidth: "1.5", d: "M29.167 6.25v8.333a2.083 2.083 0 002.083 2.084h8.333" }),
            React.createElement(Path, { strokeWidth: "1.5", d: "M35.417 43.75H14.583a4.167 4.167 0 01-4.166-4.167V10.417a4.167 4.167 0 014.166-4.167h14.584l10.416 10.417v22.916a4.167 4.167 0 01-4.166 4.167z" }),
            React.createElement(Path, { strokeWidth: "2", d: "M18.75 14.583h2.083" }),
            React.createElement(Path, { strokeWidth: "1.5", d: "M18.75 27.083h12.5M27.083 35.417h4.167" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2041_2563" },
                React.createElement(Path, { fill: "#fff", d: "M0 0H50V50H0z" })))));
};
export default FileInvoice;
//# sourceMappingURL=FileInvoice.js.map