import React, { useCallback, useMemo } from "react";
import { Typography, TypographyVariants } from "@oykos-development/devkit-react-ts-styled-components";
import { GlobalStyle, Theme } from "../../shared/theme";
export const SSSTypography = (props) => {
    const fontToUse = useCallback(() => {
        var _a, _b;
        switch (props.variant) {
            case TypographyVariants.h1:
            case TypographyVariants.h2:
            case TypographyVariants.h3:
            case TypographyVariants.h4:
            case TypographyVariants.h5:
            case TypographyVariants.h6:
                return (_a = Theme === null || Theme === void 0 ? void 0 : Theme.fontFamily) === null || _a === void 0 ? void 0 : _a.one;
            default:
                return (_b = Theme === null || Theme === void 0 ? void 0 : Theme.fontFamily) === null || _b === void 0 ? void 0 : _b.two;
        }
    }, [props.variant]);
    const fontFamily = fontToUse();
    const mergedProps = useMemo(() => (Object.assign(Object.assign({}, props), { theme: Theme, style: Object.assign(Object.assign({}, props.style), { fontFamily: fontFamily }) })), [props]);
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyle, null),
        React.createElement(Typography, Object.assign({}, mergedProps))));
};
//# sourceMappingURL=index.js.map