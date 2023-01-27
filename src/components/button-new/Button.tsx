import React from "react";
import { ButtonProps } from "./types";
import { Container, Content } from "./styles";

const Button = ({ onClick, content, disabled = false, variant = "primary", size = "lg", style }: ButtonProps) => {
  return (
    <Container style={style} disabled={disabled} variant={variant} size={size} onClick={onClick}>
      <Content size={size} disabled={disabled} variant={variant}>
        {content}
      </Content>
    </Container>
  );
};

export default Button;
