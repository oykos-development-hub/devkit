import React, { useEffect, useRef, useState } from "react";
import { AvatarProps, AvatarSizes } from "./types";
import { Container } from "./styles/container";
import { Image } from "./styles/image";
import { Typography } from "../typography";
import { Indicator } from "./styles/indicator";
import { Column } from "./styles/column";
import { Content } from "./styles/content";
import { Icon } from "./styles/icon";
import { UserIcon } from "../icon";
import { Theme } from "../../shared/theme";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = AvatarSizes.lg,
  statusIcon = true,
  online = true,
  supportingText = true,
  style,
  alt,
  name,
  email,
  theme = Theme,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => setIsActive((prevState) => !prevState);

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
    <Container ref={ref} size={size} style={style} supportingText={supportingText}>
      <Column isActive={isActive} size={size} style={{ borderRadius: "50%" }}>
        {src ? (
          <Image onClick={handleClick} src={src} alt={alt} size={size} style={style} />
        ) : (
          <Icon onClick={handleClick} size={size} style={style} theme={theme}>
            <UserIcon />
          </Icon>
        )}
        {statusIcon && <Indicator online={online} size={size} style={style} theme={theme} />}
      </Column>

      {supportingText && size !== AvatarSizes.xs && (
        <Column size={size} style={style}>
          <Content size={size} style={style} theme={theme}>
            <Typography variant={"bodyMedium"} content={name} style={style} />
            <Typography variant={"bodyMedium"} content={email} style={style} />
          </Content>
        </Column>
      )}
    </Container>
  );
};
