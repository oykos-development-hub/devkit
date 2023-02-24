import React from "react";
import styled from "styled-components";
import { rotation, rotationBackwards } from "../../shared/animations/rotation";
const Wrapper = styled.div `
  width: 100%;
  height: 100%;
  background-color: ${(props) => { var _a, _b; return props.wrapperBackgroundColor || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.secondary500) || "transparent"; }};
  display: flex;
  align-items: center;
  justify-content: center;

  & #loader {
    width: ${(props) => props.width || "120px"};
    height: ${(props) => props.height || "120px"};
  }

  & #loader-ring-1 {
    stroke: ${(props) => { var _a, _b; return props.primaryColor || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.primary500) || "red"; }};
    animation: ${rotation} 1.5s linear infinite;
    transform-origin: center;
  }

  & #loader-ring-2 {
    stroke: ${(props) => { var _a, _b; return props.secondaryColor || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.error500) || "green"; }};
    animation: ${rotationBackwards} 1.5s linear infinite;
    transform-origin: center;
  }
`;
export const Two = (props) => {
    return (React.createElement(Wrapper, Object.assign({}, props),
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { margin: "auto" }, display: "block", preserveAspectRatio: "xMidYMid", viewBox: "0 0 100 100", id: "loader" },
            React.createElement("circle", { cx: "50", cy: "50", r: "32", fill: "none", strokeDasharray: "50.26548245743669 50.26548245743669", strokeLinecap: "round", strokeWidth: "2", id: "loader-ring-1" }),
            React.createElement("circle", { cx: "50", cy: "50", r: "23", fill: "none", strokeDasharray: "36.12831551628262 36.12831551628262", strokeDashoffset: "36.128", strokeLinecap: "round", strokeWidth: "2", id: "loader-ring-2" }))));
};
//# sourceMappingURL=two.js.map