import React, { useMemo } from "react";
import { AccordionItem } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSAccordionProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSAccordion = (props: SSSAccordionProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  return <AccordionItem {...mergedProps} />;
};
