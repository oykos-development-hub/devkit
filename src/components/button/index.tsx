import React, { forwardRef } from "react";
import { ButtonProps } from "./types";
import { Primary } from "./styles/variants/primary";
import { Secondary } from "./styles/variants/secondary";
import { Tertiary } from "./styles/variants/tertiary";

export const StyledButton = (props: ButtonProps) => {
  const variant = props.variant ?? "primary";

  if (variant === "secondary") return <Secondary {...props} type="button" />;
  if (variant === "tertiary") return <Tertiary {...props} type="button" />;
  else return <Primary {...props} type="submit" />;
};

export const Button = ({ onClick, iconPosition = "left", ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} onClick={() => (onClick ? onClick() : null)} iconPosition={iconPosition}>
      {props.icon && iconPosition === "left" && <span>{props.icon}</span>}

      <span>{props.label}</span>

      {props.icon && iconPosition === "right" && <span>{props.icon}</span>}
    </StyledButton>
  );
};
