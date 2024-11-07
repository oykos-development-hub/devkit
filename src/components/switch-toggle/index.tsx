import React, { ChangeEvent, useMemo } from "react";
import { Switch } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSSwitchProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSSwitch = (props: SSSSwitchProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(props.name || "");
  };

  return <Switch {...mergedProps} onChange={handleChange} />;
};
