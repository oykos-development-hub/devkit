import React from "react";

import Select from "react-dropdown-select";
import { DropdownProps } from "./types";

export const Dropdown = (props: DropdownProps): React.ReactElement => {
  return (
    <React.Fragment>
      {!!props.label && <p>{props.label}</p>}
      <Select
        options={props.data}
        values={[]}
        color={props.color || props.theme?.palette?.dark.one || "#333"}
        direction={props.direction || "ltr"}
        dropdownPosition={props.dropdownPosition || "auto"}
        multi={props.multi}
        disabled={props.disabled || false}
        closeOnSelect={props.closeOnSelect || false}
        searchable={props.searchable || false}
        loading={props.loading || false}
        clearable={props.clearable}
        clearOnBlur={props.clearOnBlur || false}
        placeholder={props.placeholder}
        onChange={(value) => props.onChange && props.onChange(value)}
      />
    </React.Fragment>
  );
};
