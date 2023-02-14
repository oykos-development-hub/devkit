import React from "react";
import { AvatarProps, AvatarSizes, AvatarVariants } from "./types";
import { Container } from "./styles/container";
import { Image } from "./styles/image";
import { Row } from "./styles/row";
import { Typography } from "../typography";
import { Flex } from "./styles/flex";
import { Indicator } from "./styles/indicator";

export const Avatar: React.FC<AvatarProps> = ({
  variant = AvatarVariants.circle,
  src,
  size = AvatarSizes.md,
  statusIcon = true,
  online = true,
  style,
  name,
  source,
  theme,
}) => {
  return (
    <Container style={style} theme={theme}>
      <Row variant={variant}>
        <Flex variant={variant}>
          <Image variant={variant} src={src} alt={name} size={size} style={style} />
          {statusIcon && variant === AvatarVariants.circle && (
            <Indicator online={online} size={size} style={style} theme={theme} />
          )}
        </Flex>
      </Row>
      {variant === AvatarVariants.square && (
        <>
          <Row variant={variant}>
            <Typography variant={"bodyMedium"} content={name} fontWeight={"600"} />
          </Row>
          <Row variant={variant}>
            <Flex variant={variant}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.66656 8.6666C6.95286 9.04936 7.31813 9.36606 7.73759 9.59523C8.15705 9.8244 8.62089 9.96068 9.09766 9.99483C9.57442 10.029 10.0529 9.96018 10.5008 9.79312C10.9486 9.62607 11.3553 9.36465 11.6932 9.0266L13.6932 7.0266C14.3004 6.39793 14.6364 5.55592 14.6288 4.68193C14.6212 3.80794 14.2706 2.9719 13.6526 2.35387C13.0346 1.73585 12.1985 1.38528 11.3246 1.37769C10.4506 1.37009 9.60856 1.70608 8.97989 2.31327L7.83322 3.45327M9.33322 7.33327C9.04692 6.95052 8.68165 6.63381 8.26219 6.40464C7.84273 6.17547 7.37888 6.03919 6.90212 6.00505C6.42536 5.9709 5.94683 6.03969 5.49899 6.20675C5.05115 6.37381 4.64448 6.63522 4.30656 6.97327L2.30656 8.97327C1.69936 9.60194 1.36338 10.444 1.37098 11.3179C1.37857 12.1919 1.72913 13.028 2.34716 13.646C2.96519 14.264 3.80123 14.6146 4.67522 14.6222C5.54921 14.6298 6.39121 14.2938 7.01989 13.6866L8.15989 12.5466"
                  stroke="#616161"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Typography variant={"linkMedium"} content={source} fontWeight={"400"} />
            </Flex>
          </Row>
        </>
      )}
    </Container>
  );
};
