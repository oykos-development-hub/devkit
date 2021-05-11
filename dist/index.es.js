import React from 'react';

var Loader = function (_a) {
    var className = _a.className, width = _a.width, height = _a.height;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { margin: "auto" }, width: width, height: height, className: className, display: "block", preserveAspectRatio: "xMidYMid", viewBox: "0 0 100 100", id: "loader" },
        React.createElement("circle", { cx: "50", cy: "50", r: "32", fill: "none", stroke: "#e3e3e3", strokeDasharray: "50.26548245743669 50.26548245743669", strokeLinecap: "round", strokeWidth: "4", id: "ringLoader-1" }),
        React.createElement("circle", { cx: "50", cy: "50", r: "23", fill: "none", stroke: "#333333", strokeDasharray: "36.12831551628262 36.12831551628262", strokeDashoffset: "36.128", strokeLinecap: "round", strokeWidth: "4", id: "ringLoader-2" })));
};

var Devkit = {
    LoaderComponent: Loader
};

export { Devkit };
//# sourceMappingURL=index.es.js.map
