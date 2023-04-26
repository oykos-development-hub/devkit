import styled from "styled-components";
import { shared } from "./shared";
import { Theme } from "../../../shared/theme";
export const H1 = styled.h1 `
  ${shared};
  letter-spacing: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.letterSpacing) || "-0.075rem"; }};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "700"; }};
  font-size: ${(props) => { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.h1) || Theme.typographyFontSize.h1; }};
  line-height: ${(props) => { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.h1) || Theme.typographyLineHeight.h1; }};
`;
export const H2 = styled.h2 `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "700"; }};
  letter-spacing: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.letterSpacing) || "-0.05rem"; }};
  font-size: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.h2) || ((_d = Theme.typographyFontSize) === null || _d === void 0 ? void 0 : _d.h2); }};
  line-height: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.h2) || ((_d = Theme.typographyLineHeight) === null || _d === void 0 ? void 0 : _d.h2); }};
`;
export const H3 = styled.h3 `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "700"; }};
  letter-spacing: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.letterSpacing) || "-0.025rem"; }};
  font-size: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.h3) || ((_d = Theme.typographyFontSize) === null || _d === void 0 ? void 0 : _d.h3); }};
  line-height: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.h3) || ((_d = Theme.typographyLineHeight) === null || _d === void 0 ? void 0 : _d.h3); }};
`;
export const H4 = styled.h4 `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "700"; }};
  font-size: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.h4) || ((_d = Theme.typographyFontSize) === null || _d === void 0 ? void 0 : _d.h4); }};
  line-height: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.h4) || ((_d = Theme.typographyLineHeight) === null || _d === void 0 ? void 0 : _d.h4); }};
`;
export const H5 = styled.h5 `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "700"; }};
  font-size: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.h5) || ((_d = Theme.typographyFontSize) === null || _d === void 0 ? void 0 : _d.h5); }};
  line-height: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.h5) || ((_d = Theme.typographyLineHeight) === null || _d === void 0 ? void 0 : _d.h5); }};
`;
export const H6 = styled.h6 `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "700"; }};
  font-size: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.h6) || ((_d = Theme.typographyFontSize) === null || _d === void 0 ? void 0 : _d.h6); }};
  line-height: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.h6) || ((_d = Theme.typographyLineHeight) === null || _d === void 0 ? void 0 : _d.h6); }};
`;
export const BodyLarge = styled.p `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "400"; }};
  font-size: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d.lg) || ((_f = (_e = Theme.typographyFontSize) === null || _e === void 0 ? void 0 : _e.body) === null || _f === void 0 ? void 0 : _f.lg); }};
  line-height: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d.lg) || ((_f = (_e = Theme.typographyLineHeight) === null || _e === void 0 ? void 0 : _e.body) === null || _f === void 0 ? void 0 : _f.lg); }};
`;
export const BodyMedium = styled.p `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "400"; }};
  font-size: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d.md) || ((_f = (_e = Theme.typographyFontSize) === null || _e === void 0 ? void 0 : _e.body) === null || _f === void 0 ? void 0 : _f.md); }};
  line-height: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d.md) || ((_f = (_e = Theme.typographyLineHeight) === null || _e === void 0 ? void 0 : _e.body) === null || _f === void 0 ? void 0 : _f.md); }};
`;
export const BodySmall = styled.p `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "400"; }};
  font-size: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d.sm) || ((_f = (_e = Theme.typographyFontSize) === null || _e === void 0 ? void 0 : _e.body) === null || _f === void 0 ? void 0 : _f.sm); }};
  line-height: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d.sm) || ((_f = (_e = Theme.typographyLineHeight) === null || _e === void 0 ? void 0 : _e.body) === null || _f === void 0 ? void 0 : _f.sm); }};
`;
export const LinkLarge = styled.span `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "400"; }};
  text-decoration: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.textDecoration) || "underline"; }};
  font-size: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.link) === null || _d === void 0 ? void 0 : _d.lg) || ((_f = (_e = Theme.typographyFontSize) === null || _e === void 0 ? void 0 : _e.link) === null || _f === void 0 ? void 0 : _f.lg); }};
  line-height: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.link) === null || _d === void 0 ? void 0 : _d.lg) || ((_f = (_e = Theme.typographyLineHeight) === null || _e === void 0 ? void 0 : _e.link) === null || _f === void 0 ? void 0 : _f.lg); }};
`;
export const LinkMedium = styled.span `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "400"; }};
  text-decoration: underline;
  font-size: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.link) === null || _d === void 0 ? void 0 : _d.md) || ((_f = (_e = Theme.typographyFontSize) === null || _e === void 0 ? void 0 : _e.link) === null || _f === void 0 ? void 0 : _f.md); }};
  line-height: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.link) === null || _d === void 0 ? void 0 : _d.md) || ((_f = (_e = Theme.typographyLineHeight) === null || _e === void 0 ? void 0 : _e.link) === null || _f === void 0 ? void 0 : _f.md); }};
`;
export const LinkSmall = styled.span `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "400"; }};
  text-decoration: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.textDecoration) || "underline"; }};
  font-size: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.link) === null || _d === void 0 ? void 0 : _d.sm) || ((_f = (_e = Theme.typographyFontSize) === null || _e === void 0 ? void 0 : _e.link) === null || _f === void 0 ? void 0 : _f.sm); }};
  line-height: ${(props) => { var _a, _b, _c, _d, _e, _f; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.link) === null || _d === void 0 ? void 0 : _d.sm) || ((_f = (_e = Theme.typographyLineHeight) === null || _e === void 0 ? void 0 : _e.link) === null || _f === void 0 ? void 0 : _f.sm); }};
`;
export const Caption = styled.label `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "600"; }};
  letter-spacing: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.letterSpacing) || "0.025rem"; }};
  text-transform: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.textTransform) || "uppercase"; }};
  font-size: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.caption) || ((_d = Theme.typographyFontSize) === null || _d === void 0 ? void 0 : _d.caption); }};
  line-height: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.caption) || ((_d = Theme.typographyLineHeight) === null || _d === void 0 ? void 0 : _d.caption); }};
`;
export const HelperText = styled.span `
  ${shared};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "400"; }};
  font-size: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.helperText) || ((_d = Theme.typographyFontSize) === null || _d === void 0 ? void 0 : _d.helperText); }};
  line-height: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.helperText) || ((_d = Theme.typographyLineHeight) === null || _d === void 0 ? void 0 : _d.helperText); }};
`;
export const Code = styled.span `
  display: block;
  color: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.gray900) || ((_d = Theme.palette) === null || _d === void 0 ? void 0 : _d.gray900); }};
  font-family: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontFamily) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.fontFamily) === null || _c === void 0 ? void 0 : _c.three) || ((_d = Theme.fontFamily) === null || _d === void 0 ? void 0 : _d.three); }};
  font-weight: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontWeight) || "400"; }};
  font-size: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyFontSize) === null || _c === void 0 ? void 0 : _c.code) || ((_d = Theme.typographyFontSize) === null || _d === void 0 ? void 0 : _d.code); }};
  line-height: ${(props) => { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.typographyLineHeight) === null || _c === void 0 ? void 0 : _c.code) || ((_d = Theme.typographyLineHeight) === null || _d === void 0 ? void 0 : _d.code); }};
`;
//# sourceMappingURL=variants.js.map