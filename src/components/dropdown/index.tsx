import React from "react";

import Select from "react-select";
import { DropdownProps, IData } from "./types";

export const Dropdown: React.FC<DropdownProps> = (props) => (
  <div>
    {!!props.label && <p>{props.label}</p>}
    <Select
      options={props.data}
      isMulti={props.isMulti}
      {...(props.onChange && { onchange })}
      onBlur={props.onBlur}
      {...(props.value && { value: props.data.find((option: IData) => option.value === props.value) })}
      placeholder={props.placeholder}
      isDisabled={props.disabled}
      isSearchable={props.isSearchable || false}
      defaultValue={props.data.filter((option: any) => props.defaultValue === option.value)}
      autoFocus
      backspaceRemovesValue={false}
      hideSelectedOptions={false}
      isClearable={props.isClearable}
      tabSelectsValue={false}
      menuPlacement="auto"
      closeMenuOnSelect={props.closeMenuOnSelect}
    />
  </div>
);
