import React, { useState } from "react";

import { RangeDatePickerProps } from "./types";
import { DatePickerWrapper, StyledDatePicker } from "./styles/shared";

export const RangeDatePicker = (props: RangeDatePickerProps): React.ReactElement => {
  const [calendarOpened, setCalendarOpened] = useState(false);

  const onDateRangeChange = (value: [Date, Date]) => {
    const [startDate, endDate] = value;
    props.onRangeChange(startDate, endDate);
  };

  return (
    <div>
      <DatePickerWrapper {...props}>
        <StyledDatePicker
          {...props}
          startDate={props.startDateValue}
          endDate={props.endDateValue}
          onChange={onDateRangeChange}
          open={calendarOpened}
          onInputClick={() => setCalendarOpened(true)}
          selectsRange={true}
          wrapperClassName="range-datepicker-wrapper"
          className="custom-datepicker"
          dateFormat={props.dateFormat}
          placeholderText={props.placeholderText || "Start date - End date"}
          customInput={
            <input
              name="range-datepicker-custom-input"
              placeholder="Start date - End date"
              onClick={() => setCalendarOpened(true)}
            />
          }
        />
      </DatePickerWrapper>
    </div>
  );
};
