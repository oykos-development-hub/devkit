import React from "react";
import { RadioProps } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenRadio } from "./styles/content";
import { Theme } from "../../shared/theme";
import CircleIcon from "../icon/variations/CircleIcon";

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  size = "sm",
  onClick,
  style,
  theme = Theme,
  disabled = false,
}) => {
  const handleClick = (e: any) => {
    if (disabled) return;

    onClick && onClick(e);
  };

  return (
    <Container>
      <HiddenRadio checked={checked} />
      <Content checked={checked} onClick={handleClick} size={size} style={style} theme={theme} disabled={disabled}>
        <CircleIcon
          fill={disabled ? theme!.palette.gray300 : theme!.palette.primary500}
          stroke={disabled ? theme!.palette.gray300 : theme!.palette.primary500}
        />
      </Content>
    </Container>
  );
};
