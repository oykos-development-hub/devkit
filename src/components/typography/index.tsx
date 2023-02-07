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
    case "bodyLarge":
      return <BodyLarge {...props} />;
    case "bodyMedium":
      return <BodyMedium {...props} />;
    case "bodySmall":
      return <BodySmall {...props} />;
    case "linkLarge":
      return <LinkLarge {...props} />;
    case "linkMedium":
      return <LinkMedium {...props} />;
    case "linkSmall":
      return <LinkSmall {...props} />;
    case "caption":
      return <Caption {...props} />;
    case "helperText":
      return <HelperText {...props} />;
    case "code":
      return <Code {...props} />;
    default:
      return <H1 {...props} />;
  }
};
