export interface FontSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface TypographyFontSize {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  body: {
    sm: string;
    md: string;
    lg: string;
  };
  link: {
    sm: string;
    md: string;
    lg: string;
  };
  caption: string;
  helperText: string;
  code: string;
}

export interface FontWeight {
  regular: string;
  semiBold: string;
  bold: string;
}

export type LineHeight = FontSize;
export type TypographyLineHeight = TypographyFontSize;

export interface FontFamily {
  one: string;
  two: string;
  three: string;
}
