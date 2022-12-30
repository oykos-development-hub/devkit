import React from "react";
import { TypographyProps } from "./types";
import { Body1, Body2, Button, Caption, Error, H1, H2, H3, H4, H5, H6, Overline, Sub1, Sub2 } from "./styles";

export const Typography = (props: TypographyProps): React.ReactElement => {
  const variant = props.variant ?? "p";

  switch (variant) {
    case "h1":
      return <H1 {...props} />;
      break;

    case "h2":
      return <H2 {...props} />;
      break;

    case "h3":
      return <H3 {...props} />;
      break;

    case "h4":
      return <H4 {...props} />;
      break;

    case "h5":
      return <H5 {...props} />;
      break;

    case "h6":
      return <H6 {...props} />;
      break;

    case "subtitle1":
      return <Sub1 {...props} />;
      break;

    case "subtitle2":
      return <Sub2 {...props} />;
      break;

    case "body1":
      return <Body1 {...props} />;
      break;

    case "body2":
      return <Body2 {...props} />;
      break;

    case "button":
      return <Button {...props} />;
      break;

    case "caption":
      return <Caption {...props} />;
      break;

    case "overline":
      return <Overline {...props} />;
      break;

    case "error":
      return <Error {...props} />;
      break;

    default:
      return <H1 as={"p"} {...props} />;
  }
};
