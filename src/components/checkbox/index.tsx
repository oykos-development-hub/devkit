import React from "react";
import { CheckboxProps, CheckboxSize } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenCheckbox } from "./styles/content";
import { Theme } from "../../shared/theme";
import { CheckIcon } from "../icon";

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
        {checked && <CheckIcon stroke={disabled ? theme.palette.gray300 : theme.palette.white} />}
      </Content>
    </Container>
  );
};
