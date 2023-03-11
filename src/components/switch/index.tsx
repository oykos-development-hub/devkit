import React, { useEffect, useRef, useState } from "react";
import { SwitchProps } from "./types";
import { Container } from "./styles/container";
import { SwitchWrapper } from "./styles/switchWrapper";
import { Slider } from "./styles/slider";
import { Input } from "./styles/input";
import { TextWrapper } from "./styles/textWrapper";
import { Label } from "./styles/label";

export const Switch: React.FC<SwitchProps> = ({ content, size = "md", disabled = false, style, theme, onChange }) => {
  const ref = useRef<HTMLLabelElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: any) => {
    if (disabled) return;

    setIsActive(true);
    setIsChecked((prev) => !prev);
    onChange && onChange(e);
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
    <Container size={size} style={style} theme={theme} hasContent={!!content} onChange={handleChange}>
      <SwitchWrapper>
        <Label ref={ref} size={size} theme={theme} disabled={disabled} isChecked={isChecked} isActive={isActive}>
          <Input defaultChecked={isChecked} checked={isChecked} inputSize={size} disabled={disabled} />
          <Slider size={size} style={style} theme={theme} />
        </Label>
      </SwitchWrapper>

      {content && (
        <TextWrapper size={size} style={style} theme={theme}>
          {content}
        </TextWrapper>
      )}
    </Container>
  );
};
