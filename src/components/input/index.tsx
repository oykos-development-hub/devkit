import React, { useEffect, useRef, useState } from "react";

import { InputProps } from "./types";
import { Container } from "./styles/container";
import { StyledInput, Textarea } from "./styles/input";
import { Typography } from "../typography";
import { LeftElement } from "./styles/leftElement";
import { RightElement } from "./styles/rightElement";

export const Input = ({
  name,
  value,
  theme,
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
  ...props
}: InputProps): React.ReactElement => {
  const [leftElementWidth, setLeftElementWidth] = useState(0);
  const [rightElementWidth, setRightElementWidth] = useState(0);

  const leftElementRef = useRef<HTMLDivElement>(null);
  const rightElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftContent) setLeftElementWidth(leftElementRef.current?.offsetWidth!);
  }, [leftContent]);

  useEffect(() => {
    if (rightContent) setRightElementWidth(rightElementRef.current?.offsetWidth!);
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
    theme,
    style: {
      paddingLeft: `${leftContent ? `${leftElementWidth}px` : "1em"}`,
      paddingRight: `${rightContent ? `${rightElementWidth}px` : "1em"}`,
      ...style,
    },
  };

  return (
    <Container theme={theme} label={label} error={error} hint={hint}>
      <div>
        {label && <Typography variant="label" content={label} />}

        {textarea ? <Textarea {...fieldProps} /> : <StyledInput {...fieldProps} {...props} />}

        {leftContent && <LeftElement ref={leftElementRef}>{leftContent}</LeftElement>}

        {rightContent && <RightElement ref={rightElementRef}>{rightContent}</RightElement>}

        {error && !disabled && <Typography variant="body1" content={error} />}

        {hint && !error && <Typography variant="body1" content={hint} />}
      </div>
    </Container>
  );
};
