import styled from "styled-components";
import { TypographyProps } from "../types";
import { shared } from "./shared";
import { Theme } from "../../../shared/theme";

export const H1 = styled.h1<TypographyProps>`
  ${shared};
  font-weight: 800;
  font-size: ${(props: TypographyProps) =>
        props.style?.fontSize || props?.theme?.fontSize?.xxl || Theme?.fontSize?.xxl};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.xxl || Theme?.lineHeight?.xxl};
`;

export const H2 = styled.h2<TypographyProps>`
  ${shared};
  font-weight: 800;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.xl || Theme?.fontSize?.xl};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.xl || Theme?.lineHeight?.xl};
`;

export const H3 = styled.h3<TypographyProps>`
  ${shared};
  font-weight: 800;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.lg || Theme?.fontSize?.lg};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.lg || Theme?.lineHeight?.lg};
`;

export const H4 = styled.h4<TypographyProps>`
  ${shared};
  font-weight: 400;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.lg || Theme?.fontSize?.lg};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.lg || Theme?.lineHeight?.lg};
`;

export const H5 = styled.h5<TypographyProps>`
  ${shared};
  font-weight: 600;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.md || Theme?.fontSize?.md};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.md || Theme?.lineHeight?.md};
`;

export const H6 = styled.h6<TypographyProps>`
  ${shared};
  font-weight: 400;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.md || Theme?.fontSize?.md};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.md || Theme?.lineHeight?.md};
`;

export const Sub1 = styled.span<TypographyProps>`
  ${shared};
  font-weight: 600;
  font-style: italic;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.sm || Theme?.fontSize?.sm};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.sm || Theme?.lineHeight?.sm};
`;

export const Sub2 = styled.span<TypographyProps>`
  ${shared};
  font-style: italic;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.xs || Theme?.fontSize?.xs};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.xs || Theme?.lineHeight?.xs};
`;

export const Body1 = styled.p<TypographyProps>`
  ${shared};
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.sm || Theme?.fontSize?.sm};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.sm || Theme?.lineHeight?.sm};
`;

export const Body2 = styled.p<TypographyProps>`
  ${shared};
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.xs || Theme?.fontSize?.xs};
  line-height: ${(props: TypographyProps) =>
        props.style?.lineHeight || props?.theme?.lineHeight?.xs || Theme?.lineHeight?.xs};
`;

export const Button = styled.span<TypographyProps>`
  ${shared};
  font-weight: 600;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.sm || Theme?.fontSize?.sm};
  line-height: ${(props: TypographyProps) =>
        props.style?.fontSize || props?.theme?.fontSize?.sm || Theme?.fontSize?.sm};
  letter-spacing: -0.05rem;
`;

export const Caption = styled.label<TypographyProps>`
  ${shared};
  font-weight: 600;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.xs || Theme?.fontSize?.xs};
  line-height: ${(props: TypographyProps) =>
        props.style?.fontSize || props?.theme?.fontSize?.xs || Theme?.fontSize?.xs};
`;

export const Overline = styled.p<TypographyProps>`
  ${shared};
  font-weight: 600;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.md || Theme?.fontSize?.md};
  line-height: ${(props: TypographyProps) =>
        props.style?.fontSize || props?.theme?.fontSize?.md || Theme?.fontSize?.md};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

export const Error = styled.span<TypographyProps>`
  ${shared};
  font-weight: 600;
  font-size: ${(props: TypographyProps) => props.style?.fontSize || props?.theme?.fontSize?.md || Theme?.fontSize?.md};
  line-height: ${(props: TypographyProps) =>
        props.style?.fontSize || props?.theme?.fontSize?.md || Theme?.fontSize?.md};
  color: ${(props: TypographyProps) =>
        props.style?.color || props?.theme?.palette?.error500 || Theme?.palette?.error500};
`;
