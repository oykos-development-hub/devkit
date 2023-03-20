import React from "react";
import { AlertProps } from "./types";
import { Content } from "./styles/content";
import { Container } from "./styles/container";
import { Wrapper } from "./styles/wrapper";
import { XIcon } from "../icon";
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
    <Container variant={variant} style={style} theme={theme}>
      <Wrapper size={size}>
        <Content size={size} theme={theme}>
          {icon && icon}
          <Typography variant={textVariant()} content={content} theme={theme} />
        </Content>

        {closeIcon && (
          <Content size={size} theme={theme}>
            <XIcon onClick={onClose} />
          </Content>
        )}
      </Wrapper>

      {description && (
        <Wrapper size={size}>
          <Content size={size} theme={theme}>
            <Typography variant={"bodyMedium"} content={description} theme={theme} />
          </Content>
        </Wrapper>
      )}
    </Container>
  );
};
