import React from "react";
import { ModalProps, Variants } from "./types";
import { ModalContainer } from "./styles/container";
import { Theme } from "../../shared/theme";
import { ModalBox } from "./styles/modal";
import { ModalHeader } from "./styles/header";
import { Typography } from "../typography";
import { XIcon } from "../icon";
import { CloseButtonContainer } from "./styles/closeContainer";

export const Modal = ({
  theme = Theme,
  title,
  content,
  open,
  onClose,
  variant = Variants["light"],
  style,
  className,
}: ModalProps) => {
  return (
    <ModalContainer open={open} onClick={onClose} className={className}>
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
          <CloseButtonContainer>
            <XIcon size="1rem" onClick={onClose} />
          </CloseButtonContainer>
        </ModalHeader>

        {content && content}
      </ModalBox>
    </ModalContainer>
  );
};
