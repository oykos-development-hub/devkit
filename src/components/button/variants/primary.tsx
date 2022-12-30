import React, { forwardRef } from "react";
import { ButtonProps } from "../types";
import { StyledPrimaryButton } from "../styles/primary";

export const Primary = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ onClick, iconPosition = "left", ...props }, ref) => {
        return (
            <StyledPrimaryButton
                type="submit"
                {...props}
                onClick={() => (onClick ? onClick() : null)}
                iconPosition={iconPosition}
                ref={ref}
            >
                {props.icon && iconPosition === "left" && <span>{props.icon}</span>}

                <span>{props.label}</span>

                {props.icon && iconPosition === "right" && <span>{props.icon}</span>}
            </StyledPrimaryButton>
        );
    },
);
