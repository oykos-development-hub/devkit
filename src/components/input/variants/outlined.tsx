import React from "react";
import { InputProps } from "../types";
import { StyledMainWrapper } from "../styles/outlined";

export const Outlined = ({
  variant,
  type = "text",
  onChange,
  onBlur,
  onFocus,
  placeholder = "",
  name,
  id,
  value,
  pattern,
  maxLength,
  inputMode,
  inputRef,
  ...props
}: InputProps): React.ReactElement => {
  const textfieldProps = {
    onChange,
    onBlur,
    onFocus,
    placeholder,
    name,
    disabled: props.disabled,
    id,
    value,
    maxLength,
  };

  return (
    <StyledMainWrapper {...props} variant="outlined">
      <div id="input-content-wrapper">
        <label>{props.label}</label>

        {props.iconLeft && !props.textarea && <div id="input-left-icon-wrapper"></div>}

        {props.iconRight && !props.textarea && <div id="input-right-icon-wrapper"></div>}

        {props.textarea ? (
          <textarea {...textfieldProps} />
        ) : (
          <input type={type} {...textfieldProps} ref={inputRef} inputMode={inputMode} pattern={pattern} />
        )}

        {props.error && !props.disabled && <p>{props.error}</p>}
      </div>
    </StyledMainWrapper>
  );
};
