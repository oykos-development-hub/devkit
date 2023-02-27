import React, { useState } from "react";
import { DatepickerTypes } from "./types";
import { Container } from "./styles/container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Datepicker: React.FC<DatepickerTypes> = ({ style, theme }) => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = (date: Date) => setDate(date);

  return (
    <Container style={style} theme={theme}>
      <DatePicker selected={date} onChange={handleDateChange} dateFormat={"dd/MM/yyyy"} />
    </Container>
  );
};
