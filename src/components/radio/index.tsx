import React from "react";
import { RadioProps, RadioSize } from "./types";
import { Container } from "./styles/container";
import { Circle, Content, HiddenRadio, Icon } from "./styles/content";
import { Theme } from "../../shared/theme";

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  size = RadioSize.sm,
  onClick,
  style,
  theme = Theme,
  disabled = false,
}) => {
  return (
    <Container>
      <HiddenRadio checked={checked} />
      <Content checked={checked} onClick={onClick} size={size} style={style} theme={theme} disabled={disabled}>
        <Icon viewBox="0 0 24 24">
          <Circle style={style} theme={theme} disabled={disabled} />
        </Icon>
      </Content>
    </Container>
  );
};
