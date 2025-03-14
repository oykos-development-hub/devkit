import React from "react";
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
  checked,
  className,
}) => {
  const handleClick = (e: any) => {
    if (disabled) return;

    onClick && onClick(e);
  };

  return (
    <Container className={className}>
      <HiddenCheckbox defaultChecked={checked} />
      <Content checked={checked} onClick={handleClick} size={size} style={style} theme={theme} disabled={disabled}>
        {checked && <CheckIcon stroke={disabled ? theme!.palette.gray300 : "white"} />}
      </Content>
    </Container>
  );
};
