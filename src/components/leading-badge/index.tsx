import React from "react";
import { LeadingBadgeProps } from "./types";
import { Container } from "./styles/container";
import { Badge } from "../badge";

export const LeadingBadge: React.FC<LeadingBadgeProps> = ({
  variant = "primary",
  content,
  badgeContent,
  size = "md",
  style,
  leadingBadgeTheme = "light",
  theme,
  className,
}) => (
  <Container
    variant={variant}
    size={size}
    style={style}
    leadingBadgeTheme={leadingBadgeTheme}
    theme={theme}
    className={className}
  >
    <Badge variant={variant} size={size} content={badgeContent} style={style} theme={theme} />
    {content}
  </Container>
);
