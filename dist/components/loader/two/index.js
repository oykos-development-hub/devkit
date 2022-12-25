import React from "react";
export var Loader = function (_a) {
    var className = _a.className, width = _a.width, height = _a.height, _b = _a.primaryColor, primaryColor = _b === void 0 ? "#e3e3e3" : _b, _c = _a.secondaryColor, secondaryColor = _c === void 0 ? "#333333" : _c;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { margin: "auto" }, width: width, height: height, className: className, display: "block", preserveAspectRatio: "xMidYMid", viewBox: "0 0 100 100", id: "loader" },
        React.createElement("circle", { cx: "50", cy: "50", r: "32", fill: "none", stroke: primaryColor, strokeDasharray: "50.26548245743669 50.26548245743669", strokeLinecap: "round", strokeWidth: "4", id: "loader-ring-1" }),
        React.createElement("circle", { cx: "50", cy: "50", r: "23", fill: "none", stroke: secondaryColor, strokeDasharray: "36.12831551628262 36.12831551628262", strokeDashoffset: "36.128", strokeLinecap: "round", strokeWidth: "4", id: "loader-ring-2" })));
};
//# sourceMappingURL=index.js.map