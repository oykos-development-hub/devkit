import React, { useState } from "react";
import { RadioProps } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenRadio } from "./styles/content";
import { Theme } from "../../shared/theme";
import { CircleIcon } from "../icon";

export const Radio: React.FC<RadioProps> = ({ size = "sm", onClick, style, theme = Theme, disabled = false }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e: any) => {
    if (disabled) return;

    setIsChecked(!isChecked);
    onClick && onClick(e);
  };

  return (
    <Container>
      <HiddenRadio checked={isChecked} />
      <Content checked={isChecked} onClick={handleClick} size={size} style={style} theme={theme} disabled={disabled}>
        <CircleIcon />
      </Content>
    </Container>
  );
};
