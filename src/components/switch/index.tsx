import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { SwitchProps } from "./types";
import { Container } from "./styles/container";
import { SwitchWrapper } from "./styles/switchWrapper";
import { Slider } from "./styles/slider";
import { Input } from "./styles/input";
import { Label } from "./styles/label";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";

export const Switch: React.FC<SwitchProps> = ({
  checked,
  content,
  size = "md",
  disabled = false,
  style,
  theme = Theme,
  onChange,
  className,
  rtl,
}) => {
  const ref = useRef<HTMLLabelElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    setIsActive((prev) => !prev);
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
    <Container style={style} theme={theme} hasLabel={!!content} disabled={disabled} className={className} rtl={rtl}>
      <SwitchWrapper>
        <Label ref={ref} size={size} theme={theme} disabled={disabled} isChecked={checked} isActive={isActive}>
          <Input checked={checked} inputSize={size} disabled={disabled} onChange={handleChange} />
          <Slider size={size} theme={theme} disabled={disabled} />
        </Label>
      </SwitchWrapper>
      {typeof content === "string" ? <Typography variant="bodySmall" content={content} /> : content}
    </Container>
  );
};
