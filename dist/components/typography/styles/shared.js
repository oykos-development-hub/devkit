import { css } from "styled-components";
import { Theme } from "../../../shared/theme";
export const shared = css `
  display: block;
  color: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.gray900) || ((_d = Theme.palette) === null || _d === void 0 ? void 0 : _d.gray900); }};
  font-family: ${(props) => { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontFamily) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.fontFamily) === null || _c === void 0 ? void 0 : _c.one) || Theme.fontFamily.one; }};
`;
//# sourceMappingURL=shared.js.map