import React, { forwardRef } from "react";
import { ButtonProps } from "../types";
import { StyledSecondaryButton } from "../styles/secondary";

export const Secondary = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ onClick, iconPosition = "left", ...props }, ref) => {
        return (
            <StyledSecondaryButton
                type="button"
                {...props}
                onClick={() => (onClick ? onClick() : null)}
                iconPosition={iconPosition || "left"}
                ref={ref}
            >
                {props.icon && iconPosition === "left" && <span>{props.icon}</span>}

                <span>{props.label}</span>

                {props.icon && iconPosition === "right" && <span>{props.icon}</span>}
            </StyledSecondaryButton>
        );
    },
);
