import { AlertProps, AlertSizes, AlertVariants } from "../types";
import React from "react";
import { LeftIconContent } from "./icon-content";
import { XIcon } from "../../icon";
import { Typography } from "../../typography";
import styled, { css } from "styled-components";
import { DefaultTheme } from "../../../shared/theme/types";

const StyledContent = styled.div`
  display: flex;
  order: 0;
  flex-direction: row;
  padding: 0;
  gap: 1rem;
`;

export const Content = styled.div<{
  variant: AlertVariants;
  closeIcon?: boolean;
  size?: AlertSizes;
  onClose?: (e?: React.MouseEvent<any>) => any;
  theme?: DefaultTheme;
  style?: React.CSSProperties | undefined;
}>(() => ({ style }) => {
  return css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    gap: 1rem;

    ${{ ...style }}
  `;
});

export const LeftContent: React.FC<AlertProps> = ({ content, variant = AlertVariants.success, size, style, theme }) => {
  return (
    <StyledContent>
      <LeftIconContent variant={variant} size={size} />
      <Typography variant={"h6"} content={content} theme={theme} style={style} />
    </StyledContent>
  );
};

export const RightContent = styled.div<{
  style?: React.CSSProperties | undefined;
}>(() => ({ style }) => {
  return css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    gap: 1rem;

    & svg:hover {
      cursor: pointer;
    }

    ${{ ...style }}
  `;
});
