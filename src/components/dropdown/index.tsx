import React, { useMemo } from "react";
import { ValueType } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSDropdownProps } from "./types";
import { Theme } from "../../shared/theme";
import { LabelWrapper, StyledDropdown } from "./styles/styledDropdown";
import { SSSTypography } from "../typography";

export const SSSDropdown = (props: SSSDropdownProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
      name: props.name || "",
      isSearchable: props.isSearchable || true,
      showSearchIcon: props.showSearchIcon || false,
    }),
    [props],
  );

  const handleChange = (value: ValueType) => {
    props.onChange &&
      props.onChange(
        mergedProps.isMulti ? value : ({ id: value.value as any, title: value.label } as any),
        mergedProps.name,
      );
  };

  const popperContainer = document.getElementById("custom-popper-container");

  return (
    <StyledDropdown
      {...mergedProps}
      onChange={handleChange}
      options={mergedProps.options.map((option) => ({ value: option.id, label: option.title }))}
      value={
        (mergedProps.value
          ? mergedProps.isMulti
            ? mergedProps.value
            : { value: mergedProps.value?.id || 0, label: mergedProps.value?.title }
          : null) as any
      }
      menuPortalTarget={popperContainer ? popperContainer : document.body}
      label={
        typeof mergedProps.label === "string" ? (
          <LabelWrapper>
            <SSSTypography
              content={mergedProps.label}
              variant={"bodySmall"}
              style={{
                fontWeight: 600,
                color: mergedProps.isDisabled ? Theme?.palette?.gray300 : Theme?.palette?.gray900,
              }}
            />

            <SSSTypography
              content="*"
              variant="bodyLarge"
              style={{
                marginLeft: 5,
                color:
                  mergedProps.isDisabled && mergedProps.isRequired
                    ? Theme?.palette?.gray300
                    : mergedProps.isRequired
                    ? Theme?.palette?.error400
                    : "transparent",
              }}
            />
          </LabelWrapper>
        ) : (
          <SSSTypography
            content={mergedProps.label}
            variant={"bodySmall"}
            style={{
              fontWeight: 600,
              color: mergedProps.isDisabled ? Theme?.palette?.gray300 : Theme?.palette?.gray900,
            }}
          />
        )
      }
    />
  );
};
