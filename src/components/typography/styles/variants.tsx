import styled from "styled-components";
import { TypographyProps } from "../types";
import { fontSize, fontWeight, shared, themeToUse } from "./shared";

export const H1 = styled.h1<TypographyProps>`
  ${shared};
  letter-spacing: ${(props: TypographyProps) => props.style?.letterSpacing || "-0.075rem"};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "700"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.h1};
  line-height: ${(props: TypographyProps) => props.style?.lineHeight || themeToUse(props).typographyLineHeight?.h1};
`;

export const H2 = styled.h2<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "700"};
  letter-spacing: ${(props: TypographyProps) => props.style?.letterSpacing || "-0.05rem"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.h2};
  line-height: ${(props: TypographyProps) => props.style?.lineHeight || themeToUse(props).typographyLineHeight?.h2};
`;

export const H3 = styled.h3<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "700"};
  letter-spacing: ${(props: TypographyProps) => props.style?.letterSpacing || "-0.025rem"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.h3};
  line-height: ${(props: TypographyProps) => props.style?.lineHeight || themeToUse(props).typographyLineHeight?.h3};
`;

export const H4 = styled.h4<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "700"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.h4};
  line-height: ${(props: TypographyProps) => props.style?.lineHeight || themeToUse(props).typographyLineHeight?.h4};
`;

export const H5 = styled.h5<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "700"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.h5};
  line-height: ${(props: TypographyProps) => props.style?.lineHeight || themeToUse(props).typographyLineHeight?.h5};
`;

export const H6 = styled.h6<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "700"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.h6};
  line-height: ${(props: TypographyProps) => props.style?.lineHeight || themeToUse(props).typographyLineHeight?.h6};
`;

export const BodyLarge = styled.p<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "400"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.body?.lg};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || themeToUse(props).typographyLineHeight?.body?.lg};
`;

export const BodyMedium = styled.p<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "400"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.body?.md};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || themeToUse(props).typographyLineHeight?.body?.md};
`;

export const BodySmall = styled.p<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "400"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.body?.sm};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || themeToUse(props).typographyLineHeight?.body?.sm};
`;

export const LinkLarge = styled.span<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "400"};
  text-decoration: ${(props: TypographyProps) => props.style?.textDecoration || "underline"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.link?.lg};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || themeToUse(props).typographyLineHeight?.link?.lg};
`;

export const LinkMedium = styled.span<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "400"};
  text-decoration: underline;
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.link?.md};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || themeToUse(props).typographyLineHeight?.link?.md};
`;

export const LinkSmall = styled.span<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "400"};
  text-decoration: ${(props: TypographyProps) => props.style?.textDecoration || "underline"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.link?.sm};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || themeToUse(props).typographyLineHeight?.link?.sm};
`;

export const Caption = styled.label<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "600"};
  letter-spacing: ${(props: TypographyProps) => props.style?.letterSpacing || "0.025rem"};
  text-transform: ${(props: TypographyProps) => props.style?.textTransform || "uppercase"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.caption};
  line-height: ${(props: TypographyProps) => props.style?.fontSize || themeToUse(props).typographyLineHeight?.caption};
`;

export const HelperText = styled.span<TypographyProps>`
  ${shared};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "400"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.helperText};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || themeToUse(props).typographyLineHeight?.helperText};
`;

export const Code = styled.span<TypographyProps>`
  display: block;
  color: ${(props: TypographyProps) => props.style?.color || themeToUse(props).palette?.gray900};
  font-family: ${(props: TypographyProps) => props.style?.fontFamily || themeToUse(props).fontFamily?.three};
  font-weight: ${(props: TypographyProps) => fontWeight(props) || "400"};
  font-size: ${(props: TypographyProps) => fontSize(props) || themeToUse(props).typographyFontSize?.code};
  line-height: ${(props: TypographyProps) => props.style?.fontSize || themeToUse(props).typographyLineHeight?.code};
`;
