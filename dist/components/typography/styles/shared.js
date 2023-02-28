import { css } from "styled-components";
import { Theme } from "../../../shared/theme";
export const themeToUse = (props) => props.theme || Theme;
export const fontSize = (props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || props.fontSize; };
export const fontWeight = (props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || props.fontWeight; };
export const shared = css `
  display: block;
  color: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_b = themeToUse(props).palette) === null || _b === void 0 ? void 0 : _b.gray900); }};
  font-family: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontFamily) || props.fontFamily || ((_b = themeToUse(props).fontFamily) === null || _b === void 0 ? void 0 : _b.one); }};
`;
//# sourceMappingURL=shared.js.map