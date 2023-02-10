import React from "react";
import { CheckboxProps, CheckboxSize } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenCheckbox, Icon } from "./styles/content";
import { Theme } from "../../shared/theme";

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  size = CheckboxSize.sm,
  onClick,
  style,
  theme = Theme,
  disabled = false,
}) => {
  return (
    <Container>
      <HiddenCheckbox checked={checked} />
      <Content checked={checked} onClick={onClick} size={size} style={style} theme={theme} disabled={disabled}>
        <Icon viewBox="0 0 24 24" theme={theme} disabled={disabled}>
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </Content>
    </Container>
  );
};
