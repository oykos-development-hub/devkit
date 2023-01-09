import styled from "styled-components";
import { AccordionProps } from "../../types";
import { wrapperStyles, basicColor, collapsedColor, hoverColor } from "../shared";

export const StyledMainWrapper = styled.div<AccordionProps>`
  ${wrapperStyles}

  #accordion-header {
    background-color: ${(props: AccordionProps) => (!props.collapsed ? basicColor(props) : collapsedColor(props))};
    border: none;
    border-radius: ${(props: AccordionProps) => props.borderRadius || props.theme?.borderRadius?.md || "0em"};

    &:hover {
      background-color: ${(props: AccordionProps) => (!props.collapsed ? hoverColor(props) : collapsedColor(props))};
    }
  }
`;
