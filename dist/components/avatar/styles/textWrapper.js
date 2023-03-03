import styled, { css } from "styled-components";
import { rem } from "polished";
export const TextWrapper = styled.div(() => ({ size, style, theme }) => {
    const { gray600 } = theme.palette;
    const name = {
        sm: rem("14px"),
        md: rem("14px"),
        lg: rem("16px"),
        xl: rem("18px"),
    };
    const email = {
        sm: rem("12px"),
        md: rem("14px"),
        lg: rem("16px"),
        xl: rem("16px"),
    };
    const nameLineHeight = {
        sm: rem("20px"),
        md: rem("20px"),
        lg: rem("24px"),
        xl: rem("26px"),
    };
    const emailLineHeight = {
        sm: rem("16px"),
        md: rem("20px"),
        lg: rem("24px"),
        xl: rem("24px"),
    };
    return css `
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: auto;
    height: auto;
    color: ${gray600};
    font-size: ${email[size]};
    white-space: nowrap;

    & p {
      margin: 0;
      padding: 0;

      &:nth-child(1) {
        font-size: ${name[size]};
        line-height: ${nameLineHeight[size]};
      }

      &:nth-child(2) {
        font-size: ${email[size]};
        line-height: ${emailLineHeight[size]};
      }
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=textWrapper.js.map