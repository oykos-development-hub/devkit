import React from "react";
import { ButtonProps } from "./types";
import { Container, Content } from "./styles";

const Button = ({
  onClick,
  content,
  disabled = false,
  variant = "primary",
  size = "lg",
  style,
  theme,
}: ButtonProps) => {
  return (
    <Container style={style} disabled={disabled} variant={variant} size={size} onClick={onClick} theme={theme}>
      <Content size={size} disabled={disabled} variant={variant} theme={theme}>
        {content}
      </Content>
    </Container>
  );
};

export default Button;
