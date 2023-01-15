import { DefaultTheme } from "styled-components";

export enum NotificationVariants {
  error = "error",
  success = "success",
  info = "info",
  neutral = "neutral",
}

export interface INotificationProps {
  variant: NotificationVariants | keyof typeof NotificationVariants;
  message: string | JSX.Element;
  color?: string;
  backgroundColor?: string;
  leftIconColor?: string;
  closeIconColor?: string;
  iconWidth?: number;
  iconTop?: number;
  className?: string;
  closeIcon?: boolean;
  additionalText?: string;
  boxShadow?: string;
  borderRadius?: number | string;
  button?: JSX.Element;
  onClose?: () => void;
  isSnackBar?: boolean;
  fontFamily?: string;
  children?: JSX.Element;
  theme?: DefaultTheme;
}
