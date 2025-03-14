import React from "react";
import { TypographyVariants } from "./types";
import { BodyLarge, BodyMedium, BodySmall, Caption, Code, H1, H2, H3, H4, H5, H6, HelperText, LinkLarge, LinkMedium, LinkSmall, } from "./styles/variants";
export const Typography = (props) => {
    var _a;
    const variant = (_a = props.variant) !== null && _a !== void 0 ? _a : TypographyVariants.bodyMedium;
    switch (variant) {
        case "h1":
            return React.createElement(H1, Object.assign({}, props), props.content);
        case "h2":
            return React.createElement(H2, Object.assign({}, props), props.content);
        case "h3":
            return React.createElement(H3, Object.assign({}, props), props.content);
        case "h4":
            return React.createElement(H4, Object.assign({}, props), props.content);
        case "h5":
            return React.createElement(H5, Object.assign({}, props), props.content);
        case "h6":
            return React.createElement(H6, Object.assign({}, props), props.content);
        case "bodyLarge":
            return React.createElement(BodyLarge, Object.assign({}, props), props.content);
        case "bodyMedium":
            return React.createElement(BodyMedium, Object.assign({}, props), props.content);
        case "bodySmall":
            return React.createElement(BodySmall, Object.assign({}, props), props.content);
        case "linkLarge":
            return React.createElement(LinkLarge, Object.assign({}, props), props.content);
        case "linkMedium":
            return React.createElement(LinkMedium, Object.assign({}, props), props.content);
        case "linkSmall":
            return React.createElement(LinkSmall, Object.assign({}, props), props.content);
        case "caption":
            return React.createElement(Caption, Object.assign({}, props), props.content);
        case "helperText":
            return React.createElement(HelperText, Object.assign({}, props), props.content);
        case "code":
            return React.createElement(Code, Object.assign({}, props), props.content);
        default:
            return React.createElement(BodyMedium, Object.assign({}, props), props.content);
    }
};
//# sourceMappingURL=index.js.map