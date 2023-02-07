export enum TypographyVariants {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  bodyLarge = "bodyLarge",
  bodyMedium = "bodyMedium",
  bodySmall = "bodySmall",
  linkLarge = "linkLarge",
  linkMedium = "linkMedium",
  linkSmall = "linkSmall",
  caption = "caption",
  helperText = "helperText",
  code = "code",
}

export enum WeightVariants {
  regular = "400",
  semiBold = "600",
  bold = "700",
}

export const VariantNames = Object.keys(TypographyVariants).map((key: string) => key);
