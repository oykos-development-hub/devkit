import React from "react";
import { INotificationProps } from "../../types";
import { StyledNotificationBoard } from "./style";

export const NotificationBoard = (props: INotificationProps): React.ReactElement => (
  <StyledNotificationBoard {...props}>{props.children}</StyledNotificationBoard>
);
