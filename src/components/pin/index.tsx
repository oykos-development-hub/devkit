import React, { useEffect, useState, useCallback } from "react";
import { Input } from "../input";
import { Container } from "./styles/container";

import { IPinCode } from "./types";

const pinRefs: any = {};
const pinPrefix = "pinRef-";
const re = /^(\d*\.)?\d+$/;

export const Pin = ({ handleInput, length = 4, type = "password" }: IPinCode) => {
  const [value, setValue] = useState<string[]>([]);

  value.forEach((e, i) => {
    pinRefs[`${pinPrefix}${i}`] = React.createRef();
  });

  const checkKeyPress = useCallback(
    (e: { key: any; keyCode: any }) => {
      const { key, keyCode } = e;

      // When user presses delete or backspace remove the latest value
      if (keyCode === 8 || keyCode === 46) {
        const filledValues = value.filter((filledValue) => !!filledValue);

        filledValues.pop();

        for (let i = filledValues.length; i < length; i++) {
          filledValues.push("");
        }

        setValue(filledValues);
      }
    },
    [value],
  );

  const handleOnChange = (val: string, index: number) => {
    if (re.test(val)) {
      setValue((oldValue) => oldValue.map((e, i) => (i !== index ? e : val)));
    }

    // keep only the last value and override the previous
    if (val?.length > 1) val = val[val.length - 1];

    // When user pastes full pin value
    // We want to fill out every pin input
    if (val?.length === length && re.test(val)) {
      return setValue(val.split(""));
    }
  };

  const handleFocus = () => {
    const filledValues = value.filter((filledValue) => !!filledValue);

    if (filledValues.length && pinRefs[`pinRef-${filledValues.length}`]) {
      pinRefs[`pinRef-${filledValues.length}`].current?.focus();
    } else pinRefs["pinRef-0"].current?.focus();
  };

  useEffect(() => {
    window.addEventListener("keydown", checkKeyPress);

    return () => {
      window.removeEventListener("keydown", checkKeyPress);
    };
  }, [checkKeyPress]);

  useEffect(() => {
    if (handleInput) {
      handleInput(value.join(""));
    }

    setTimeout(() => {
      handleFocus();
    }, 100);
  }, [value]);

  useEffect(() => {
    const startValue = [];

    if (length) {
      for (let i = 0; i < length; i += 1) {
        startValue.push("");
      }

      setValue(startValue);
    }
  }, []);

  return (
    <Container>
      {value.map((e, i) => (
        <Input
          type={type}
          id={`${i}`}
          key={i}
          value={e}
          onChange={(ev) => handleOnChange((ev.target as HTMLInputElement).value, i)}
          disabled={(!!i && !value[i - 1]) || !!value[i + 1]}
          maxLength={length}
          inputRef={pinRefs[`${pinPrefix}${i}`]}
          inputMode="numeric"
          pattern="[0-9]*"
        />
      ))}
    </Container>
  );
};
