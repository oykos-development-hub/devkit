import React from "react";
import { ModalProps } from "./types";
import { Container } from "./styles/container";
import { Theme } from "../../shared/theme";
import { ModalBox } from "./styles/modal";
import { ModalHeader } from "./styles/header";
import { Typography } from "../typography";
import { XIcon } from "../icon";
import { ModalFooter } from "./styles/footer";

export const Modal = ({ theme = Theme, title, footerContent, content }: ModalProps) => {
  return (
    <Container theme={theme}>
      <ModalBox theme={theme}>
        <ModalHeader>
          <Typography content={title} variant="h6" />
          <XIcon size="16px" />
        </ModalHeader>
        {content}
        <ModalFooter>{footerContent}</ModalFooter>
      </ModalBox>
    </Container>
  );
};
