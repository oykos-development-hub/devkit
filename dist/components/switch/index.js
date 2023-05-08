import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styles/container";
import { SwitchWrapper } from "./styles/switchWrapper";
import { Slider } from "./styles/slider";
import { Input } from "./styles/input";
import { Label } from "./styles/label";
import { Theme } from "../../shared/theme";
export const Switch = ({ checked = false, content, size = "md", disabled = false, style, theme = Theme, onChange, className, }) => {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const handleChange = (e) => {
        if (disabled)
            return;
        setIsActive(true);
        onChange && onChange(e);
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
    return (React.createElement(Container, { style: style, theme: theme, hasContent: !!content, disabled: disabled, className: className },
        React.createElement(SwitchWrapper, null,
            React.createElement(Label, { ref: ref, size: size, theme: theme, disabled: disabled, isChecked: checked, isActive: isActive },
                React.createElement(Input, { checked: checked, inputSize: size, disabled: disabled, onChange: handleChange }),
                React.createElement(Slider, { size: size, theme: theme }))),
        content && content));
};
//# sourceMappingURL=index.js.map