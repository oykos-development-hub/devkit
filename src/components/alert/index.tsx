import React from "react";
import { AlertProps, AlertSizes, AlertVariants } from "./types";
import { LeftContent, RightContent } from "./styles/content";
import { Container, Row } from "./styles/container";
import { XIcon } from "../icon";
import { Typography } from "../typography";

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
      <LeftContent variant={variant} content={content} size={size} style={style} theme={theme} />

      {closeIcon && (
        <RightContent style={style}>
          <XIcon onClick={onClose} />
        </RightContent>
      )}
    </Row>

    {additionalText && (
      <Row size={size}>
        <Typography variant={"p"} content={additionalText} />
      </Row>
    )}
  </Container>
);
