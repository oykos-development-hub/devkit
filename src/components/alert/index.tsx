import React from "react";
import { AlertProps, AlertSizes, AlertVariants } from "./types";
import { Content } from "./styles/content";
import { Container, Row } from "./styles/container";
import { XIcon } from "../icon";
import { Typography } from "../typography";
import { LeftIconContent } from "./styles/icon-content";

export const Alert: React.FC<AlertProps> = ({
  variant = AlertVariants.success,
  content,
  additionalText,
  closeIcon = true,
  onClose,
  size = AlertSizes.xs,
  style,
  theme,
}) => (
  <Container variant={variant} size={size} style={style} theme={theme}>
    <Row size={size}>
      <Content style={style}>
        <LeftIconContent variant={variant} size={size} />
        <Typography variant={"h6"} content={content} theme={theme} style={style} />
      </Content>

      {closeIcon && (
        <Content style={style}>
          <XIcon onClick={onClose} />
        </Content>
      )}
    </Row>

    {additionalText && (
      <Row size={size}>
        <Typography variant={"p"} content={additionalText} />
      </Row>
    )}
  </Container>
);
