import React from "react";
import { InputProps } from "./types";
import { Outlined } from "./variants/outlined";
import { Standard } from "./variants/standard";

export const Input = (props: InputProps): React.ReactElement => {
  const variant = props.variant ?? "outlined";

  if (variant === "outlined") return <Outlined {...props} />;
  if (variant === "standard") return <Standard {...props} />;

  return <Outlined {...props} />;
};
