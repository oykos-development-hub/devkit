import styled from "styled-components";
import Select from "react-dropdown-select";
import { DropdownProps } from "../../types";

export const StyledDropdown = styled(Select)`
  background: ${(props: DropdownProps) => props.bgColor || props.theme?.palette?.dark.one || "#333"};
  border: ${(props: DropdownProps) =>
    (props.borderSize || "0.0625rem") + " solid " + props.borderColor || "transparent"} !important;
  border-radius: ${(props: DropdownProps) => props.borderRadius} !important;
  font-family: ${(props: DropdownProps) => props.fontFamily || props.theme?.fontFamily?.one || "sans-serif"} !important;
  line-height: 1.5 !important;
  box-shadow: ${(props: DropdownProps) =>
    props.shadowSize + " " + (props.shadowColor || props.theme?.palette?.dark.one) ||
    "0 1px 2px 0 rgb(0 0 0 / 60%)"} !important;
  -webkit-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 60%);
  -moz-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 60%);

  :hover {
    border: ${(props: DropdownProps) =>
      (props.borderSize || "0.0625rem") + " solid " + props.hoverBorderColor || "transparent"} !important;
    outline: ${(props: DropdownProps) =>
      (props.borderSize || "0.0625rem") + " solid " + props.hoverBorderColor || "transparent"} !important;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 80%) !important;
    -webkit-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 80%) !important;
    -moz-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 80%) !important;
  }
  :focus-within {
    border: ${(props: DropdownProps) =>
      (props.borderSize || "0.0625rem") + " solid " + props.hoverBorderColor || "transparent"} !important;
    outline: ${(props: DropdownProps) =>
      (props.borderSize || "0.0625rem") + " solid " + props.hoverBorderColor || "transparent"} !important;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 80%) !important;
    -webkit-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 80%) !important;
    -moz-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 80%) !important;
  }

  .react-dropdown-select-dropdown-handle {
    color: ${(props: DropdownProps) => props.handleClearColor || props.theme?.palette?.light.one || "#fff"};
  }
  .react-dropdown-select-clear {
    color: ${(props: DropdownProps) => props.handleClearColor || props.theme?.palette?.light.one || "#fff"};

    :hover {
      color: ${(props: DropdownProps) =>
        props.handleClearColor || props.theme?.palette?.important.one || "#f3f3f3"} !important;
    }
  }
  .react-dropdown-select-option {
    border: ${(props: DropdownProps) => props.selectedItemBorderWidth + " solid" || "0.0625rem solid"}
      ${(props: DropdownProps) => props.selectedItemBorderColor || props.theme?.palette?.dark.four || "#333"};

    border-radius: ${(props: DropdownProps) => props.selectedItemBorderRadius || "0.125rem"};
    background: ${(props: DropdownProps) => props.selectedItemBgColor || props.theme?.palette?.dark.four || "#333"};
  }
  .react-dropdown-select-item {
    color: ${(props: DropdownProps) => props.itemColor || props.theme?.palette?.light.two || "#fff"} !important;
    border: none;

    :hover {
      color: ${(props: DropdownProps) =>
        props.itemHoverColor || props.theme?.palette?.light.three || "#fff"} !important;
      background-color: ${(props: DropdownProps) =>
        props.itemHoverBgColor || props.theme?.palette?.dark.three || "#333"} !important;
    }
  }
  .react-dropdown-select-input {
    color: ${(props: DropdownProps) => props.inputColor || props.theme?.palette?.light.one || "#fff"};
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    width: ${(props: DropdownProps) => props.dropdownWidth || props.theme?.mediaScreenBreakpoints?.xs || "31.25rem"};
    padding: ${(props: DropdownProps) => props.dropdownPadding || "0"};
    display: flex;
    flex-direction: column;
    border-radius: ${(props: DropdownProps) => props.dropdownBorderRadius || "0.125rem"};
    max-height: ${(props: DropdownProps) => props.dropdownMaxHeight || "18.75rem"};
    overflow: auto;
    z-index: 9;
    background: ${(props: DropdownProps) => props.dropdownBgColor || props.theme?.palette?.light.four || "#333"};
    box-shadow: ${(props: DropdownProps) =>
      props.shadowSize + " " + (props.shadowColor || props.theme?.palette?.dark.one) ||
      "0 1px 2px 0 rgb(0 0 0 / 60%)"} !important;
    -webkit-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 60%);
    -moz-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 60%);
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    background: ${(props: DropdownProps) =>
      props.dropdownSelectedItemColor || props.theme?.palette?.dark.four || "#111"};
    border: none;
    color: ${(props: DropdownProps) => props.selectedItemColor || props.theme?.palette?.light.one || "#fff"} !important;
    font-weight: bold;
  }
  .react-dropdown-select-item.react-dropdown-select-item-disabled {
    background: #777;
    color: #ccc;
  }
  span.react-dropdown-select-option-remove {
    :hover {
      color: red !important;
    }
  }
`;
