import React, { useMemo } from "react";
import { Checkbox } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSCheckboxProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSCheckbox = (props: SSSCheckboxProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  return <Checkbox {...mergedProps} onClick={(e) => mergedProps.onChange(!mergedProps.checked, e)} />;
};
