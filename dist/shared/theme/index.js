import { createGlobalStyle } from "styled-components";
import colors from "./color-types";
export const GlobalStyle = createGlobalStyle `
@font-face {
  font-family: 'Source Sans Pro';
  src: url("/fonts/SourceSansPro-Regular.ttf") format('truetype'),
       url("/fonts/SourceSansPro-SemiBold.ttf") format('truetype');
  font-weight: 400,700; 
}
@font-face {
  font-family: 'Merriweather';
  src: url("/fonts/Merriweather-Bold.ttf") format('truetype');
  font-weight: 700
}
`;
export const Theme = {
    mediaScreenBreakpoints: {
        xs: "480px",
        sm: "576px",
        md: "767px",
        lg: "992px",
        xl: "1200px",
        xxl: "1600px",
    },
    borderRadius: {
        xs: "1px",
        sm: "2px",
        md: "4px",
        lg: "8px",
        xl: "16px",
        full: "50%",
    },
    borderWidth: {
        xs: "1px",
        sm: "2px",
        md: "3px",
        lg: "4px",
    },
    fontSize: {
        xs: "0.6rem",
        sm: "1rem",
        md: "1.6rem",
        lg: "2.8rem",
        xl: "4rem",
        xxl: "7rem",
    },
    fontWeight: {
        regular: "400",
        semiBold: "600",
        bold: "700",
    },
    typographyFontSize: {
        h1: "3.375rem",
        h2: "2.625rem",
        h3: "2rem",
        h4: "1.75rem",
        h5: "1.25rem",
        h6: "1.125rem",
        body: {
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
        },
        link: {
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
        },
        caption: "0.75rem",
        helperText: "0.75rem",
        code: "0.875rem",
    },
    typographyLineHeight: {
        h1: "4rem",
        h2: "3.125rem",
        h3: "2.5rem",
        h4: "2.25rem",
        h5: "1.75rem",
        h6: "1.625rem",
        body: {
            sm: "1.25rem",
            md: "1.5rem",
            lg: "1.625rem",
        },
        link: {
            sm: "1.25rem",
            md: "1.5rem",
            lg: "1.625rem",
        },
        caption: "1rem",
        helperText: "1rem",
        code: "1.25rem",
    },
    lineHeight: {
        xs: "0.85rem",
        sm: "1.2rem",
        md: "2rem",
        lg: "3.4rem",
        xl: "5rem",
        xxl: "8.5rem",
    },
    fontFamily: {
        one: "Merriweather, sans-serif",
        two: "Source Sans Pro, sans-serif",
        three: "JetBrains Mono",
    },
    palette: Object.assign({}, colors),
};
//# sourceMappingURL=index.js.map