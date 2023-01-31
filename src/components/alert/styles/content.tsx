import { AlertProps, AlertSizes, AlertVariants } from "../types";
import React from "react";
import { IconContainer } from "../styles/icon-container";
import { XIcon } from "../../icon";
import { Typography } from "../../typography";
import styled, { css } from "styled-components";
import { DefaultTheme } from "../../../shared/theme/types";
import { Theme } from "../../../shared/theme";

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const Content: React.FC<AlertProps> = ({
  content,
  variant = AlertVariants.success,
  additionalText = "",
  closeIcon = false,
  onClose,
  size = AlertSizes.lg,
  style,
  theme,
}) => {
  return (
    <StyledContent>
      <IconContainer variant={variant} className="left" size={size} closeIcon={closeIcon} onClose={onClose}>
        <Typography variant={"h6"} content={content} theme={theme} style={style} />
      </IconContainer>

      {additionalText && <Typography variant={"p"} content={additionalText} />}
    </StyledContent>
  );
};
