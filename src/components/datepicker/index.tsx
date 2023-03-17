import React, { useState } from "react";
import { DatepickerTypes } from "./types";
import { Container } from "./styles/container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../input";
import CalendarIcon from "../icon/variations/CalendarIcon";
import { DangerIcon } from "../icon";

export const Datepicker: React.FC<DatepickerTypes> = ({ style, theme, error, disabled = false, onChange, ...rest }) => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = (date: Date) => {
    setDate(date);
    onChange && onChange(date);
  };

  return (
    <Container style={style} theme={theme} error={error}>
      <DatePicker
        disabled={disabled}
        selected={date}
        onChange={handleDateChange}
        dateFormat={rest.dateFormat}
        customInput={
          rest.customInput ? (
            rest.customInput
          ) : (
            <Input rightContent={error ? <DangerIcon /> : <CalendarIcon />} error={error} />
          )
        }
        {...rest}
      />
    </Container>
  );
};
