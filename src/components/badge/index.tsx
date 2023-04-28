import React from "react";
import { BadgeProps } from "./types";
import { Container } from "./styles/container";

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  content,
  leftSlot,
  rightSlot,
  size = "md",
  style,
  theme,
  className,
}) => (
  <Container variant={variant} size={size} style={style} theme={theme} className={className}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {leftSlot && <div style={{ marginRight: "7px", display: "flex" }}>{leftSlot}</div>}
      <div>{content}</div>
      {rightSlot && <div style={{ marginLeft: "7px", display: "flex" }}>{rightSlot}</div>}
    </div>
  </Container>
);
