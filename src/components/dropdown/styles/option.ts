import styled, { css, CSSProperties, DefaultTheme } from "styled-components";
import { rem } from "polished";

export const Option = styled.div(
  ({ theme, isDisabled, style }: { theme: DefaultTheme; isDisabled: boolean; style?: CSSProperties }) => {
    const { gray900, gray600 } = theme.palette;

    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      font-family: ${style?.fontFamily || theme.fontFamily.one};

      & * {
        color: ${isDisabled ? gray600 : style?.color || gray900};
        font-size: ${style?.fontSize || rem("14px")};
      }

      & > div:first-child {
        display: flex;
        align-items: center;
        gap: ${rem("8px")};
      }

      & .option-icon {
        display: flex;
      }
    `;
  },
);
