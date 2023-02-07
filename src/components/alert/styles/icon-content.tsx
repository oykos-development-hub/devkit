import styled from "styled-components";
import { AlertVariants } from "../types";
import React from "react";
import { CircleCheckIcon, DangerIcon } from "../../icon";

const StyledIconContent = styled.div`
  display: flex;
  align-self: stretch;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
`;

export const LeftIconContent: React.FC<{ variant: AlertVariants }> = ({ variant }) => {
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

  return <StyledIconContent>{renderIcon()}</StyledIconContent>;
};
