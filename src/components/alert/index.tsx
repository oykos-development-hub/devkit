import React from "react";
import { AlertProps, AlertSizes, AlertVariants } from "./types";
import { Content } from "./styles/content";
import { Container } from "./styles/container";

export const Alert: React.FC<AlertProps> = ({
  variant = AlertVariants.primary,
  content,
  additionalText,
  closeIcon,
  size = AlertSizes.lg,
  style,
  theme,
}) => (
  <Container variant={variant} size={size} style={style} theme={theme}>
    <Content
      variant={variant}
      content={content}
      size={size}
      additionalText={additionalText}
      closeIcon={closeIcon}
      style={style}
    />
  </Container>
);
