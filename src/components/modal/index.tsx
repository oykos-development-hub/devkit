import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import { Modal } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSModalProps } from "./types";
import { Theme } from "../../shared/theme";
import Container from "./styles/container";
import Content from "./styles/content";
import { Footer, HelpText } from "./styles/footer";
import Controls from "./styles/controls";
import { SSSButton } from "../button";
import ContentWrapper from "./styles/contentWrapper";
import { BackgroundBlur } from "./styles/backgroundBlur";

export const SSSModal = ({
  footerText,
  leftButtonOnClick,
  leftButtonText = "Cancel",
  rightButtonOnClick,
  rightButtonText = "Save",
  width,
  buttonLoading,
  customModalContent,
  priority = 1, // Default priority
  ...props
}: SSSModalProps & { priority?: number }) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
      variant: "light" as const,
      style: { width, zIndex: 1000 + priority * 100, ...props.style }, // Adjust z-index based on priority
    }),
    [props, priority]
  );

  const modalContent = (
    <>
      <BackgroundBlur open={props.open} style={{ zIndex: 999 + priority * 100 }} />
      <Container theme={mergedProps.theme} open={props.open} style={{ zIndex: 1000 + priority * 100 }}>
        <Modal
          {...mergedProps}
          content={
            customModalContent ? (
              customModalContent
            ) : (
              <ContentWrapper>
                <Content>{props.content}</Content>
                <Footer theme={mergedProps.theme}>
                  <HelpText content={footerText} variant="bodySmall" />
                  {!props.customButtonsControls ? (
                    <Controls>
                      <SSSButton
                        content={leftButtonText}
                        onClick={leftButtonOnClick || mergedProps.onClose}
                        variant="secondary"
                      />
                      <SSSButton
                        content={rightButtonText}
                        onClick={rightButtonOnClick}
                        variant="primary"
                        isLoading={buttonLoading}
                      />
                    </Controls>
                  ) : (
                    props.customButtonsControls
                  )}
                </Footer>
              </ContentWrapper>
            )
          }
          outsideClickClose={false}
        />
      </Container>
    </>
  );

  // Render with React Portal for high-priority modals
  if (priority > 1) {
    return ReactDOM.createPortal(modalContent, document.body); // Render outside the DOM tree
  }

  return modalContent;
};
