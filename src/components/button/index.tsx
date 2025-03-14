import React, { useMemo } from "react";
import { SSSButtonProps } from "./types";
import { Theme } from "../../shared/theme";
import { StyledButton } from "./styles/styledButton";
import CircleLoader from "../loader/circleLoader";

export const SSSButton = (props: SSSButtonProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  return (
    <StyledButton
      {...mergedProps}
      loader={
        <CircleLoader
          width="16px"
          height="16px"
          color={mergedProps.variant === "primary" ? Theme.palette.white : Theme.palette.primary500}
        />
      }
    />
  );
};
