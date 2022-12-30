import React, { forwardRef } from "react";
import { ButtonProps } from "../types";
import { StyledTertiaryButton } from "../styles/tertiary";

export const Tertiary = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, iconPosition, ...props }, ref) => {
    return (
        <StyledTertiaryButton
            type="reset"
            {...props}
            onClick={() => (onClick ? onClick() : null)}
            iconPosition={iconPosition || "left"}
            ref={ref}
        >
            {props.icon && iconPosition === "left" && <span>{props.icon}</span>}

            <span>{props.label}</span>

            {props.icon && iconPosition === "right" && <span>{props.icon}</span>}
        </StyledTertiaryButton>
    );
});
