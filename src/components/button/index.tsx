import React from "react";
import { ButtonProps } from "./types";
import { One } from "./one";

export const Button = (props: ButtonProps) => {
  const variant = props.variant ?? "one";

  if (variant === "one") return <One {...props} />;

  return <One {...props} />;
};
