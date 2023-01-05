import React, { forwardRef } from "react";
import { InputProps } from "../types";
import { StyledMainWrapper } from "../styles/standard";

export const Standard = forwardRef<HTMLInputElement, InputProps>(
    ({ variant, type = "text", onChange, onBlur, onFocus, placeholder, name, ...props }, ref): React.ReactElement => {
        const inputProps = {
            onChange,
            onBlur,
            onFocus,
            placeholder,
            name,
            disabled: props.disabled,
        };

        return (
            <StyledMainWrapper {...props} variant="standard">
                <div id="input-content-wrapper">
                    <label>{props.label}</label>

                    {props.iconLeft && !props.textarea && <div id="input-left-icon-wrapper"></div>}

                    {props.iconRight && !props.textarea && <div id="input-right-icon-wrapper"></div>}

                    {props.textarea ? <textarea {...inputProps} /> : <input type={type} {...inputProps} ref={ref} />}

                    {props.error && props.errorMessage && !props.disabled && <p>{props.errorMessage}</p>}
                </div>
            </StyledMainWrapper>
        );
    },
);
