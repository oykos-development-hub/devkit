import React from "react";
import { Path, Svg } from "../styles/shared";
const SafeRetrieval = (props) => {
    return (React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "51", height: "50", fill: props.fill || "none", onClick: props.onClick, viewBox: "0 0 51 50" },
        React.createElement(Path, { stroke: "#615959", strokeLinejoin: "round", strokeWidth: "1.5", d: "M7.958 9.508l17.717-5.341 17.7 5.34v10.954c0 11.513-7.132 21.733-17.706 25.372C15.093 42.194 7.96 31.971 7.96 20.456V9.508z" }),
        React.createElement(Path, { stroke: "#615959", strokeLinejoin: "round", strokeWidth: "1.5", d: "M25.667 31.25a7.292 7.292 0 100-14.583 7.292 7.292 0 000 14.583z" }),
        React.createElement(Path, { stroke: "#615959", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M30.875 30.208l6.25 7.292" }),
        React.createElement(Path, { stroke: "#615959", strokeLinejoin: "round", strokeWidth: "1.5", d: "M43.375 20.46c0 11.513-7.132 21.734-17.706 25.373" })));
};
export default SafeRetrieval;
//# sourceMappingURL=SafeRetrieval.js.map