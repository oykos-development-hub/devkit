import styled, { css } from "styled-components";
import { Slider } from "./slider";
import { rem } from "polished";
export const Input = styled.input.attrs({
    type: "checkbox",
})(({ inputSize }) => {
    const translate = {
        sm: rem("16px"),
        md: rem("20px"),
    };
    return css `
    &:checked + ${Slider}:before {
      transform: translateX(${translate[inputSize]});
    }
  `;
});
//# sourceMappingURL=input.js.map