import React, { useMemo } from "react";
import { Alert } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSAlertProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSAlert = (props: SSSAlertProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  return <Alert {...mergedProps} style={{ zIndex: "999" }} />;
};
