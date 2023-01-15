import { INotificationProps } from "../types";

export const getColor = (props: INotificationProps) => {
  switch (props.variant) {
    case "error":
      return props.color || props.theme?.palette.light.one || "#D9D9D9FF";
    case "success":
      return props.color || props.theme?.palette.light.one || "#D9D9D9FF";
    case "neutral":
      return props.color || props.theme?.palette.light.one || "#D9D9D9FF";
    case "info":
      return props.color || props.theme?.palette.light.one || "#D9D9D9FF";
    default:
      return "#D9D9D9FF";
  }
};

export const getBgColor = (props: INotificationProps) => {
  switch (props.variant) {
    case "error":
      return props.backgroundColor || props.theme?.palette.important.two || "#f44336";
    case "success":
      return props.backgroundColor || props.theme?.palette.info.three || "#00b300";
    case "neutral":
      return props.backgroundColor || props.theme?.palette.info.four || "#598d82";
    case "info":
      return props.backgroundColor || props.theme?.palette.info.four || "#598d82";
    default:
      return "#6C757D";
  }
};

export const initialShadow = "0 0.0625rem 0.125rem rgba(97, 97, 97, 0.2), 0 0.125rem 0.25rem rgba(97, 97, 97, 0.2)";
