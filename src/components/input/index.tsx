import React, { useEffect, useRef, useState } from "react";

import { InputProps } from "./types";
import { Container } from "./styles/container";
import { StyledInput, Textarea } from "./styles/input";
import { Typography } from "../typography";
import { LeftElement } from "./styles/leftElement";
import { RightElement } from "./styles/rightElement";
import { Theme } from "../../shared/theme";
import { IconWrapper } from "./styles/iconWrapper";
import { rem } from "polished";

export const Input = ({
  name,
  value,
  theme = Theme,
  style,
  disabled,
  label,
  textarea,
  leftContent,
  rightContent,
  error = "",
  hint = "",
  placeholder = "",
  onChange,
  onBlur,
  onFocus,
  id,
  inputRef,
  cols,
  rows,
  ...props
}: InputProps): React.ReactElement => {
  const [leftElementWidth, setLeftElementWidth] = useState(0);
  const [rightElementWidth, setRightElementWidth] = useState(0);

  const leftElementRef = useRef<HTMLDivElement>(null);
  const rightElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftContent && leftElementRef.current) setLeftElementWidth(leftElementRef.current?.offsetWidth);
  }, [leftContent]);

  useEffect(() => {
    if (rightContent && rightElementRef.current) setRightElementWidth(rightElementRef.current?.offsetWidth);
  }, [rightContent]);

  const fieldProps = {
    onChange,
    onBlur,
    onFocus,
    name,
    id,
    disabled,
    placeholder,
    value,
    error,
    style: {
      paddingTop: "0.625em",
      paddingBottom: "0.625em",
      paddingLeft: `${leftContent ? `${leftElementWidth}px` : rem("14px")}`,
      paddingRight: `${rightContent ? `${rightElementWidth}px` : rem("14px")}`,
      ...style,
    },
  };

  return (
    <Container style={style}>
      {label && label}

      <div>
        {textarea ? (
          <Textarea {...fieldProps} {...props} theme={theme} rows={rows || 5} cols={cols} />
        ) : (
          <StyledInput {...fieldProps} {...props} theme={theme} ref={inputRef} />
        )}

        {leftContent && (
          <LeftElement ref={leftElementRef}>
            <IconWrapper>{leftContent}</IconWrapper>
          </LeftElement>
        )}
        {rightContent && (
          <RightElement ref={rightElementRef}>
            <IconWrapper>{rightContent}</IconWrapper>
          </RightElement>
        )}
      </div>

      {error && !disabled && (
        <Typography content={error} variant={"helperText"} style={{ color: theme.palette.error500 }} />
      )}
      {hint && !error && <Typography content={hint} variant={"helperText"} style={{ color: theme.palette.gray700 }} />}
    </Container>
  );
};
