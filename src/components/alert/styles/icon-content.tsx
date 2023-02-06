import styled, { css } from "styled-components";
import { AlertProps, AlertSizes, AlertVariants } from "../types";
import React from "react";
import { CircleCheckIcon, DangerIcon, XIcon } from "../../icon";
import { ButtonSizes } from "../../button/types";
import { DefaultTheme } from "../../../shared/theme/types";
import { Theme } from "../../../shared/theme";
import { Typography } from "../../typography";

const StyledIconContent = styled.div`
  display: flex;
  align-self: stretch;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
`;

export const LeftIconContent: React.FC<AlertProps> = ({ variant }) => {
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
