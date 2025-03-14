import React, { useEffect, useRef, useState } from "react";
import { AvatarProps, AvatarSizes } from "./types";
import { Container, Image, Icon, Indicator, ImageWrapper, TextWrapper } from "./styles";
import { Typography } from "../typography";
import { UserIcon } from "../icon";
import { Theme } from "../../shared/theme";

import { TypographyVariants } from "../typography/variants";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = AvatarSizes.xl,
  statusIcon = true,
  online = true,
  supportingText = true,
  style,
  alt,
  name,
  email,
  theme = Theme,
  className,
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

  const variant = () => {
    if (size === AvatarSizes.sm || AvatarSizes.md) {
      return TypographyVariants.bodySmall;
    } else {
      return TypographyVariants.bodyMedium;
    }
  };

  return (
    <Container
      ref={ref}
      size={size}
      style={style}
      supportingText={size !== AvatarSizes.xs && supportingText}
      className={className}
    >
      <ImageWrapper onClick={handleClick} isActive={isActive} size={size} style={style} theme={theme}>
        {src ? (
          <Image src={src} alt={alt} size={size} style={style} />
        ) : (
          <Icon size={size} style={style} theme={theme}>
            <UserIcon stroke={theme.palette.primary500} />
          </Icon>
        )}
        {statusIcon && <Indicator online={online} size={size} style={style} theme={theme} />}
      </ImageWrapper>

      {supportingText && size !== AvatarSizes.xs && (
        <TextWrapper size={size} style={style} theme={theme}>
          <Typography variant={variant()} content={name} style={{ fontWeight: 600 }} />
          <Typography variant={variant()} content={email} style={{ color: "#757575" }} />
        </TextWrapper>
      )}
    </Container>
  );
};
