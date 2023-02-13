import React from "react";
import { TypographyProps, TypographyVariants } from "./types";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  Caption,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HelperText,
  LinkLarge,
  LinkMedium,
  LinkSmall,
} from "./styles/variants";

export const Typography = (props: TypographyProps): React.ReactElement => {
  const variant = props.variant ?? TypographyVariants.bodyMedium;

  switch (variant) {
    case "h1":
      return <H1 {...props}>{props.content}</H1>;
    case "h2":
      return <H2 {...props}>{props.content}</H2>;
    case "h3":
      return <H3 {...props}>{props.content}</H3>;
    case "h4":
      return <H4 {...props}>{props.content}</H4>;
    case "h5":
      return <H5 {...props}>{props.content}</H5>;
    case "h6":
      return <H6 {...props}>{props.content}</H6>;
    case "bodyLarge":
      return <BodyLarge {...props}>{props.content}</BodyLarge>;
    case "bodyMedium":
      return <BodyMedium {...props}>{props.content}</BodyMedium>;
    case "bodySmall":
      return <BodySmall {...props}>{props.content}</BodySmall>;
    case "linkLarge":
      return <LinkLarge {...props}>{props.content}</LinkLarge>;
    case "linkMedium":
      return <LinkMedium {...props}>{props.content}</LinkMedium>;
    case "linkSmall":
      return <LinkSmall {...props}>{props.content}</LinkSmall>;
    case "caption":
      return <Caption {...props}>{props.content}</Caption>;
    case "helperText":
      return <HelperText {...props}>{props.content}</HelperText>;
    case "code":
      return <Code {...props}>{props.content}</Code>;
    default:
      return <BodyMedium {...props}>{props.content}</BodyMedium>;
  }
};
