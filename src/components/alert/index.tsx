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
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Wrapper size={size} theme={theme} variant={variant}>
          <Content size={size} theme={theme}>
            {icon && icon}
            <Typography variant={textVariant()} content={content} theme={theme} />
          </Content>

          {closeIcon && (
            <Content size={size} theme={theme}>
              <CloseIcon stroke={"white"} onClick={onClose} />
            </Content>
          )}
        </Wrapper>
      </div>

      {description && <div style={{ display: "flex" }}>{description}</div>}
    </Container>
  );
};
