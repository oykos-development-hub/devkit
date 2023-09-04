import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../shared/theme";
import { StyledSelect } from "./styles/select";
import { DropdownProps } from "./types";
import { DropdownContainer } from "./styles/container";
import { Option, OptionContent } from "./styles/option";
import { ControlIconWrapper } from "./styles/controlIconWrapper";
import { rem } from "polished";
import { Wrapper } from "./styles/wrapper";
import { DropdownIndicatorProps } from "react-select/dist/declarations/src/components/indicators";
import { components } from "react-select";
import { SearchIcon } from "../icon";
import { ErrorContainer } from "./styles/errorContainer";
import { ErrorText } from "./styles/errorText";

export const Dropdown = ({
  options,
  theme = Theme,
  isDisabled = false,
  isSearchable = false,
  isMulti = false,
  noOptionsText = "No options",
  label,
  style,
  isClearable,
  backspaceRemovesValue = true,
  showArrow = true,
  closeMenuOnSelect = true,
  dropdownIndicator,
  controlIcon,
  leftOptionIcon,
  rightOptionIcon,
  onChange,
  placeholder = "",
  className,
  value,
  menuPortalTarget,
  ...props
}: DropdownProps) => {
  const [controlIconWidth, setControlIconWidth] = useState(0);
  const controlIconWrapperRef = useRef<HTMLDivElement>(null);

  const optionLabel = (e: any) => (
    <Option theme={theme} isDisabled={isDisabled} style={style}>
      <OptionContent>
        {leftOptionIcon && leftOptionIcon}
        {e.label}
      </OptionContent>
      {!isMulti && value?.value === e.value && <OptionContent>{rightOptionIcon && rightOptionIcon}</OptionContent>}
    </Option>
  );

  useEffect(() => {
    if (controlIcon && controlIconWrapperRef.current) setControlIconWidth(controlIconWrapperRef.current?.offsetWidth);
  }, []);

  const DropdownIndicator = (props: DropdownIndicatorProps) => (
    <components.DropdownIndicator {...props}>
      {!dropdownIndicator ? <SearchIcon stroke={theme.palette.gray700} fill={"none"} /> : dropdownIndicator}
    </components.DropdownIndicator>
  );

  return (
    <DropdownContainer className={className}>
      <Wrapper>
        {label && label}
        <StyledSelect
          backspaceRemovesValue={backspaceRemovesValue}
          options={options}
          classNamePrefix="select"
          theme={theme}
          blurInputOnSelect
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          noOptionsMessage={() => noOptionsText}
          style={{
            paddingLeft: `${controlIcon && `calc(${controlIconWidth}px + ${rem("8px")})`}`,
            ...style,
          }}
          onChange={onChange as any}
          controlIcon={controlIcon}
          showArrow={showArrow}
          isMulti={isMulti}
          formatOptionLabel={optionLabel}
          placeholder={placeholder}
          closeMenuOnSelect={closeMenuOnSelect}
          isClearable={isClearable}
          value={value}
          menuPortalTarget={menuPortalTarget}
          {...props}
          components={isSearchable ? { DropdownIndicator } : {}}
        />
        <ControlIconWrapper ref={controlIconWrapperRef}>{controlIcon}</ControlIconWrapper>
      </Wrapper>
      <ErrorContainer theme={theme}>
        {typeof props.error === "string" ? (
          <ErrorText theme={theme} variant="bodySmall" content={props.error} />
        ) : (
          props.error
        )}
      </ErrorContainer>
    </DropdownContainer>
  );
};
