import React from "react";
import { ModalProps } from "./types";
import { Container } from "./styles/container";
import { Theme } from "../../shared/theme";
import { ModalBox } from "./styles/modal";
import { ModalHeader } from "./styles/header";
import { Typography } from "../typography";
import { XIcon } from "../icon";

export const Modal = ({ theme = Theme, title, content, open, onClose, variant = "light", style }: ModalProps) => {
  return (
    <Container open={open} onClick={onClose && onClose()}>
      <ModalBox
        theme={theme}
        variant={variant}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={style}
      >
        <ModalHeader theme={theme}>
          {title && <Typography content={title} variant="h6" />}
          <XIcon size="16px" onClick={onClose && onClose()} />
        </ModalHeader>
        {content}
      </ModalBox>
    </Container>
  );
};
