import React, { useEffect, useRef, useState } from "react";
import { SwitchProps } from "./types";
import { Container } from "./styles/container";
import { SwitchWrapper } from "./styles/switchWrapper";
import { Slider } from "./styles/slider";
import { Input } from "./styles/input";
import { TextWrapper } from "./styles/textWrapper";
import { Typography } from "../typography";
import { Label } from "./styles/label";

export const Switch: React.FC<SwitchProps> = ({
  text = "",
  supportingText = "",
  size = "md",
  disabled = false,
  style,
  theme,
}) => {
  const ref = useRef<HTMLLabelElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const withContent = !!(text || supportingText);

  const handleClick = () => {
    if (disabled) return;

    setIsActive(true);
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Container size={size} style={style} theme={theme} withContent={withContent}>
      <SwitchWrapper>
        <Label
          ref={ref}
          size={size}
          style={style}
          theme={theme}
          disabled={disabled}
          isChecked={isChecked}
          isActive={isActive}
        >
          <Input defaultChecked={isChecked} inputSize={size} disabled={disabled} />
          <Slider checked={isChecked} size={size} style={style} theme={theme} onClick={handleClick} />
        </Label>
      </SwitchWrapper>

      {withContent && (
        <TextWrapper size={size} style={style} theme={theme}>
          <Typography content={text} />
          <Typography content={supportingText} />
        </TextWrapper>
      )}
    </Container>
  );
};
