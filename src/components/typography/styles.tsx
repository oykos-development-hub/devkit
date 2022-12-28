import styled from "styled-components";
import {TypographyProps} from "./types";


export const StyledTypographyH1 = styled.h1<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "red")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 96px;
  line-height: 120px;
  // -1.5% or -0.015em
  letter-spacing: -0.015em;
  margin: ${(props: TypographyProps) => (props.noMargins ? 0 : "initial")};
`;

export const StyledTypographyH2 = styled.h2<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "green")};
  display: block;
  font-family: Rubik, sans-serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 79.8px;
  letter-spacing: -0.01em;
  margin: ${(props: TypographyProps) => (props.noMargins ? 0 : "initial")};
`;

export const StyledTypographyH3 = styled.h3<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "yellow")};
  display: block;
  font-family: Rubik, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 63.84px;
  letter-spacing: -0.005em;
  margin: ${(props: TypographyProps) => (props.noMargins ? 0 : "initial")};
`;

export const StyledTypographyH4 = styled.h4<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "cyan")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 34px;
  line-height: 41px;
`;

export const StyledTypographyH5 = styled.h5<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "dark")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

export const StyledTypographyH6 = styled.h6<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "dark")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.0075em;
`;

export const StyledTypographySub1 = styled.span<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "dark")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
`;

export const StyledTypographySub2 = styled.span<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "dark")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.005em;
`;

export const StyledTypographyBody1 = styled.p<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "dark")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0168em;
`;

export const StyledTypographyBody2 = styled.p<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "dark")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0168em;
`;

export const StyledTypographyButton = styled.span<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "dark")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.05em;
`;

export const StyledTypographyCaption = styled.label<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "dark")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.03em;
`;

export const StyledTypographyOverline = styled.p<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "dark")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const StyledTypographyError = styled.span<TypographyProps>`
  color: ${(props: TypographyProps) => (props.color || "red")};
  display: block;
  font-family: Rubik, sans-serif;
  font-weight: normal;
  font-size: 12px;
`;