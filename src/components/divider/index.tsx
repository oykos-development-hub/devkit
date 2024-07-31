import React, { useMemo } from "react";
import { Divider } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSDividerProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSDivider = (props: SSSDividerProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  return <Divider {...mergedProps} />;
};
