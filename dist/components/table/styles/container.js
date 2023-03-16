import styled, { css } from "styled-components";
export const Container = styled.div(({ theme }) => {
    const { gray300, gray900 } = theme.palette;
    return css `
    & * {
      font-family: "Inter";
      color: ${gray900};
    }

    & > * {
      padding: 1em;
    }

    border: 1px solid ${gray300};
    border-radius: ${theme.borderRadius.lg || "0.5em"};
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  `;
});
//# sourceMappingURL=container.js.map