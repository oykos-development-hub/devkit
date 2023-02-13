import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../shared/theme";
import { StyledSelect } from "./styles/select";
import { DropdownProps, ValueType } from "./types";
import { Container } from "./styles/container";
import { Typography } from "../typography";
import { XIcon } from "../icon";
import { Option } from "./styles/option";
import { ControlIconWrapper } from "./styles/controlIconWrapper";

export const Dropdown = ({
  options,
  theme = Theme,
  isSearchable = false,
  isMulti = false,
  noOptionsText = "No options",
  label,
  style,
  showArrow = true,
  controlIcon,
  optionIcon,
  onChange,
  ...props
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<ValueType | null>(null);

  const [controlIconWidth, setControlIconWidth] = useState(0);
  const controlIconWrapperRef = useRef<HTMLDivElement>(null);

  const optionLabel = (e: any) => (
    <Option theme={theme}>
      <div>
        {optionIcon && <div className="option-icon">{optionIcon} </div>}
        {e.label}
      </div>
      {!isMulti && selectedOption?.value === e.value && (
        <div className="option-icon">
          <XIcon style={{ color: theme.palette.gray700 }} />
        </div>
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
          {...props}
        />

        <ControlIconWrapper ref={controlIconWrapperRef}>{controlIcon}</ControlIconWrapper>
      </div>
    </Container>
  );
};
