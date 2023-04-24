import styled, { css, CSSProperties, DefaultTheme } from "styled-components";
import { rem } from "polished";

export const Option = styled.div(
  ({ theme, isDisabled, style }: { theme: DefaultTheme; isDisabled: boolean; style?: CSSProperties }) => {
    const { gray900, gray600 } = theme.palette;

    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: ${style?.fontFamily || theme.fontFamily.one};

      & * {
        color: ${isDisabled ? gray600 : style?.color || gray900};
        font-size: ${style?.fontSize || rem("14px")};
        font-weight: 400;
        line-height: ${rem("20px")};
        margin: 0;
        padding: 0;
      }
    `;
  },
);

export const OptionContent = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  gap: ${rem("8px")};
`;
