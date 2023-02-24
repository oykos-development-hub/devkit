import styled, { css } from "styled-components";
export const Option = styled.div(({ theme, isDisabled }) => {
    const { gray900, gray600 } = theme.palette;
    return css `
    display: flex;
    align-items: center;
    justify-content: space-between;

    & * {
      color: ${isDisabled ? gray600 : gray900};
    }
    & > div:first-child {
      display: flex;
      align-items: center;
      gap: 1em;
    }

    & .option-icon {
      display: flex;
    }
  `;
});
//# sourceMappingURL=option.js.map