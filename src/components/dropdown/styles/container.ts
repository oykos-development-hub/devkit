import styled, { css, DefaultTheme } from "styled-components";

export const Container = styled.div(({ theme }: { theme: DefaultTheme }) => {
  const { gray900 } = theme.palette;

  return css`
    display: flex;
    flex-direction: column;
    gap: 0.75em;

    & *,
    & p {
      font-family: "Inter";
      color: ${gray900};
    }

    & > div {
      position: relative;
    }
  `;
});
