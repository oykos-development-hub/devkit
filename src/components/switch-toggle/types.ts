import { SwitchProps } from "@oykos-development/devkit-react-ts-styled-components";

export interface SSSSwitchProps extends Omit<SwitchProps, "onChange"> {
  name: string;
  onChange: (name: string) => void;
}
