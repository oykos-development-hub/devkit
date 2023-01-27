import styled, { css } from "styled-components";
import { ButtonVariants, ButtonSize } from "./types";

export const Container = styled.button<{
  disabled: boolean;
  variant: ButtonVariants;
  size: ButtonSize;
}>(
  () =>
    ({
      theme: {
        palette: { primary100, primary700, secondary700, secondary100 },
      },
      disabled,
      variant,
      size,
    }) => {
      const background = {
        primary: disabled ? primary100 : primary700,
        secondary: 0,
        secondaryLight: secondary100,
        primaryLight: primary100,
        success: secondary700,
      };

      const borderColor = {
        primary: 0,
        secondary: disabled ? primary100 : primary700,
        secondaryLight: secondary100,
        primaryLight: primary100,
        success: secondary700,
      };

      const padding = {
        lg: "14.5px 14px",
        sm: "12.5px 24px",
        xs: "8px 14.5px",
        xxs: "5px 12px",
      };

      return css`
        align-items: center;
        justify-content: center;
        background-color: ${background[variant]};
        border-color: ${borderColor[variant]};
        border-width: 1px;
        border-radius: 4px;
        padding: ${padding[size]};
      `;
    },
);

export const Content = styled.div<{
  disabled: boolean;
  variant: ButtonVariants;
  size: ButtonSize;
}>(
  ({
    disabled,
    theme: {
      palette: { primary200, primary700, secondary200, primary900 },
    },
    size,
    variant,
  }) => {
    const textColor = {
      primary: disabled ? primary200 : "white",
      secondary: disabled ? primary200 : primary700,
      secondaryLight: secondary200,
      primaryLight: primary900,
      success: "white",
    };
    const fontSize = {
      sm: "16px",
      lg: "16px",
      xs: "14px",
      xxs: "12px",
    };

    return css`
      color: ${textColor[variant]};
      font-size: ${fontSize[size]};
    `;
  },
);
