import React, { useMemo } from "react";
import { Badge } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSBadgeProps } from "./types";
import { Theme } from "../../shared/theme";
import StyledBadge from "./styles/styledBadge";

export const SSSBadge = (props: SSSBadgeProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  return <StyledBadge {...mergedProps} />;
};
