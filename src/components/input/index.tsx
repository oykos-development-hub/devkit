import React, { useState, useMemo, useEffect, forwardRef, Ref, ChangeEvent } from "react";
import { SSSInputProps } from "./types";
import { Theme } from "../../shared/theme";
import { LabelWrapper, StyledInput } from "./styles/styledInput";
import { SSSTypography } from "../typography";
import { EyeOffIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { EyeIcon } from "../icons";

export const SSSInput = forwardRef((props: SSSInputProps, ref: Ref<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState<string>(props.value ? props.value.toString() : "");
  const [displayValue, setDisplayValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const formatCurrencyInitialValue = () => {
    // This is only used to format currency, ignore for other inputs
    if (props.type !== "currency") return;

    if (props.value !== undefined && props.value !== null && !isFocused) {
      const formattedValue = formatNumber(props.value);
      setInternalValue(props.value.toString());
      setDisplayValue(formattedValue);
    }
  };

  useEffect(() => {
    formatCurrencyInitialValue();
  }, [props.value]);

  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  const formatNumber = (num: any) => {
    if (num === "" || isNaN(num)) return "";
    const parts = parseFloat(num).toFixed(2).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${parts.join(".")}`;
  };

  const allowCurrencyHandleChange = (e: React.ChangeEvent<HTMLInputElement>, decimalPart?: string) => {
    const input = e.target.value;
    let allow = true;

    // Prevents adding dot at the beginning
    if (input.slice(0, 1) === ".") {
      allow = false;
    }

    // Prevents adding more than one dot
    const dotsCount = input.split(".").length - 1;
    if (dotsCount > 1) {
      allow = false;
    }

    // Prevents adding any character other than numbers, '.' or ','
    const invalidCharacters = /[^0-9.]/;
    if (invalidCharacters.test(input)) {
      allow = false;
    }

    // Prevents adding third number after decimal
    if (!!decimalPart && decimalPart?.length > 2) {
      allow = false;
    }

    return allow;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type === "currency") {
      let input = e.target.value;

      // Remove any non-numeric characters except dot
      input = input.replace(/[^\d.]/g, "");

      // Ensure only one dot and only up to two decimal places
      const [integerPart, decimalPart] = input.split(".");
      let validDecimalPart = decimalPart;

      if (decimalPart && decimalPart.length > 2) {
        validDecimalPart = decimalPart.slice(0, 2);
      }

      // Combine integer and limited decimal part
      const rawValue = validDecimalPart !== undefined ? `${integerPart}.${validDecimalPart}` : integerPart;

      if (!allowCurrencyHandleChange(e, decimalPart)) return;

      // Update internal and display value
      setInternalValue(rawValue);
      setDisplayValue(validDecimalPart !== undefined ? `${integerPart}.${validDecimalPart}` : integerPart);
      props.onChange && props.onChange(e);
    } else {
      props.onChange && props.onChange(e);
    }
  };

  const handleBlur = () => {
    if (props.type === "currency") {
      const formattedValue = formatNumber(internalValue);
      setDisplayValue(formattedValue);
    }
    setIsFocused(false);
  };

  const handleFocus = () => {
    if (props.type === "currency") {
      setDisplayValue(internalValue);
    }
    setIsFocused(true);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledInput
      ref={ref}
      {...mergedProps}
      label={
        typeof mergedProps.label === "string" ? (
          <LabelWrapper>
            <SSSTypography
              content={mergedProps.label}
              variant="bodySmall"
              style={{
                fontWeight: 600,
                color: mergedProps.disabled ? Theme?.palette?.gray300 : Theme?.palette?.gray900,
              }}
            />
            <SSSTypography
              content="*"
              variant="bodyLarge"
              style={{
                marginLeft: 5,
                color:
                  mergedProps.disabled && mergedProps.isRequired
                    ? Theme?.palette?.gray300
                    : mergedProps.isRequired
                    ? Theme?.palette?.error400
                    : "transparent",
              }}
            />
          </LabelWrapper>
        ) : (
          mergedProps.label
        )
      }
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      autoComplete={mergedProps.autoComplete ? mergedProps.autoComplete : "off"}
      rightContent={
        mergedProps.type === "password" ? (
          showPassword ? (
            <EyeOffIcon onClick={toggleShowPassword} />
          ) : (
            <EyeIcon onClick={toggleShowPassword} />
          )
        ) : (
          mergedProps.rightContent
        )
      }
      type={mergedProps.type === "password" && showPassword ? "text" : mergedProps.type}
      value={displayValue ? displayValue : mergedProps.value}
    />
  );
});

SSSInput.displayName = "SSSInput";
