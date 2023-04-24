import styled, { css } from "styled-components";
import { BodyMedium, HelperText } from "../../typography/styles/variants";
import { InputProps } from "../types";
import { rem } from "polished";

export const Container = styled.div(({ label, error, style, theme }: InputProps) => {
  const { error500, gray700, gray900 } = theme!.palette;

  return css`
    width: 100%;
    min-width: ${label ? rem("200px") : rem("48px")};
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    position: relative;

    & * {
      font-family: ${style?.fontFamily || theme!.fontFamily.one};
      font-size: ${rem("16px")};
      line-height: ${rem("24px")};
      color: ${gray700};
    }

    & > div {
      position: relative;
    }

    ${BodyMedium}:first-child {
      color: ${gray900};
      font-size: ${rem("14px")};
      font-weight: 600;
      line-height: ${rem("20px")};
    }

    ${BodyMedium}:last-child {
      font-size: ${rem("14px")};
      font-weight: 400;
      line-height: ${rem("16px")};
    }

    ${HelperText} {
      position: absolute;
      bottom: -20px;
      color: ${error ? error500 : gray700};
      font-weight: 400;
      font-size: ${rem("12px")};
    }
  `;
});
