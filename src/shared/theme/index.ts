import { DefaultTheme } from "styled-components";

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
  fontFamily: {
    one: "Rubik, sans-serif",
  },
  palette: {
    main: {
      one: "#0068B6FF",
      two: "#00A1E0FF",
      three: "#00a1e0",
      four: "#d5f1ff",
    },
    dark: {
      one: "#181818",
      two: "#212121",
      three: "#424242",
      four: "#616161",
    },
    light: {
      one: "#fafafa",
      two: "#f2f2f2",
      three: "#d9d9d9",
      four: "#9e9e9e",
      five: "#7f7f7f",
    },
    important: {
      one: "#ff0000",
      two: "#f44336",
      three: "#ff5722",
      four: "#fcae53",
      five: "#ffc107",
    },
    info: {
      one: "#00b300",
      two: "#00c47b",
      three: "#74b560",
      four: "#598d82",
      five: "#31b3e5",
    },
  },
};
