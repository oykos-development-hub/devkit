import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RangeDatePicker } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { DateFormat } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Example/RangeDatePicker",
  component: RangeDatePicker,
  argTypes: {
    className: {
      control: {
        type: "string",
      },
    },
    dateFormat: {
      options: DateFormat,
      control: {
        type: "select",
      },
    },
    styleCalendar: {
      defaultValue: {
        color: "#000",
        backgroundColor: "#343aa",
        border: "none",
        borderRadius: "0.7rem",
        width: "300px",
        alignItems: "center",
        justifyContent: "center",
        margin: "0em",
        padding: "0em",
        outline: "none",
      },
    },
    styleWrapper: {
      defaultValue: {
        width: "fit-content",
        alignItems: "center",
        justifyContent: "center",
        margin: "0em",
        padding: "0em",
      },
    },
  },
} as ComponentMeta<typeof RangeDatePicker>;

const today = new Date();

console.log(today.toISOString().split("T")[1]);

const Template: ComponentStory<typeof RangeDatePicker> = (args) => {
  const [start, setStart] = useState<Date>(today);
  const [end, setEnd] = useState<Date>(today);

  const onRangeChange = (startDate: Date, endDate: Date) => {
    setStart(startDate);
    setEnd(endDate);
  };
  return (
    <StoryWrapper>
      <RangeDatePicker
        {...args}
        startDateValue={start}
        endDateValue={end}
        label="Pick a date"
        onRangeChange={onRangeChange}
      />
    </StoryWrapper>
  );
};
export const RangeDatePickerExample = Template.bind({});
RangeDatePickerExample.args = {
  theme: Theme,
};
