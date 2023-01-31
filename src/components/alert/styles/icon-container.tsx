import styled from "styled-components";
import { AlertProps } from "../types";
import React from "react";
import { CircleCheckIcon, DangerIcon, XIcon } from "../../icon";

const StyledIconContainer = styled.div`
  display: flex;
  align-self: flex-start;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
`;

export const IconContainer: React.FC<AlertProps> = ({ variant, closeIcon, onClose, children }) => {
  const renderIcon = () => {
    switch (variant) {
      case "success":
        return <CircleCheckIcon />;
      case "info":
      case "primary":
      case "error":
        return <DangerIcon />;
      default:
        return null;
    }
  };

  return (
    <StyledIconContainer>
      {renderIcon()}
      {children}

      {closeIcon && <XIcon onClick={onClose} />}
    </StyledIconContainer>
  );
};
