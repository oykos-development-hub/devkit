import React, { ChangeEvent, useState, useEffect, useRef, useMemo } from "react";
import { DangerIcon, Datepicker } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
import { Container } from "./styles/container";
import { SSSInput } from "../input";
import { CalendarIcon } from "../icons";
import sr from "date-fns/locale/sr-Latn";
import { registerLocale } from "react-datepicker";
import { SSSTypography } from "../typography";
import { LabelWrapper } from "../input/styles/styledInput";
import { SSSDatepickerProps } from "./types";

registerLocale("sr", sr);

export const SSSDatepicker = (props: SSSDatepickerProps) => {
  const [date, setDate] = useState<Date | undefined>(props.selected ?? undefined);
  const [prevInputValue, setPrevInputValue] = useState<string>("");

  const isRawInputRef = useRef(false);

  const parseDate = (dateString: string): Date | null => {
    const [day, month, year] = dateString.split("/").map(Number);
    
    if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year) {
      const date = new Date(year, month - 1, day);
  
      if (date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year) {
        return date;
      }
    }

    return null
  };

  function handleCharacterRemoval(value: string, selectedCursor: number): [string, number] {
    if (!value.endsWith('/') && prevInputValue.endsWith('/')) {
        return [value.slice(0, -1), selectedCursor];
    }

    if (prevInputValue[selectedCursor] === '/' && selectedCursor > 0) {
        let start = selectedCursor - 1;
        
        while (start > 0 && !!isNaN(Number(value[start]))) {
            start--;
        }

        return [prevInputValue.slice(0, start) + prevInputValue.slice(selectedCursor), selectedCursor - 1];
    }

    return [value, selectedCursor]
  }

  function handleCharacterInsertion(value: string, cursorPosition: number): [string, number] {
    const slashCount = (value.match(/\//g) || []).length;

    if (slashCount >= 2) {
      return [value, cursorPosition];
    }

    if ((cursorPosition === 2 || cursorPosition === 5) && value[cursorPosition] !== '/') {
      return [value.slice(0, cursorPosition) + '/' + value.slice(cursorPosition), cursorPosition + 1];
    }

    return [value, cursorPosition];
  }

  const validateMaxDay = (day: string, cursorPosition: number): boolean => {
    if (!day) return true;

    cursorPosition = cursorPosition - 1

    if (cursorPosition !== 0 && cursorPosition !== 1) {
      return true
    }

    if (day.length > 2) {
      return false;
    }
  
    if (day.length === 1 || cursorPosition === 0) {
      return parseInt(day[0]) >= 0 && parseInt(day[0]) <= 3;
    }
  
    const firstDigit = parseInt(day[0]);
    const secondDigit = parseInt(day[1]);
  
    if (firstDigit === 3 && secondDigit > 1) {
      return false;
    }
  
    return true;
  };

  const validateMaxMonth = (month: string, cursorPosition: number) => {
    if (!month) return true;

    cursorPosition = cursorPosition -1

    if (cursorPosition !== 3 && cursorPosition !== 4) {
      return true
    }

    if (month.length > 2) {
      return false;
    }

    if (month.length === 1 || cursorPosition === 3) {
      return parseInt(month[0]) >= 0 && parseInt(month[0]) <= 1;
    }

    const firstDigit = parseInt(month[0]);
    const secondDigit = parseInt(month[1]);

    if (firstDigit === 1 && secondDigit > 2) {
      return false;
    }

    return true;
  }

  const validateMaxYear = (year: string, cursorPosition: number) => {
    if (!year) return true;

    cursorPosition = cursorPosition -1

    if (cursorPosition !== 6 && cursorPosition !== 7 && cursorPosition !== 8 && cursorPosition !== 9) {
      return true
    }

    if (year.length > 4) {
      return false;
    }
    
    return true;
  }

  const validateMax = (value: string, cursorPosition: number) => {
    const [day, month, year] = value.split('/');

    const validDay = validateMaxDay(day, cursorPosition)
    const validMonth = validateMaxMonth(month, cursorPosition)
    const validYear = validateMaxYear(year, cursorPosition)

    return validDay && validMonth && validYear
  }

  const handleChangeRaw = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, selectionStart } = e.target;
    if (value === undefined) {
      isRawInputRef.current = false;
      return
    }

    selectionStart = selectionStart || 0

    isRawInputRef.current = true;

    if (/[^0-9/]/.test(value) || (value.match(/\//g) || []).length > 2) {
      // If invalid character is found, revert to previous input value
      e.target.value = prevInputValue;
      e.target.setSelectionRange(selectionStart - 1, selectionStart-1)
      return;
    }

    if (value.length > 10) {
      e.target.value = prevInputValue
      e.target.setSelectionRange(selectionStart -1, selectionStart-1)
      return
    }

    if (value === "") {
      if (date) {
        setDate(undefined)
        props.onChange(null);
        return
      }
    }

    const isValid = validateMax(value, selectionStart)
    if (!isValid) {
      e.target.value = prevInputValue;
      e.target.setSelectionRange(selectionStart -1, selectionStart -1)
      return;
    }

    let newValue: string
    let newCursorPosition: number

    if (prevInputValue.length > value.length) {
      [newValue, newCursorPosition] = handleCharacterRemoval(value, selectionStart || 0)
    } else {
      [newValue, newCursorPosition] = handleCharacterInsertion(value, selectionStart || 0)
    }

    if (value !== newValue) {
      e.target.value = newValue
    }

    if (selectionStart !== newCursorPosition) {
      e.target.setSelectionRange(newCursorPosition, newCursorPosition)
    }

    setPrevInputValue(newValue)

    if (value.length !== 10) {
      return
    }

    const formattedDate = parseDate(newValue);

    if (formattedDate instanceof Date) {
      if (formattedDate.getTime() != date?.getTime()) {
        setDate(formattedDate)
        props.onChange(formattedDate)
      }
    } else if (date) {
      setDate(undefined)
      props.onChange(null)
    }
  };

  const handleChange = (inputDate: Date | [Date, Date]) => {
    if (!isRawInputRef.current && inputDate instanceof Date && date?.getTime() != inputDate.getTime()) {
      setDate(inputDate)
      props.onChange(inputDate)
    }
  };

  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      disabled: props.isDisabled || false,
      ...props,
      placeholderText: "dd/mm/yyyy",
      locale: "sr",
    }),
    [props],
  );

  useEffect(() => {
    if (props.selected) {
      if (!date || props.selected.getTime() !== date.getTime()) {
        setDate(props.selected)
        props.onChange(props.selected);
      }
    } else if (date !== undefined) {
      setDate(undefined)
      props.onChange(null);
    }
  }, [props.selected]);

  return (
    <Container
      theme={mergedProps.theme}
      disabled={mergedProps.disabled}
      error={!!mergedProps.error}
      className={mergedProps.className}
    >
      <Datepicker
        customInput={
          <SSSInput
            rightContent={mergedProps.error ? <DangerIcon /> : <CalendarIcon />}
            error={mergedProps.error}
            name={mergedProps.name}
            label={
              typeof mergedProps.label === "string" ? (
                <LabelWrapper>
                  <SSSTypography
                    content={mergedProps.label}
                    variant={"bodySmall"}
                    style={{
                      fontWeight: 600,
                      color: mergedProps.disabled ? Theme?.palette?.gray300 : Theme?.palette?.gray900,
                    }}
                  />

                  <SSSTypography
                    content="*"
                    variant="bodyLarge"
                    style={{
                      marginLeft: 5,
                      color:
                        mergedProps.disabled && mergedProps.isRequired
                          ? Theme?.palette?.gray300
                          : mergedProps.isRequired
                          ? Theme?.palette?.error400
                          : "transparent",
                    }}
                  />
                </LabelWrapper>
              ) : (
                mergedProps.label
              )
            }
          />
        }
        {...mergedProps}
        dateFormat="dd/MM/yyyy"
        onChange={handleChange}
        onChangeRaw={handleChangeRaw}
        selected={date}
      />
    </Container>
  );
};
