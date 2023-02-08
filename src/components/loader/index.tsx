import React, { useMemo } from "react";
import { LoaderProps } from "./types";
import { One } from "./one";
import { Two } from "./two";

const resolveSecondaryValue = (value?: string): string => {
    if (!value) return "";

    const numericValue = parseFloat(value);
    const unitValue = value.replace(new RegExp(String(numericValue), "g"), "");

    return String(numericValue + 20) + unitValue;
};

export const Loader = (props: LoaderProps): React.ReactElement => {
    const variant = props.variant ?? "one";
    const secondaryWidth = useMemo(() => resolveSecondaryValue(props.width), []);
    const secondaryHeight = useMemo(() => resolveSecondaryValue(props.height), []);

    if (variant === "one") return <One {...props} secondaryWidth={secondaryWidth} secondaryHeight={secondaryHeight} />;
    if (variant === "two") return <Two {...props} secondaryWidth={secondaryWidth} secondaryHeight={secondaryHeight} />;

    return <One {...props} />;
};
