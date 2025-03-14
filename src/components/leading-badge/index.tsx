import React, { useMemo } from "react";
import { LeadingBadge } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSLeadingBadgeProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSLeadingBadge = (props: SSSLeadingBadgeProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  return <LeadingBadge {...mergedProps} />;
};
