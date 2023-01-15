import React from "react";
import { INotificationProps } from "./types";
import CircleCheckIcon from "../icon/icons/CircleCheckIcon";
import DangerIcon from "../icon/icons/DangerIcon";
import XIcon from "../icon/icons/XIcon";
import { IconWrapper } from "./elements/icon-wraper";
import { getColor } from "./elements/shared";
import { AdditionalText } from "./elements/additional-text";
import { NotificationBoard } from "./elements/notification-board";
import { ColumnWrapper } from "./elements/column-wrapper";
import { ContentWrapper } from "./elements/content-wrapper";

export const Notification: React.FC<INotificationProps> = (props) => {
  const variant = props.variant;
  const color = getColor(props);

  const renderIcon = () => {
    switch (variant) {
      case "success":
        return <CircleCheckIcon color={props.leftIconColor || props.color} top={props.iconTop + "rem" || "1rem"} />;
      case "info":
      case "neutral":
      case "error":
        return (
          <DangerIcon
            width={props.iconWidth || 20}
            color={props.leftIconColor || props.color}
            top={props.iconTop + "rem" || "1rem"}
          />
        );
      default:
        return null;
    }
  };

  const content = () => (
    <React.Fragment>
      {/* ! Here comes Typography component */}
      <p className={props.className}>{props.message}</p>

      {props.closeIcon && (
        <IconWrapper className="right" color={color}>
          <XIcon
            width={props.iconWidth || 20}
            top={props.iconTop + "rem"}
            color={props.closeIconColor || props.color}
            onClick={props.onClose}
            position="relative"
          />
        </IconWrapper>
      )}
    </React.Fragment>
  );

  const renderContent = () => (
    <React.Fragment>
      <ContentWrapper {...props}>{content()}</ContentWrapper>
      {props.additionalText && <AdditionalText additionalText={props.additionalText} />}
      {props.button && <div className="m-t-14 m-b-4">{props.button}</div>}
    </React.Fragment>
  );

  const renderChildren = () => (
    <React.Fragment>
      <IconWrapper className="left">{renderIcon()}</IconWrapper>
      <ColumnWrapper {...props}>{renderContent()}</ColumnWrapper>
    </React.Fragment>
  );

  return <NotificationBoard {...props}>{renderChildren()}</NotificationBoard>;
};
