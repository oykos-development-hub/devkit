import React, { useState } from "react";
import { CheckboxProps, CheckboxSize } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenCheckbox } from "./styles/content";
import { Theme } from "../../shared/theme";
import { CheckIcon } from "../icon";

export const Checkbox: React.FC<CheckboxProps> = ({
  size = CheckboxSize.sm,
  onClick,
  style,
  theme = Theme,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e: any) => {
    if (disabled) return;

    setIsChecked(!isChecked);
    onClick && onClick(e);
  };

  return (
    <Container>
      <HiddenCheckbox checked={isChecked} />
      <Content checked={isChecked} onClick={handleClick} size={size} style={style} theme={theme} disabled={disabled}>
        {isChecked && <CheckIcon stroke={disabled ? theme.palette.gray300 : theme.palette.white} />}
      </Content>
    </Container>
  );
};
