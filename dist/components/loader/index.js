import React, { useMemo } from "react";
import { One } from "./one";
import { Two } from "./two";
const resolveSecondaryValue = (value) => {
    if (!value)
        return "";
    const numericValue = parseFloat(value);
    const unitValue = value.replace(new RegExp(String(numericValue), "g"), "");
    return String(numericValue + 20) + unitValue;
};
export const Loader = (props) => {
    var _a;
    const variant = (_a = props.variant) !== null && _a !== void 0 ? _a : "one";
    const secondaryWidth = useMemo(() => resolveSecondaryValue(props.width), []);
    const secondaryHeight = useMemo(() => resolveSecondaryValue(props.height), []);
    if (variant === "one")
        return React.createElement(One, Object.assign({}, props, { secondaryWidth: secondaryWidth, secondaryHeight: secondaryHeight }));
    if (variant === "two")
        return React.createElement(Two, Object.assign({}, props, { secondaryWidth: secondaryWidth, secondaryHeight: secondaryHeight }));
    return React.createElement(One, Object.assign({}, props));
};
//# sourceMappingURL=index.js.map