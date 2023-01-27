var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import colors from "./color-types";
export var Theme = {
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
    palette: __assign({}, colors),
};
//# sourceMappingURL=index.js.map