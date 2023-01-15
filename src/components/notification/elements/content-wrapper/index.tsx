import { INotificationProps } from "../../types";
import React from "react";
import { StyledContentWrapper } from "./style";

export const ContentWrapper = (props: INotificationProps): React.ReactElement => (
  <StyledContentWrapper {...props}>{props.children}</StyledContentWrapper>
);
