import React, { useMemo } from "react";
import { Breadcrumbs, ChevronRightIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSBreadcrumbsProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSBreadcrumbs = (props: SSSBreadcrumbsProps) => {
  const mergedProps = useMemo(
    () => ({
      ...props,
      theme: Theme,
    }),
    [props],
  );

  const { gray900 } = mergedProps.theme!.palette;

  return <Breadcrumbs {...mergedProps} separator={<ChevronRightIcon stroke={gray900 || "#000"} />} />;
};
