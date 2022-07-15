import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
} from "./styles.js";
/* StyledLabel,
  StyledButton, */
export function Dropdown(props) {
  return (
    <DropdownWrapper
      action={props.action}
      onChange={props.onChange}
    >
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}