import React, { useMemo } from "react";
import { Tabs } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSTabsProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSTabs = (props: SSSTabsProps) => {
  const mergedProps = useMemo(
    () => ({
      ...props,
      theme: Theme,
    }),
    [props],
  );

  return <Tabs {...mergedProps} />;
};
