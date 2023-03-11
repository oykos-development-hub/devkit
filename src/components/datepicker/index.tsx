import React, { useState } from "react";
import { DatepickerTypes } from "./types";
import { Container } from "./styles/container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../input";

export const Datepicker: React.FC<DatepickerTypes> = ({ style, theme, calendarIcon, onChange, ...rest }) => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = (date: Date) => {
    setDate(date);
    onChange && onChange(date);
  };

  return (
    <Container style={style} theme={theme}>
      <DatePicker
        className="myDatePicker"
        selected={date}
        onChange={handleDateChange}
        dateFormat={rest.dateFormat}
        customInput={rest.customInput ? rest.customInput : <Input rightContent={calendarIcon} />}
        {...rest}
      />
    </Container>
  );
};
