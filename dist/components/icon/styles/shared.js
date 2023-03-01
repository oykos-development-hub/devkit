import styled from "styled-components";
import { css } from "styled-components";
import { Positions } from "../types";
import { Theme } from "../../../shared/theme";
const sharedPath = css `
  color: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.black) || ((_d = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _d === void 0 ? void 0 : _d.black); }};
  fill: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.black) || ((_d = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _d === void 0 ? void 0 : _d.black); }};
`;
export const Svg = styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
}) `
  ${sharedPath};
  position: ${(props) => props.position || Positions.relative};
  width: ${(props) => { var _a; return (props === null || props === void 0 ? void 0 : props.size) || ((_a = props.style) === null || _a === void 0 ? void 0 : _a.width) || "2rem"; }} !important;
  height: ${(props) => { var _a; return (props === null || props === void 0 ? void 0 : props.size) || ((_a = props.style) === null || _a === void 0 ? void 0 : _a.height) || "2rem"; }} !important;
  top: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.top) || "unset"; }};
  bottom: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.bottom) || "unset"; }};
  right: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.right) || "unset"; }};
  left: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.left) || "unset"; }};
`;
export const Path = styled.path `
  ${sharedPath}
`;
//# sourceMappingURL=shared.js.map