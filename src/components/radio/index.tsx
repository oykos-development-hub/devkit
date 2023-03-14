import React from "react";
import { RadioProps } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenRadio } from "./styles/content";
import { Theme } from "../../shared/theme";
import { CircleIcon } from "../icon";

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  size = "sm",
  onClick,
  style,
  theme = Theme,
  disabled = false,
}) => {
  return (
    <Container>
      <HiddenRadio checked={checked} />
      <Content checked={checked} onClick={onClick} size={size} style={style} theme={theme} disabled={disabled}>
        <CircleIcon />
      </Content>
    </Container>
  );
};
