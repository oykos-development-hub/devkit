import styled from "styled-components";
import { TypographyProps } from "./types";
import { shared } from "./styles/shared";

export const H1 = styled.h1<TypographyProps>`
  ${shared};
  font-weight: 700;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "6rem"};
  line-height: 7.5rem;
  letter-spacing: -0.015em;
`;

export const H2 = styled.h2<TypographyProps>`
  ${shared};
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "3.75rem"};
  font-weight: 700;
  line-height: 4.988rem;
  letter-spacing: -0.01em;
`;

export const H3 = styled.h3<TypographyProps>`
  ${shared};
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "3rem"};
  font-weight: 700;
  line-height: 3.99rem;
  letter-spacing: -0.005em;
`;

export const H4 = styled.h4<TypographyProps>`
  ${shared};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "2.125rem"};
  line-height: 2.563rem;
`;

export const H5 = styled.h5<TypographyProps>`
  ${shared};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1.5rem"};
  line-height: 1.875rem;
`;

export const H6 = styled.h6<TypographyProps>`
  ${shared};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1.25rem"};
  line-height: 1.625rem;
  letter-spacing: 0.0075em;
`;

export const Sub1 = styled.span<TypographyProps>`
  ${shared};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1rem"};
  line-height: 1.5rem;
  letter-spacing: 0.005em;
`;

export const Sub2 = styled.span<TypographyProps>`
  ${shared};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.875rem"};
  line-height: 1.25rem;
  letter-spacing: 0.005em;
`;

export const Body1 = styled.p<TypographyProps>`
  ${shared};
  font-weight: normal;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1rem"};
  line-height: 1.5rem;
  letter-spacing: 0.0168em;
`;

export const Body2 = styled.p<TypographyProps>`
  ${shared};
  font-weight: normal;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.875rem"};
  line-height: 1.25rem;
  letter-spacing: 0.0168em;
`;

export const Button = styled.span<TypographyProps>`
  ${shared};
  font-weight: 500;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "1rem"};
  line-height: 150%;
  letter-spacing: 0.05em;
`;

export const Caption = styled.label<TypographyProps>`
  ${shared};
  font-weight: normal;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.75rem"};
  line-height: 0.938rem;
  letter-spacing: 0.03em;
`;

export const Overline = styled.p<TypographyProps>`
  ${shared};
  font-weight: bold;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.625rem"};
  line-height: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const Error = styled.span<TypographyProps>`
  ${shared};
  font-weight: normal;
  font-size: ${(props: TypographyProps) => props.fontSize || props?.theme?.fontSize.md || "0.75rem"};
`;
