import React, { useMemo } from "react";
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
  ...props
}: SSSModalProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
      variant: "light" as const,
      style: { width, ...props.style },
    }),
    [props],
  );

  return (
    <>
      <BackgroundBlur open={props.open} />
      <Container theme={mergedProps.theme} open={props.open}>
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
};
