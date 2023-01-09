import React, { useState, ChangeEvent } from "react";
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
  const [showClearButton, setShowClearButton] = useState(false);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.search) setShowClearButton(!!event.target.value.length);

    if (onChange) onChange(event);
  };

  const textfieldProps = {
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

        {props.textarea ? (
          <textarea {...textfieldProps} onChange={onChange} />
        ) : (
          <input
            type={type}
            ref={inputRef}
            inputMode={inputMode}
            pattern={pattern}
            onChange={changeHandler}
            {...textfieldProps}
          />
        )}

        {props.iconLeft && !props.textarea && <div id="input-left-icon-wrapper">{props.iconLeft}</div>}

        {props.search && showClearButton && props.iconRight && !props.textarea && !props.disabled && (
          <div id="input-right-icon-wrapper" onClick={props.clear}>
            {props.iconRight}
          </div>
        )}

        {props.confirmed && props.iconRight && !props.textarea && !props.error && (
          <div id="input-right-icon-wrapper">{props.iconRight}</div>
        )}

        {props.error && props.iconRight && !props.textarea && !props.disabled && (
          <div id="input-right-icon-wrapper">{props.iconRight}</div>
        )}

        {props.error && !props.disabled && <p>{props.error}</p>}
      </div>
    </StyledMainWrapper>
  );
};
