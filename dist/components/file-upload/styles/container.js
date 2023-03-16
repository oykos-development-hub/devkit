import styled, { css } from "styled-components";
export const Container = styled.div(({ isDragging, icon, style, theme }) => {
    const { gray600 } = theme.palette;
    return css `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 56px;
    gap: 24px;

    background: ${isDragging ? "#eee" : "#fff"};

    border: 1px dashed ${gray600};
    border-radius: 10px;
  `;
});
//# sourceMappingURL=container.js.map