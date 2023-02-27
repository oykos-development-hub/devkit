import React, { useState } from "react";
import { Container } from "./styles/container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const Datepicker = ({ style, theme }) => {
    const [date, setDate] = useState(new Date());
    const handleDateChange = (date) => setDate(date);
    return (React.createElement(Container, { style: style, theme: theme },
        React.createElement(DatePicker, { selected: date, onChange: handleDateChange, dateFormat: "dd/MM/yyyy" })));
};
//# sourceMappingURL=index.js.map