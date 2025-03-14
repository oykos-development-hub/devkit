import styled, { css } from "styled-components";
import { rem } from "polished";
export const Slider = styled.span(({ size, theme, disabled }) => {
    const { gray50 } = theme.palette;
    const circle = {
        sm: rem("16px"),
        md: rem("20px"),
    };
    return css `
    cursor: ${disabled ? "default" : "pointer"};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${rem("12px")};
    transition: 0.3s;

    &:before {
      content: "";
      position: absolute;
      left: ${rem("2px")};
      bottom: ${rem("2px")};
      width: ${circle[size]};
      height: ${circle[size]};
      border-radius: 50%;
      background-color: ${gray50};
      transition: 0.3s;
      box-shadow: 0 ${rem("1px")} ${rem("3px")} rgba(16, 24, 40, 0.1),
        0 ${rem("1px")} ${rem("2px")} rgba(16, 24, 40, 0.06);
    }
  `;
});
//# sourceMappingURL=slider.js.map