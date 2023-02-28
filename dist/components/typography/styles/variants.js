import styled from "styled-components";
import { fontSize, fontWeight, shared, themeToUse } from "./shared";
export const H1 = styled.h1 `
  ${shared};
  letter-spacing: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.letterSpacing) || "-0.075rem"; }};
  font-weight: ${(props) => fontWeight(props) || "700"};
  font-size: ${(props) => { var _a; return fontSize(props) || ((_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.h1); }};
  line-height: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.h1); }};
`;
export const H2 = styled.h2 `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "700"};
  letter-spacing: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.letterSpacing) || "-0.05rem"; }};
  font-size: ${(props) => { var _a; return fontSize(props) || ((_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.h2); }};
  line-height: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.h2); }};
`;
export const H3 = styled.h3 `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "700"};
  letter-spacing: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.letterSpacing) || "-0.025rem"; }};
  font-size: ${(props) => { var _a; return fontSize(props) || ((_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.h3); }};
  line-height: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.h3); }};
`;
export const H4 = styled.h4 `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "700"};
  font-size: ${(props) => { var _a; return fontSize(props) || ((_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.h4); }};
  line-height: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.h4); }};
`;
export const H5 = styled.h5 `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "700"};
  font-size: ${(props) => { var _a; return fontSize(props) || ((_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.h5); }};
  line-height: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.h5); }};
`;
export const H6 = styled.h6 `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "700"};
  font-size: ${(props) => { var _a; return fontSize(props) || ((_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.h6); }};
  line-height: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.h6); }};
`;
export const BodyLarge = styled.p `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "400"};
  font-size: ${(props) => { var _a, _b; return fontSize(props) || ((_b = (_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.lg); }};
  line-height: ${(props) => { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c.lg); }};
`;
export const BodyMedium = styled.p `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "400"};
  font-size: ${(props) => { var _a, _b; return fontSize(props) || ((_b = (_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.md); }};
  line-height: ${(props) => { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c.md); }};
`;
export const BodySmall = styled.p `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "400"};
  font-size: ${(props) => { var _a, _b; return fontSize(props) || ((_b = (_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.sm); }};
  line-height: ${(props) => { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c.sm); }};
`;
export const LinkLarge = styled.span `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "400"};
  text-decoration: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.textDecoration) || "underline"; }};
  font-size: ${(props) => { var _a, _b; return fontSize(props) || ((_b = (_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.link) === null || _b === void 0 ? void 0 : _b.lg); }};
  line-height: ${(props) => { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.link) === null || _c === void 0 ? void 0 : _c.lg); }};
`;
export const LinkMedium = styled.span `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "400"};
  text-decoration: underline;
  font-size: ${(props) => { var _a, _b; return fontSize(props) || ((_b = (_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.link) === null || _b === void 0 ? void 0 : _b.md); }};
  line-height: ${(props) => { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.link) === null || _c === void 0 ? void 0 : _c.md); }};
`;
export const LinkSmall = styled.span `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "400"};
  text-decoration: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.textDecoration) || "underline"; }};
  font-size: ${(props) => { var _a, _b; return fontSize(props) || ((_b = (_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.link) === null || _b === void 0 ? void 0 : _b.sm); }};
  line-height: ${(props) => { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_c = (_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.link) === null || _c === void 0 ? void 0 : _c.sm); }};
`;
export const Caption = styled.label `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "600"};
  letter-spacing: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.letterSpacing) || "0.025rem"; }};
  text-transform: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.textTransform) || "uppercase"; }};
  font-size: ${(props) => { var _a; return fontSize(props) || ((_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.caption); }};
  line-height: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.caption); }};
`;
export const HelperText = styled.span `
  ${shared};
  font-weight: ${(props) => fontWeight(props) || "400"};
  font-size: ${(props) => { var _a; return fontSize(props) || ((_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.helperText); }};
  line-height: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.helperText); }};
`;
export const Code = styled.span `
  display: block;
  color: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_b = themeToUse(props).palette) === null || _b === void 0 ? void 0 : _b.gray900); }};
  font-family: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontFamily) || ((_b = themeToUse(props).fontFamily) === null || _b === void 0 ? void 0 : _b.three); }};
  font-weight: ${(props) => fontWeight(props) || "400"};
  font-size: ${(props) => { var _a; return fontSize(props) || ((_a = themeToUse(props).typographyFontSize) === null || _a === void 0 ? void 0 : _a.code); }};
  line-height: ${(props) => { var _a, _b; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontSize) || ((_b = themeToUse(props).typographyLineHeight) === null || _b === void 0 ? void 0 : _b.code); }};
`;
//# sourceMappingURL=variants.js.map