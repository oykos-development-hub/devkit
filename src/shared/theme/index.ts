import { DefaultTheme } from "styled-components";
import colors from "./color-types";

export const Theme: DefaultTheme = {
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
    lineHeight: {
        xs: "0.85rem",
        sm: "1.2rem",
        md: "2rem",
        lg: "3.4rem",
        xl: "5rem",
        xxl: "8.5rem",
    },
    fontFamily: {
        one: "Rubik, sans-serif",
    },
    palette: {
        ...colors,
    },
};
