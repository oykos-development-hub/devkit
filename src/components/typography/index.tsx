import React from "react";
import { TypographyProps } from "./types";
import { Body1, Body2, Button, Caption, Error, H1, H2, H3, H4, H5, H6, Overline, Sub1, Sub2 } from "./styles";

export const Typography = (props: TypographyProps): React.ReactElement => {
  const variant = props.variant ?? "p";

  switch (variant) {
    case "h1":
      return <H1 {...props} />;

    case "h2":
      return <H2 {...props} />;

    case "h3":
      return <H3 {...props} />;

    case "h4":
      return <H4 {...props} />;

    case "h5":
      return <H5 {...props} />;

    case "h6":
      return <H6 {...props} />;

    case "subtitle1":
      return <Sub1 {...props} />;

    case "subtitle2":
      return <Sub2 {...props} />;

    case "body1":
      return <Body1 {...props} />;

    case "body2":
      return <Body2 {...props} />;

    case "button":
      return <Button {...props} />;

    case "caption":
      return <Caption {...props} />;

    case "overline":
      return <Overline {...props} />;

    case "error":
      return <Error {...props} />;

    default:
      return <H1 as={"p"} {...props} />;
  }
};
