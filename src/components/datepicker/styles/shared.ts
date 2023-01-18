import styled from "styled-components";
import { RangeDatePickerProps } from "../types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const initialShadow = "0 1px 2px rgba(97, 97, 97, 1), 0 2px 4px rgba(97, 97, 97, 1)";
export const DatePickerWrapper = styled.div<RangeDatePickerProps>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  width: ${(props) => props.styleWrapper?.width || "fit-content"};
  height: ${(props) => props.styleWrapper?.height || "fit-content"};
  justify-content: center;
  margin: ${(props) => props.styleWrapper?.margin || "0em"};
  min-width: fit-content;
  padding: ${(props) => props.styleWrapper?.padding || "0em"};
  position: ${(props) => props.styleWrapper?.position || "relative"};
  top: ${(props) => props.styleWrapper?.top || "0em"};
  gap: ${(props) => props.styleWrapper?.gap || "0em"};

  .react-datepicker {
    border: ${(props) => props.styleCalendar?.border || "none"};
    border-radius: ${(props) => props.styleCalendar?.borderRadius || "0em"};
    align-items: center;
    box-sizing: border-box;
    display: flex;
    cursor: pointer;
    width: ${(props) => props.styleCalendar?.width || "100%"};
    height: ${(props) => props.styleCalendar?.height || "100%"};
    justify-content: center;
    margin: ${(props) => props.styleCalendar?.margin || "0em"};
    min-width: fit-content;
    padding: ${(props) => props.styleCalendar?.padding || "1rem"};
    position: ${(props) => props.styleCalendar?.position || "relative"};
    top: ${(props) => props.styleCalendar?.top || "0em"};
    gap: ${(props) => props.styleCalendar?.gap || "0em"};
    outline: ${(props) => props.styleCalendar?.outline || "none"};
    font-family: ${(props) => props.styleCalendar?.fontFamily || props.theme.fontFamily?.one || "sans-serif"};
    line-height: ${(props) => props.styleCalendar?.lineHeight || props.theme.lineHeight?.sm || "1em"};
    box-shadow: ${(props) => props.styleCalendar?.boxShadow || initialShadow};

    &__header {
      border-radius: ${(props) => props.styleCalendar?.borderRadius || "0em"};
      border-bottom-right-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      background-color: ${(props) =>
        props.styleCalendar?.backgroundColor || props.theme.palette?.light.four || "#7f7f7f"};
    }

    &__current-month {
      border-bottom: 1px solid ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"};
      padding: 23px 0;
      color: ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"};
      margin: 0;
      font-size: 20px;
    }

    &__day--selected {
      background-color: ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"};
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
      border: 1px solid ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"};
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(97, 97, 97, 0.2), 0 2px 4px rgba(97, 97, 97, 0.2);
      height: 40px;
      width: 40px;
    }

    &__navigation-icon--next,
    &__navigation-icon--previous {
      &::before {
        top: 8px;
        left: -4px;
        border-width: 2px 2px 0 0;
        border-color: ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"};
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
      border-radius: 0;
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
        background-color: ${(props) =>
          props.styleCalendar?.backgroundColor || props.theme.palette?.light.four || "#616161"};
        color: ${(props) => props.styleCalendar?.color || props.theme.palette?.light.one || "#fff"};
        right: 0.46px;
        bottom: 0.46px;
        border-radius: 0;

        &:hover {
          background-color: #E6F4F8;
        }
      }

      &--keyboard-selected {
        color: ${(props) => props.styleCalendar?.color || props.theme.palette?.light.one || "#fff"};
        background-color: ${(props) =>
          props.styleCalendar?.backgroundColor || props.theme.palette?.dark.four || "#616161"};
        font-weight: bold;
        box-shadow: 0 1.56082px 3.12163px rgba(15, 86, 179, 0.18),
        0 3.12163px 6.24327px rgba(15, 86, 179, 0.18);
        
      }

      &--range-end {
        background-color: ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "orange"};
        color: white;

        &:hover {
          background-color: ${(props) => props.styleCalendar?.color || props.theme.palette?.main.one || "#0068B6FF"};
        }
      }
  }
`;

export const StyledDatePicker = styled(DatePicker)<RangeDatePickerProps>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  width: ${(props) => props.styleInput?.width || "fit-content"};
  height: ${(props) => props.styleInput?.height || "fit-content"};
  justify-content: center;
  margin: ${(props) => props.styleInput?.margin || "0em"};
  min-width: fit-content;
  padding: ${(props) => props.styleInput?.padding || "1rem"};
  position: ${(props) => props.styleInput?.position || "relative"};
  top: ${(props) => props.styleInput?.top || "0em"};
  gap: ${(props) => props.styleInput?.gap || "0em"};
  outline: ${(props) => props.styleInput?.outline || "none"};
  font-family: ${(props) => props.styleInput?.fontFamily || props.theme.fontFamily?.one || "sans-serif"};
  line-height: ${(props) => props.styleInput?.lineHeight || props.theme.lineHeight?.sm || "1em"};

  &:hover {
    transition: all 0.3s;
    outline: 1px solid red;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
