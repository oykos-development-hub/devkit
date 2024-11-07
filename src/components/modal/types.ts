import { ModalProps } from "@oykos-development/devkit-react-ts-styled-components";
import { ReactElement } from "react";

export interface SSSModalProps extends Omit<ModalProps, "variant" | "open"> {
  footerText?: string;
  leftButtonText?: string;
  rightButtonText?: string;
  leftButtonOnClick?: () => void;
  rightButtonOnClick?: () => void;
  width?: number;
  customButtonsControls?: ReactElement;
  open: boolean;
  disabledControls?: boolean;
  buttonLoading?: boolean;
  customModalContent?: ReactElement;
}
