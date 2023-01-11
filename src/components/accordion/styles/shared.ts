import { css } from "styled-components";
import { AccordionProps } from "../types";

export const basicColor = (props: AccordionProps) =>
  props.backgroundColor || props.theme?.palette?.light?.one || "#f9f9f9";

export const collapsedColor = (props: AccordionProps) =>
  props.collapsedColor || props.theme?.palette?.main?.four || "#00bfff";

export const hoverColor = (props: AccordionProps) =>
  props.hoverBackground || props.theme?.palette?.light?.two || "#ededed";

export const wrapperStyles = css<AccordionProps>`
  overflow: hidden;
  width: ${(props) => props.width || "100%"};

  & p {
    margin: 0;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75em;
  }

  #accordion-icon-wrapper,
  #arrow-wrapper {
    width: 1.5em;
    height: 1.5em;
  }

  & #accordion-header {
    position: relative;
    justify-content: space-between;
    padding: 0.75em;
    border-bottom: ${(props) => `1px solid ${hoverColor(props)}`};

    &:hover {
      cursor: pointer;
    }

    & > div:first-child {
      justify-content: flex-start;
      gap: 0.5em;
    }

    & #arrow-wrapper {
      & svg {
        transform: ${(props) => `rotate(${props.collapsed ? "-180deg" : 0})`};
        transition: transform 0.3s ease-out;
      }
    }
  }

  & #accordion-content {
    display: block;

    height: ${(props) => (props.collapsed ? `${props.scrollHeight!}px` : 0)};
    transition: all 0.3s ease-out;

    & > * {
      padding: 0.5em 0;
      box-sizing: border-box;
    }
  }
`;
