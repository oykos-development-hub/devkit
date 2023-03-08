import React from "react";
import { DividerProps } from "./types";
import { Container } from "./styles/container";
import { Theme } from "../../shared/theme";

export const Divider: React.FC<DividerProps> = ({ width, height, color, style, theme = Theme }) => {
  return <Container width={width} height={height} color={color} style={style} theme={theme} />;
};
