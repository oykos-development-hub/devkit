import React from "react";
import { TypographyProps } from "./types";
import {
  StyledTypographyBody1,
  StyledTypographyBody2,
  StyledTypographyButton,
  StyledTypographyCaption,
  StyledTypographyH1,
  StyledTypographyH2,
  StyledTypographyH3,
  StyledTypographyH4,
  StyledTypographyH5,
  StyledTypographyH6,
  StyledTypographyOverline,
  StyledTypographySub1,
  StyledTypographySub2,
  StyledTypographyError,
} from "./styles";

export const Typography = (props: TypographyProps): React.ReactElement => {
  const variant = props.variant ?? "p";

  if (variant === "h1") return <StyledTypographyH1 {...props} />;
  if (variant === "h2") return <StyledTypographyH2 {...props} />;
  if (variant === "h3") return <StyledTypographyH3 {...props} />;
  if (variant === "h4") return <StyledTypographyH4 {...props} />;
  if (variant === "h5") return <StyledTypographyH5 {...props} />;
  if (variant === "h6") return <StyledTypographyH6 {...props} />;
  if (variant === "subtitle1") return <StyledTypographySub1 {...props} />;
  if (variant === "subtitle2") return <StyledTypographySub2 {...props} />;
  if (variant === "body1") return <StyledTypographyBody1 {...props} />;
  if (variant === "body2") return <StyledTypographyBody2 {...props} />;
  if (variant === "button") return <StyledTypographyButton {...props} />;
  if (variant === "caption") return <StyledTypographyCaption {...props} />;
  if (variant === "overline") return <StyledTypographyOverline {...props} />;
  if (variant === "error") return <StyledTypographyError {...props} />;

  return <StyledTypographyH1 as={"p"} {...props} />;
};
