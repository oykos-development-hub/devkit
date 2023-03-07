import React from "react";
import { BadgeProps } from "./types";
import { Container } from "./styles/container";

export const Badge: React.FC<BadgeProps> = ({ variant = "primary", content, size = "md", style, theme }) => (
  <Container variant={variant} size={size} style={style} theme={theme}>
    {content}
  </Container>
);
