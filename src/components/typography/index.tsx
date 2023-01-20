import React from "react";
import { TypographyProps, TypographyVariants } from "./types";
import { Body1, Body2, Button, Caption, Error, H1, H2, H3, H4, H5, H6, Overline, Sub1, Sub2 } from "./styles/variants";
import { StyledComponent } from "styled-components";

export const Typography = (props: TypographyProps): React.ReactElement => {
  const variant = props.variant ?? TypographyVariants.body2;
  let Component: StyledComponent<any, any>;
  const componentProps = { ...props };

  delete componentProps.content;

  switch (variant) {
    case "h1":
      Component = H1;
      break;
    case "h2":
      Component = H2;
      break;
    case "h3":
      Component = H3;
      break;
    case "h4":
      Component = H4;
      break;
    case "h5":
      Component = H5;
      break;
    case "h6":
      Component = H6;
      break;
    case "subtitle1":
      Component = Sub1;
      break;
    case "subtitle2":
      Component = Sub2;
      break;
    case "body1":
      Component = Body1;
      break;
    case "body2":
      Component = Body2;
      break;
    case "button":
      Component = Button;
      break;
    case "caption":
      Component = Caption;
      break;
    case "overline":
      Component = Overline;
      break;
    case "error":
      Component = Error;
      break;
    default:
      Component = Body1;
      break;
  }

  return <Component {...componentProps}>{props.content}</Component>;
};
