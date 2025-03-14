import React, { useCallback, useMemo } from "react";
import { Typography, TypographyVariants } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSTypographyProps } from "./types";
import { GlobalStyle, Theme } from "../../shared/theme";

export const SSSTypography = (props: SSSTypographyProps) => {
  const fontToUse = useCallback(() => {
    switch (props.variant) {
      case TypographyVariants.h1:
      case TypographyVariants.h2:
      case TypographyVariants.h3:
      case TypographyVariants.h4:
      case TypographyVariants.h5:
      case TypographyVariants.h6:
        return Theme?.fontFamily?.one;

      default:
        return Theme?.fontFamily?.two;
    }
  }, [props.variant]);
  const fontFamily = fontToUse();

  const mergedProps = useMemo(
    () => ({
      ...props,
      theme: Theme,
      style: { ...props.style, fontFamily: fontFamily },
    }),
    [props],
  );

  return (
    <>
      <GlobalStyle />
      <Typography {...mergedProps} />
    </>
  );
};
