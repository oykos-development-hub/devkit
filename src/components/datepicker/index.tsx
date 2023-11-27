import React, { ReactNode } from "react";
import { CustomDatePickerProps } from "./types";
import { Container } from "./styles/container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../input";
import CalendarIcon from "../icon/variations/CalendarIcon";
import { DangerIcon } from "../icon";
import { Theme } from "../../shared/theme";

export const Datepicker: React.FC<CustomDatePickerProps> = ({
  style,
  theme = Theme,
  error,
  label,
  onChange,
  selectsRange,
  className,
  popperContainerId,
  ...rest
}) => {
  return (
    <Container style={style} theme={theme} error={error} className={className}>
      <DatePicker
        onChange={onChange}
        selectsRange={selectsRange}
        customInput={
          rest.customInput ? (
            rest.customInput
          ) : (
            <Input
              rightContent={error ? <DangerIcon /> : <CalendarIcon />}
              error={error}
              label={label}
              autoComplete=""
            />
          )
        }
        {...rest}
      />
    </Container>
  );
};
