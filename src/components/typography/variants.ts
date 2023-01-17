export enum TypographyVariants {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  subtitle1 = "subtitle1",
  subtitle2 = "subtitle2",
  body1 = "body1",
  body2 = "body2",
  button = "button",
  caption = "caption",
  overline = "overline",
  error = "error",
}

export const VariantNames = Object.keys(TypographyVariants).map((key: string) => key);
