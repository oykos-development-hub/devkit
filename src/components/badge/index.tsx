import React from "react";
import { BadgeProps } from "./types";
import { Container } from "./styles/container";

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  content,
  extraContent,
  size = "md",
  style,
  theme,
}) => (
  <Container variant={variant} size={size} style={style} theme={theme}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        columnGap: "7px",
      }}
    >
      {extraContent}
      {content}
    </div>
  </Container>
);
