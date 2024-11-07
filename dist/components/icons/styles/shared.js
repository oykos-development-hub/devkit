import styled from "styled-components";
import { Theme } from "../../../shared/theme";
export const Svg = styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
}) `
  fill: ${(props) => { var _a, _b, _c; return props.fill || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.black) || ((_c = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _c === void 0 ? void 0 : _c.black); }};
  position: ${(props) => props.position || "relative"};
  width: ${(props) => props.width || "1rem"};
  height: ${(props) => props.height || "1rem"};
`;
export const Path = styled.path `
  stroke: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.stroke) || props.stroke; }};
`;
//# sourceMappingURL=shared.js.map