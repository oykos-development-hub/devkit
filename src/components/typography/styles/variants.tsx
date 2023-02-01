import styled from "styled-components";
import { TypographyProps } from "../types";
import { shared } from "./shared";
import { Theme } from "../../../shared/theme";

export const H1 = styled.h1<TypographyProps>`
  ${shared};
  font-weight: bold;
  letter-spacing: -0.075rem;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.h1 || Theme?.typographyFontSize?.h1};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.h1 || Theme?.typographyLineHeight?.h1};
`;

export const H2 = styled.h2<TypographyProps>`
  ${shared};
  font-weight: bold;
  letter-spacing: -0.05rem;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.h2 || Theme?.typographyFontSize?.h2};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.h2 || Theme?.typographyLineHeight?.h2};
`;

export const H3 = styled.h3<TypographyProps>`
  ${shared};
  font-weight: bold;
  letter-spacing: -0.025rem;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.h3 || Theme?.typographyFontSize?.h3};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.h3 || Theme?.typographyLineHeight?.h3};
`;

export const H4 = styled.h4<TypographyProps>`
  ${shared};
  font-weight: bold;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.h4 || Theme?.typographyFontSize?.h4};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.h4 || Theme?.typographyLineHeight?.h4};
`;

export const H5 = styled.h5<TypographyProps>`
  ${shared};
  font-weight: bold;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.h5 || Theme?.typographyFontSize?.h5};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.h5 || Theme?.typographyLineHeight?.h5};
`;

export const H6 = styled.h6<TypographyProps>`
  ${shared};
  font-weight: bold;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.h6 || Theme?.typographyFontSize?.h6};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.h6 || Theme?.typographyLineHeight?.h6};
`;

export const BodyLarge = styled.p<TypographyProps>`
  ${shared};
  font-weight: normal;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.body?.lg || Theme?.typographyFontSize?.body?.lg};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.body?.lg || Theme?.typographyLineHeight?.body?.lg};
`;

export const BodyMedium = styled.p<TypographyProps>`
  ${shared};
  font-weight: normal;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.body?.md || Theme?.typographyFontSize?.body?.md};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.body?.md || Theme?.typographyLineHeight?.body?.md};
`;

export const BodySmall = styled.p<TypographyProps>`
  ${shared};
  font-weight: normal;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.body?.sm || Theme?.typographyFontSize?.body?.sm};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.body?.sm || Theme?.typographyLineHeight?.body?.sm};
`;

export const BodyLargeSemiBold = styled.p<TypographyProps>`
  ${shared};
  font-weight: 600;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.body?.lg || Theme?.typographyFontSize?.body?.lg};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.body?.lg || Theme?.typographyLineHeight?.body?.lg};
`;

export const BodyMediumSemiBold = styled.p<TypographyProps>`
  ${shared};
  font-weight: 600;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.body?.md || Theme?.typographyFontSize?.body?.md};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.body?.md || Theme?.typographyLineHeight?.body?.md};
`;

export const BodySmallSemiBold = styled.p<TypographyProps>`
  ${shared};
  font-weight: 600;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.body?.sm || Theme?.typographyFontSize?.body?.sm};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.body?.sm || Theme?.typographyLineHeight?.body?.sm};
`;

export const LinkLarge = styled.p<TypographyProps>`
  ${shared};
  font-weight: normal;
  text-decoration: underline;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.link?.lg || Theme?.typographyFontSize?.link?.lg};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.link?.lg || Theme?.typographyLineHeight?.link?.lg};
`;

export const LinkMedium = styled.p<TypographyProps>`
  ${shared};
  font-weight: normal;
  text-decoration: underline;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.link?.md || Theme?.typographyFontSize?.link?.md};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.link?.md || Theme?.typographyLineHeight?.link?.md};
`;

export const LinkSmall = styled.p<TypographyProps>`
  ${shared};
  font-weight: normal;
  text-decoration: underline;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.link?.sm || Theme?.typographyFontSize?.link?.sm};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.link?.sm || Theme?.typographyLineHeight?.link?.sm};
`;

export const LinkLargeSemiBold = styled.p<TypographyProps>`
  ${shared};
  font-weight: 600;
  text-decoration: underline;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.link?.lg || Theme?.typographyFontSize?.link?.lg};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.link?.lg || Theme?.typographyLineHeight?.link?.lg};
`;

export const LinkMediumSemiBold = styled.p<TypographyProps>`
  ${shared};
  font-weight: 600;
  text-decoration: underline;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.link?.md || Theme?.typographyFontSize?.link?.md};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.link?.md || Theme?.typographyLineHeight?.link?.md};
`;

export const LinkSmallSemiBold = styled.p<TypographyProps>`
  ${shared};
  font-weight: 600;
  text-decoration: underline;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.link?.sm || Theme?.typographyFontSize?.link?.sm};
  line-height: ${(props: TypographyProps) =>
    props.style?.lineHeight || props?.theme?.typographyLineHeight?.link?.sm || Theme?.typographyLineHeight?.link?.sm};
`;

export const Caption = styled.label<TypographyProps>`
  ${shared};
  font-weight: 600;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.caption || Theme?.typographyFontSize?.caption};
  line-height: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyLineHeight?.caption || Theme?.typographyLineHeight?.caption};
`;

export const HelperText = styled.span<TypographyProps>`
  ${shared};
  font-weight: normal;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.helperText || Theme?.typographyFontSize?.helperText};
  line-height: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyLineHeight?.helperText || Theme?.typographyLineHeight?.helperText};
`;

export const Code = styled.span<TypographyProps>`
  color: ${(props: TypographyProps) =>
    props.style?.color || props?.theme?.palette?.dark?.one || Theme.palette?.dark?.one};
  display: block;
  font-family: ${(props: TypographyProps) =>
    props.style?.fontFamily || props.theme?.fontFamily?.three || Theme.fontFamily?.three};
  margin: ${(props: TypographyProps) => props.style?.margin || "initial"};
  font-weight: normal;
  font-size: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyFontSize?.code || Theme?.typographyFontSize?.code};
  line-height: ${(props: TypographyProps) =>
    props.style?.fontSize || props?.theme?.typographyLineHeight?.code || Theme?.typographyLineHeight?.code};
`;
