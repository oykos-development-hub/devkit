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
  noOptionsText = "No options",
  label,
  style,
  showArrow = true,
  controlIcon,
  optionIcon,
  onChange,
  ...props
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<ValueType | null>();

  const [controlIconWidth, setControlIconWidth] = useState(0);
  const controlIconWrapperRef = useRef<HTMLDivElement>(null);
  console.log("test");

  const optionLabel = (e: any) => (
    <Option theme={theme}>
      <div>
        {optionIcon && <div className="option-icon">{optionIcon} </div>}
        {e.label}
      </div>
      {selectedOption?.value === e.value && (
        <div className="option-icon">
          <XIcon style={{ color: theme.palette.gray700 }} />
        </div>
      )}
    </Option>
  );

  useEffect(() => {
    if (controlIcon) setControlIconWidth(controlIconWrapperRef.current?.offsetWidth!);
  }, []);

  return (
    <Container theme={theme}>
      {label && <Typography content={label} variant="body1" />}

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
          onChange={(e: ValueType | null) => {
            setSelectedOption(e);
            onChange && onChange(e);
          }}
          controlIcon={controlIcon}
          showArrow={showArrow}
          formatOptionLabel={optionLabel}
          {...props}
        />

        <ControlIconWrapper ref={controlIconWrapperRef}>{controlIcon}</ControlIconWrapper>
      </div>
    </Container>
  );
};
