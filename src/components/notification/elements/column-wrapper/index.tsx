import { INotificationProps } from "../../types";
import React from "react";
import { StyledColumnWrapper } from "./style";

export const ColumnWrapper = (props: INotificationProps): React.ReactElement => (
  <StyledColumnWrapper {...props}>{props.children}</StyledColumnWrapper>
);
