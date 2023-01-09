import styled from "styled-components";
import { AccordionProps } from "../../types";
import { collapsedColor, wrapperStyles } from "../shared";

export const StyledMainWrapper = styled.div<AccordionProps>`
  ${wrapperStyles}

  & #accordion-header:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 100%;
    height: 2px;
    width: 100%;
    background-color: ${(props: AccordionProps) => collapsedColor(props)};
    transform: ${(props: AccordionProps) => `scale(${!!props.collapsed ? "1" : "0"}, 1)`};
    transition: transform 0.3s ease-out;
  }
`;
