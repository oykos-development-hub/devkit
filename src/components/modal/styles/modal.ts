import styled, { css } from "styled-components";
import { ModalProps } from "../types";
import { BodyLarge, BodyMedium, BodySmall, H1, H2, H3, H4, H5, H6 } from "../../typography/styles/variants";

export const ModalBox = styled.div<Partial<ModalProps>>(({ theme, variant, style }) => {
  const { white, black } = theme.palette;

  return css`
    & * {
      font-family: "Inter";
    }

    background-color: ${variant === "dark" ? black : white};
    width: fit-content;
    min-width: 25%;
    padding: 1.5em;
    box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.07), 0px 12px 16px -4px rgba(33, 33, 33, 0.1);
    border-radius: 0.5em;

    ${H1},${H2}, ${H3}, ${H4}, ${H5}, ${H6}, ${BodyLarge},${BodyMedium}, ${BodySmall} {
      color: ${variant === "dark" ? white : black};
    }

    ${{ ...style }}
  `;
});
