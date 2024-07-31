import React, { ChangeEvent, useMemo, useState } from "react";
import { DangerIcon, Datepicker } from "@oykos-development/devkit-react-ts-styled-components";
import { registerLocale } from "react-datepicker";
import { Theme } from "../../shared/theme";
import { Container } from "./styles/container";
import { SSSInput } from "../input";
import { CalendarIcon } from "../icons";
import sr from "date-fns/locale/sr-Latn";
import { SSSDatepickerProps } from "./types";
import { SSSTypography } from "../typography";
import { parse, isValid } from "date-fns";
import { LabelWrapper } from "../input/styles/styledInput";

registerLocale("sr", sr);

export const SSSDatepicker = (props: SSSDatepickerProps) => {
  const [date, setDate] = useState<Date | undefined>();

  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      disabled: false,
      ...props,
      placeholderText: "dd/mm/yyyy",
      locale: "sr",
    }),
    [props],
  );

  const handleChange = (date: any) => {
    props.onChange(date);
  };

  const parseDate = (str: string, format: string) => {
    const parsed = parse(str, format, new Date());
    if (isValid(parsed)) {
      return parsed;
    }
    return undefined;
  };

  const onChangeRaw = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target || !e.target.value) {
      return;
    }
    const rawValue = e.target.value;
    const sanitizedValue = rawValue.replace(/[^\d]/g, "");

    let formattedValue = "";
    if (sanitizedValue.length <= 2) {
      formattedValue = sanitizedValue;
    } else if (sanitizedValue.length <= 4) {
      formattedValue = `${sanitizedValue.slice(0, 2)}/${sanitizedValue.slice(2)}`;
    } else if (sanitizedValue.length <= 8) {
      formattedValue = `${sanitizedValue.slice(0, 2)}/${sanitizedValue.slice(2, 4)}/${sanitizedValue.slice(4)}`;
    }
    if (formattedValue !== rawValue) {
      e.target.value = formattedValue;
    }
    // Rest of your code here
    const trimmedInput = formattedValue.trim();
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(trimmedInput)) {
      const parsedDate = parseDate(trimmedInput, "dd/MM/yyyy");
      if (isValid(parsedDate)) {
        setDate(parsedDate);
      }
    }
  };

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
        onChangeRaw={onChangeRaw}
        onSelect={(date) => setDate(date)}
        selected={date}
      />
    </Container>
  );
};
