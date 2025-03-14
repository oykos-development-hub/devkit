import React from "react";
import styled, { css } from "styled-components";
import { CheckboxSize } from "../types";
import { DefaultTheme } from "../../../shared/theme/types";
import { rem } from "polished";

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

export const Content = styled.div<{
  checked: boolean;
  disabled: boolean;
  size: CheckboxSize | `${CheckboxSize}`;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}>(({ checked, disabled, theme, size, style }) => {
  const { primary50, primary500, gray50, gray300 } = theme!.palette;

  const borderRadius = {
    sm: "0.25rem",
    md: "0.375rem",
  };

  const widthHeight = {
    sm: "1rem",
    md: "1.25rem",
  };

  const icon = {
    sm: "0.75rem",
    md: "0.875rem",
  };

  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${style?.width || widthHeight[size]};
    height: ${style?.height || widthHeight[size]};
    background: ${checked ? primary500 : gray50};
    border: 1px solid ${primary500};
    border-radius: ${style?.borderRadius || borderRadius[size]};
    cursor: ${disabled ? "auto" : "pointer"};

    &:hover {
      box-shadow: ${disabled ? "none" : `0 0 0 0.25rem ${primary50}`};
    }

    &[disabled] {
      background: ${gray50};
      border: ${rem("1px")} solid ${gray300};
      border-radius: ${style?.borderRadius || borderRadius[size]};
    }

    & svg {
      width: ${icon[size]};
      height: ${icon[size]};
    }

    ${{ ...style }}
  `;
});
