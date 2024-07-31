import React from "react";
import { LoaderWrapper } from "./styles";
const CircleLoader = ({ width, height, color }) => {
    return (React.createElement(LoaderWrapper, { width: width, height: height },
        React.createElement("svg", { viewBox: "25 25 50 50" },
            React.createElement("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: color, strokeWidth: "4" }))));
};
export default CircleLoader;
//# sourceMappingURL=circleLoader.js.map