import React from "react";
import { ButtonProps } from "./types";
import { Primary } from "./variants/primary";
import { Secondary } from "./variants/secondary";
import { Tertiary } from "./variants/tertiary";

export const Button = (props: ButtonProps) => {
    const variant = props.variant ?? "primary";

    if (variant === "primary") return <Primary {...props} />;
    if (variant === "secondary") return <Secondary {...props} />;
    if (variant === "tertiary") return <Tertiary {...props} />;

    return <Primary {...props} />;
};
