import React from "react";
import { AccordionProps } from "./types";
import { Filled } from "./variants/filled";
import { Standard } from "./variants/standard";

export const Accordion = (props: AccordionProps): React.ReactElement => {
  const variant = props.variant ?? "standard";

  if (variant === "standard") return <Standard {...props} />;
  if (variant === "filled") return <Filled {...props} />;

  return <Standard {...props} />;
};
