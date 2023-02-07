import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../shared/theme";
import { StyledSelect } from "./styles/select";
import { DropdownProps } from "./types";
import { Container } from "./styles/container";
import { Typography } from "../typography";
import { LeftElementControl } from "./styles/leftElementControl";
import { XIcon } from "../icon";

const Dropdown = ({
  options,
  theme = Theme,
  isSearchable = false,
  noOptionsText = "No options",
  label,
  value,
  style,
  showArrow = true,
  controlLeftIcon,
  optionLeftIcon,
  onChange,
  ...props
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState();

  const [leftElementControlWidth, setLeftElementControlWidth] = useState(0);
  const leftElementControlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (controlLeftIcon) setLeftElementControlWidth(leftElementControlRef.current?.offsetWidth!);
  }, [controlLeftIcon]);

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
            paddingLeft: `${controlLeftIcon ? `calc(${leftElementControlWidth}px + 1em)` : "1em"}`,
            ...style,
          }}
          onChange={(e) => {
            setSelectedOption(e.value);
            onChange && onChange(e);
          }}
          formatOptionLabel={(e: any) => (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
                <div className="option-icon">{optionLeftIcon} </div>
                {e.label}
              </div>
              {selectedOption === e.value && (
                <div className="option-icon">
                  <XIcon size="16px" style={{ color: theme.palette.gray700 }} />
                </div>
              )}
            </div>
          )}
          showArrow={showArrow}
          {...props}
        />

        <LeftElementControl ref={leftElementControlRef}>{controlLeftIcon}</LeftElementControl>
      </div>
    </Container>
  );
};

export default Dropdown;
