import React, { useEffect } from "react";
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
        return "bodyMedium";
    }
  };

  return (
    <Container variant={variant} style={style} theme={theme}>
      <Wrapper size={size}>
        <Content style={style} size={size} theme={theme}>
          {icon && icon}
          <Typography variant={textVariant()} content={content} theme={theme} style={style} />
        </Content>

        {closeIcon && (
          <Content style={style} size={size} theme={theme}>
            <XIcon onClick={onClose} />
          </Content>
        )}
      </Wrapper>

      {description && (
        <Wrapper size={size} style={{ paddingTop: 0 }}>
          <Content style={style} size={size} theme={theme}>
            <Typography variant={"bodyMedium"} content={description} theme={theme} style={style} />
          </Content>
        </Wrapper>
      )}
    </Container>
  );
};
