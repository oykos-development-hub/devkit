import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../shared/theme";
import { StyledSelect } from "./styles/select";
import { DropdownProps, ValueType } from "./types";
import { Container } from "./styles/container";
import { Typography } from "../typography";
import { Option } from "./styles/option";
import { ControlIconWrapper } from "./styles/controlIconWrapper";

export const Dropdown = ({
  options,
  theme = Theme,
  isDisabled = false,
  isSearchable = false,
  isMulti = false,
  noOptionsText = "No options",
  label,
  style,
  showArrow = true,
  controlIcon,
  leftOptionIcon,
  rightOptionIcon,
  onChange,
  placeholder = "",
  ...props
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<ValueType | null>(null);

  const [controlIconWidth, setControlIconWidth] = useState(0);
  const controlIconWrapperRef = useRef<HTMLDivElement>(null);

  const optionLabel = (e: any) => (
    <Option theme={theme} isDisabled={isDisabled} style={style}>
      <div>
        {leftOptionIcon && <div className="option-icon">{leftOptionIcon} </div>}
        {e.label}
      </div>
      {!isMulti && selectedOption?.value === e.value && (
        <div className="option-icon">{rightOptionIcon && rightOptionIcon}</div>
      )}
    </Option>
  );

  useEffect(() => {
    if (controlIcon && controlIconWrapperRef.current) setControlIconWidth(controlIconWrapperRef.current?.offsetWidth);
  }, []);

  return (
    <Container theme={theme}>
      {label && <Typography content={label} variant="bodyMedium" />}

      <div>
        <StyledSelect
          options={options}
          classNamePrefix="select"
          theme={theme}
          blurInputOnSelect
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          noOptionsMessage={() => noOptionsText}
          style={{
            paddingLeft: `${controlIcon ? `calc(${controlIconWidth}px + 1em)` : "1em"}`,
            ...style,
          }}
          onChange={(e) => {
            !isMulti && setSelectedOption(e as ValueType);
            onChange && onChange(e as ValueType);
          }}
          controlIcon={controlIcon}
          showArrow={showArrow}
          isMulti={isMulti}
          formatOptionLabel={optionLabel}
          placeholder={placeholder}
          {...props}
        />

        <ControlIconWrapper ref={controlIconWrapperRef}>{controlIcon}</ControlIconWrapper>
      </div>
    </Container>
  );
};
