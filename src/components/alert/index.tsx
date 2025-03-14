import React from "react";
import { AlertProps } from "./types";
import { Content } from "./styles/content";
import { Container } from "./styles/container";
import { Wrapper } from "./styles/wrapper";
import { CloseIcon } from "../icon";
import { Typography } from "../typography";
import { Theme } from "../../shared/theme";

export const Alert: React.FC<AlertProps> = ({
  variant = "success",
  content,
  description,
  icon,
  closeIcon = true,
  onClose,
  size = "md",
  style,
  theme = Theme,
  className,
}) => {
  const textVariant = () => {
    switch (size) {
      case "sm":
        return "bodySmall";
      case "md":
        return "bodyMedium";
      case "lg":
        return "bodyLarge";
    }
  };

  return (
    <Container variant={variant} style={style} theme={theme} className={className}>
      <Wrapper size={size} theme={theme} variant={variant}>
        <Content theme={theme}>
          {icon && icon}
          <Typography variant={textVariant()} content={content} theme={theme} />
        </Content>

        {closeIcon && (
          <Content theme={theme} onClick={onClose}>
            <CloseIcon stroke={"white"} />
          </Content>
        )}
      </Wrapper>

      {description && description}
    </Container>
  );
};
