import React from "react";
import { ButtonProps } from "./types";
import { Primary } from "./styles/variants/primary";
import { Secondary } from "./styles/variants/secondary";
import { Tertiary } from "./styles/variants/tertiary";

export const StyledButton = (props: ButtonProps) => {
  const variant = props.variant ?? "primary";

  if (variant === "secondary") return (<Secondary {...props} type="button" />);
  if (variant === "tertiary") return (<Tertiary {...props} type="button" />);

  return (<Primary {...props} type="submit" />);
};

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {props.content}
    </StyledButton>
  );
};
