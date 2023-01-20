import React, { ChangeEvent, ReactNode, useState } from "react";
import { InputProps, InputTypes, InputVariants, InputWrapperProps } from "./types";
import { StyledMainWrapper as Outlined } from "./styles/outlined";
import { StyledMainWrapper as Standard } from "./styles/standard";
import { DefaultTheme } from "styled-components";

const Wrapper = (props: InputWrapperProps) => {
  const variant = props.variant ?? InputVariants.standard;
  const wrapperProps = {
    variant: props.variant,
    type: props.type,
    error: props.error,
    errorColor: props.errorColor,
    fullWidth: props.fullWidth,
    disabled: props.disabled,
    textarea: props.textarea,
    search: props.search,
    confirmed: props.confirmed,
    iconLeft: props.iconLeft,
    iconRight: props.iconRight,
    theme: props.theme,
    style: props.style,
    children: props.children,
  };

  return variant === InputVariants.outlined ? <Outlined {...wrapperProps} /> : <Standard {...wrapperProps} />;
};

export const Input = ({
  variant = InputVariants.standard,
  type = InputTypes.text,
  ...props
}: InputProps): React.ReactElement => {
  const [showClearButton, setShowClearButton] = useState(false);

  const changeHandler = (event: ChangeEvent<any>) => {
    if (props?.search) setShowClearButton(!!event?.target?.value?.length);
    if (props?.onChange) props.onChange(event);
  };

  return (
    <Wrapper {...props} variant={variant}>
      <div className="input-content-wrapper">
        <label>{props.label}</label>

        {props?.textarea ? (
          <textarea {...props} ref={props.inputRef} onChange={changeHandler} />
        ) : (
          <input {...props} ref={props.inputRef} onChange={changeHandler} />
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
    </Wrapper>
  );
};
