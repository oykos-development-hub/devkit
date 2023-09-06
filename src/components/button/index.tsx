import React from "react";
import { ButtonProps, ButtonSizes, ButtonVariants } from "./types";
import { Theme } from "../../shared/theme";
import { ButtonContainer, ButtonContent } from "./styles";

export const Button = ({
  onClick,
  content,
  customContent,
  disabled = false,
  variant = ButtonVariants.primary,
  size = ButtonSizes.lg,
  style,
  theme,
  className,
  type = "button",
  isLoading = false,
  loader,
}: ButtonProps) => {
  return (
    <ButtonContainer
      style={style}
      disabled={disabled}
      variant={variant}
      size={size}
      onClick={onClick}
      theme={theme || Theme}
      className={className}
      type={type}
      isLoading={isLoading}
    >
      {customContent ? (
        customContent
      ) : (
        <>
          <ButtonContent size={size} disabled={disabled} variant={variant} theme={theme || Theme} customStyle={style}>
            {content}
          </ButtonContent>
          {isLoading && !!loader && loader}
        </>
      )}
    </ButtonContainer>
  );
};
