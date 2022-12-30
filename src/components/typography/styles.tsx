import styled from "styled-components";
import { TypographyProps } from "./types";

export const H1 = styled.h1<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: 700;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "6rem"};
  line-height: 7.5rem;
  letter-spacing: -0.015em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const H2 = styled.h2<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "3.75rem"};
  font-weight: 700;
  line-height: 4.988rem;
  letter-spacing: -0.01em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const H3 = styled.h3<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "3rem"};
  font-weight: 700;
  line-height: 3.99rem;
  letter-spacing: -0.005em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const H4 = styled.h4<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "2.125rem"};
  line-height: 2.563rem;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const H5 = styled.h5<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1.5rem"};
  line-height: 1.875rem;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const H6 = styled.h6<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1.25rem"};
  line-height: 1.625rem;
  letter-spacing: 0.0075em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const Sub1 = styled.span<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1rem"};
  line-height: 1.5rem;
  letter-spacing: 0.005em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const Sub2 = styled.span<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.875rem"};
  line-height: 1.25rem;
  letter-spacing: 0.005em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const Body1 = styled.p<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: normal;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1rem"};
  line-height: 1.5rem;
  letter-spacing: 0.0168em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const Body2 = styled.p<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: normal;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.875rem"};
  line-height: 1.25rem;
  letter-spacing: 0.0168em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const Button = styled.span<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1rem"};
  line-height: 150%;
  letter-spacing: 0.05em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const Caption = styled.label<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: normal;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.75rem"};
  line-height: 0.938rem;
  letter-spacing: 0.03em;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const Overline = styled.p<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: bold;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.625rem"};
  line-height: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;

export const Error = styled.span<TypographyProps>`
  color: ${(props: TypographyProps) => props.color || props?.theme?.palette?.dark?.one || "#000"};
  display: block;
  font-family: ${(props: TypographyProps) => props.fontFamily || props?.theme?.fontFamily?.one || "serif"};
  font-weight: normal;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.75rem"};
  margin: ${(props: TypographyProps) => props.margin || "initial"};
`;
