import React from "react";
import { StyledIconWrapper } from "./style";

export const IconWrapper = ({ children, className, color }: any): React.ReactElement => (
  <StyledIconWrapper color={color} className={className}>
    {children}
  </StyledIconWrapper>
);
