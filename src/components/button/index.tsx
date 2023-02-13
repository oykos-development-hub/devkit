import React from "react";
import { ButtonProps, ButtonSizes, ButtonVariants } from "./types";
import { Container } from "./styles/container";
import { Content } from "./styles/content";
import { Theme } from "../../shared/theme";

export const Button = ({
  onClick,
  content,
  disabled = false,
  variant = ButtonVariants.primary,
  size = ButtonSizes.lg,
  style,
  theme,
}: ButtonProps) => {
  return (
    <Container style={style} disabled={disabled} variant={variant} size={size} onClick={onClick} theme={theme || Theme}>
      <Content size={size} disabled={disabled} variant={variant} theme={theme} customStyle={style}>
        {content}
      </Content>
    </Container>
  );
};
