import React, { useEffect, useRef, useState } from "react";

import { InputProps } from "./types";
import { Container } from "./styles/container";
import { StyledInput, Textarea } from "./styles/input";
import { Typography } from "../typography";
import { LeftElement } from "./styles/leftElement";
import { RightElement } from "./styles/rightElement";
import { Theme } from "../../shared/theme";

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
  error,
  hint,
  placeholder,
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
      paddingLeft: `${leftContent ? `${leftElementWidth}px` : "0.875em"}`,
      paddingRight: `${rightContent ? `${rightElementWidth}px` : "0.875em"}`,
      ...style,
    },
  };

  return (
    <Container theme={theme} label={label} error={error} hint={hint}>
      {label && <Typography variant="bodyMedium" content={label} />}

      <div>
        {textarea ? (
          <Textarea {...fieldProps} theme={theme || Theme} rows={rows || 5} cols={cols} />
        ) : (
          <StyledInput {...fieldProps} {...props} theme={theme || Theme} ref={inputRef} />
        )}

        {leftContent && <LeftElement ref={leftElementRef}>{leftContent}</LeftElement>}

        {rightContent && <RightElement ref={rightElementRef}>{rightContent}</RightElement>}
      </div>
      {error && !disabled && <Typography variant="helperText" content={error} />}

      {hint && !error && <Typography variant="bodyMedium" content={hint} />}
    </Container>
  );
};
