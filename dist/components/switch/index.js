import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styles/container";
import { SwitchWrapper } from "./styles/switchWrapper";
import { Slider } from "./styles/slider";
import { Input } from "./styles/input";
import { TextWrapper } from "./styles/textWrapper";
import { Typography } from "../typography";
import { Label } from "./styles/label";
export const Switch = ({ text = "", supportingText = "", size = "md", disabled = false, style, theme, }) => {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const withContent = !!(text || supportingText);
    const handleClick = () => {
        if (disabled)
            return;
        setIsActive(true);
        setIsChecked((prev) => !prev);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsActive(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return (React.createElement(Container, { size: size, style: style, theme: theme, withContent: withContent },
        React.createElement(SwitchWrapper, null,
            React.createElement(Label, { ref: ref, size: size, theme: theme, disabled: disabled, isChecked: isChecked, isActive: isActive },
                React.createElement(Input, { defaultChecked: isChecked, inputSize: size, disabled: disabled }),
                React.createElement(Slider, { checked: isChecked, size: size, style: style, theme: theme, onClick: handleClick }))),
        withContent && (React.createElement(TextWrapper, { size: size, style: style, theme: theme },
            React.createElement(Typography, { content: text }),
            React.createElement(Typography, { content: supportingText })))));
};
//# sourceMappingURL=index.js.map