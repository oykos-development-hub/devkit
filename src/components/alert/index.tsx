import React from "react";
import { AlertProps, AlertSizes, AlertVariants } from "./types";
import { Content } from "./styles/content";
import { Container, Row } from "./styles/container";
import { XIcon } from "../icon";
import { Typography } from "../typography";
import { Theme } from "../../shared/theme";

export const Alert: React.FC<AlertProps> = ({
  variant = AlertVariants.success,
  content,
  additionalText,
  icon,
  closeIcon = true,
  onClose,
  size = AlertSizes.md,
  style,
  theme = Theme,
}) => (
  <Container variant={variant} style={style} theme={theme}>
    <Row size={size}>
      <Content style={style} size={size} theme={theme}>
        {icon && icon}
        <Typography content={content} theme={theme} style={style} />
      </Content>

      {closeIcon && (
        <Content style={style} size={size} theme={theme}>
          <XIcon onClick={onClose} />
        </Content>
      )}
    </Row>

    {additionalText && (
      <Row size={size}>
        <Content style={style} size={size} theme={theme}>
          <Typography content={additionalText} theme={theme} style={style} />
        </Content>
      </Row>
    )}
  </Container>
);
