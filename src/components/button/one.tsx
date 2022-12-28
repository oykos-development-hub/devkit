import React, { forwardRef } from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

const Button = styled.button<ButtonProps>`
  width: ${(props: ButtonProps) => props.width || "fit-content"};
  height: ${(props: ButtonProps) => props.height || "fit-content"};
  background-color: ${(props: ButtonProps) => props.primaryColor || props.theme?.palette?.main?.two || "lightgrey"};
  border: ${(props: ButtonProps) => props.borderWidth || props.theme?.borderWidth?.xs || "1px"} solid;
  border-color: ${(props: ButtonProps) => props.borderColor || "black"};
  border-radius: ${(props: ButtonProps) => props.borderRadius || props.theme?.borderRadius?.sm || "0.5em"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props: ButtonProps) => props.gap || "0.75em"};
  box-sizing: border-box;
  padding: ${(props: ButtonProps) => props.padding || "0.5em 1em"};
  margin: ${(props: ButtonProps) => props.margin || "1em"};
  cursor: pointer;
`;

export const One = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, type, iconPosition, ...props }, ref) => {
  return (
    <Button
      {...props}
      type={type || "button"}
      onClick={() => (onClick ? onClick() : null)}
      iconPosition={iconPosition || "left"}
      ref={ref}
    >
      {props.icon && iconPosition === "left" && <span>{props.icon}</span>}

      <span>{props.label}</span>

      {props.icon && iconPosition === "right" && <span>{props.icon}</span>}
    </Button>
  );
});
