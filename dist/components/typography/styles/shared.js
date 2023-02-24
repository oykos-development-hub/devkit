import { css } from "styled-components";
import { Theme } from "../../../shared/theme";
export const shared = css `
  color: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_c = (_b = props === null || props === void 0 ? void 0 : props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.gray900) || ((_d = Theme.palette) === null || _d === void 0 ? void 0 : _d.gray900); }};
  display: block;
  font-family: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontFamily) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.fontFamily) === null || _c === void 0 ? void 0 : _c.one) || ((_d = Theme.fontFamily) === null || _d === void 0 ? void 0 : _d.one); }};
  margin: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.margin) || "initial"; }};
`;
export const fontWeight = (props) => props.fontWeight || Theme.fontWeight.regular;
//# sourceMappingURL=shared.js.map