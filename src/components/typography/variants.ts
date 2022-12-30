export enum TypographyVariants {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  subtitle1 = "span",
  subtitle2 = "span",
  body1 = "p",
  body2 = "p",
  button = "span",
  caption = "label",
  overline = "p",
  error = "span",
}

export const VariantNames = Object.keys(TypographyVariants).map((key: string) => key);
