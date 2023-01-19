import styled, { css } from "styled-components";
import { RangeDatePickerProps } from "../types";
import "react-datepicker/dist/react-datepicker.css";
import { Theme } from "../../../shared/theme";

export const initialShadow = "0 1px 2px rgba(97, 97, 97, 1), 0 2px 4px rgba(97, 97, 97, 1)";

export const shared = css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  justify-content: center;
  min-width: fit-content;
`;

export const DatePickerWrapper = styled.div<RangeDatePickerProps>`
  ${shared};
  width: ${(props) => props.styleWrapper?.width || "fit-content"};
  height: ${(props) => props.styleWrapper?.height || "fit-content"};
  margin: ${(props) => props.styleWrapper?.margin || "0em"};
  padding: ${(props) => props.styleWrapper?.padding || "0em"};
  position: ${(props) => props.styleWrapper?.position || "relative"};
  
  .react-datepicker {
    ${shared};
    border: ${(props) => props.styleCalendar?.borderWidth || props.theme?.borderWidth?.xs || "1px"} solid;
    border-radius: ${(props) => props.styleCalendar?.borderRadius || props.theme?.borderRadius?.lg || "0em"};  
    width: ${(props) => props.styleCalendar?.width || "100%"};
    height: ${(props) => props.styleCalendar?.height || "100%"};
    margin: ${(props) => props.styleCalendar?.margin || "0em"};    
    padding: ${(props) => props.styleCalendar?.padding || "1rem"};
    position: ${(props) => props.styleCalendar?.position || "relative"};
    top: ${(props) => props.styleCalendar?.top || "0em"};
    gap: ${(props) => props.styleCalendar?.gap || "0.5em"};
    outline: ${(props) => props.styleCalendar?.outline || "none"};
    font-family: ${(props) => props.styleCalendar?.fontFamily || props.theme.fontFamily?.one || "sans-serif"};
    line-height: ${(props) => props.styleCalendar?.lineHeight || props.theme.lineHeight?.sm || "1em"};
    box-shadow: ${(props) => props.styleCalendar?.boxShadow || initialShadow};
    font-family: ${(props) =>
      props.styleCalendar?.fontFamily ||
      props.theme.fontFamily?.one ||
      Theme.fontFamily?.one ||
      "sans-serif"} !important;
    line-height: ${(props) => props.styleCalendar?.lineHeight || props.theme.lineHeight?.sm || "1em"};

    &__header {
      border-radius: ${(props) => props.styleCalendar?.borderRadius || props.theme?.borderRadius?.lg || "1em"};
      border-bottom-right-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      background-color: ${(props) =>
        props.styleCalendar?.backgroundColor || props.theme.palette?.light.four || "#7f7f7f"};
    }

    &__day-names {
      padding-top: 0.5em;
    }

    &__current-month {
      padding: 23px 0;
      color: ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"};
      margin: 0;
      font-size: ${(props) => props.styleCalendar?.fontSize || props.theme.fontSize?.md || "1.25em"};
    }

    &__day--selected {
      background-color: orange;
    }

    &__day-name {
      color: ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"};
      margin: 9.46px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    &__navigation {
      top: 13px;
    }

    &__navigation--next,
    &__navigation--previous {
      top: 15px;
      height: 40px;
      width: 40px;
    }

    &__navigation-icon--next,
    &__navigation-icon--previous {
      &::before {
        top: 8px;
        left: -4px;
        border-width: 2px 2px 0 0;
        border-color: ${(props) =>
          props.styleCalendar?.color || props.theme.palette?.main.one || Theme.palette?.main.one};
      }
    }

    &__navigation--next {
      right: 12px;
    }

    &__navigation--previous {
      left: 12px;
    }

    &__month-container {
      width: 100%;
    }


    &__day {
      margin: 0.5px;
      border-radius: ${(props) => props.styleCalendar?.borderRadius || props.theme?.borderRadius?.sm || "1em"};
      width: 45px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      
      &--outside-month {
        color: transparent !important;
        pointer-events: none;
      }

      &--in-range {
        background-color: ${(props) => props.theme.palette?.light.five || "#616161"};
        color: ${(props) => props.styleCalendar?.color || props.theme.palette?.light.one || "#fff"};
        right: 0.46px;
        bottom: 5.46px;
        border-radius: ${(props) => props.styleCalendar?.borderRadius || props.theme?.borderRadius?.sm || "0em"};

        &:hover {
          background-color: ${(props) =>
            props.styleCalendar?.backgroundColor || props.theme.palette?.dark.one || "#000"};
          color: ${(props) => props.styleCalendar?.color || props.theme.palette?.light.one || "#fff"};
          border-radius: ${(props) => props.styleCalendar?.borderRadius || props.theme?.borderRadius?.sm || "0em"};
      } 
      }

      &--keyboard-selected {
        color: ${(props) => props.styleCalendar?.color || props.theme.palette?.dark.one || "#fff"};
        background-color: ${(props) =>
          props.styleCalendar?.backgroundColor || props.theme.palette?.dark.four || "#616161"};
        font-weight: bold;
        box-shadow: 0 1.56082px 3.12163px rgba(15, 86, 179, 0.18), 0 3.12163px 6.24327px rgba(15, 86, 179, 0.18);
        border-radius: ${(props) => props.styleCalendar?.borderRadius || props.theme?.borderRadius?.sm || "0em"};

        &:hover {
        border-radius: ${(props) => props.styleCalendar?.borderRadius || props.theme?.borderRadius?.sm || "0em"};
        }        
      }

      &--range-start {
        background-color: ${(props) =>
          props.styleCalendar?.backgroundColor || props.theme.palette?.main.one || "orange"};
        color: ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"};
        box-shadow: 0 1.56082px 3.12163px rgba(15, 86, 179, 0.18),
        0 3.12163px 6.24327px rgba(15, 86, 179, 0.18);
        border-radius: ${(props) => props.styleCalendar?.borderRadius || props.theme?.borderRadius?.sm || "0em"};
}

      &--range-end {
        background-color: ${(props) =>
          props.styleCalendar?.backgroundColor || props.theme.palette?.main.one || "orange"};
        color: ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"}; 
        border-radius: ${(props) => props.styleCalendar?.borderRadius || props.theme?.borderRadius?.sm || "0em"};
      }

      &__day--keyboard-selected {
        background-color: ${(props) =>
          props.styleCalendar?.backgroundColor || props.theme.palette?.main.one || "orange"};
      }
  }
`;
