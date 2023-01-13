import React from "react";

import { DropdownProps } from "./types";
import { StyledDropdown } from "./styles/dropdown";

export const Dropdown = (props: DropdownProps): React.ReactElement => (
  <div>
    {!!props.label && <p>{props.label}</p>}
    <React.Fragment>
      {!!props.label && <p>{props.label}</p>}
      <StyledDropdown
        {...props}
        options={props.data}
        values={[]}
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
  </div>
);
