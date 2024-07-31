import { InputProps } from "@oykos-development/devkit-react-ts-styled-components";
import { ChangeEvent } from "react";

export interface SSSInputProps extends Omit<InputProps, "onChange"> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  float?: boolean;
  autoComplete?: string;
  isRequired?: boolean;
  type?: "currency" | "password" | "number";
}
