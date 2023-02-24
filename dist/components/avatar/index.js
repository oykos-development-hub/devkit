import React, { useEffect, useRef, useState } from "react";
import { AvatarSizes } from "./types";
import { Container } from "./styles/container";
import { Image } from "./styles/image";
import { Typography } from "../typography";
import { Indicator } from "./styles/indicator";
import { Column } from "./styles/column";
import { Content } from "./styles/content";
export const Avatar = ({ src, size = AvatarSizes.lg, statusIcon = true, online = true, supportingText = true, style, alt, name, email, theme, }) => {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => setIsActive((prevState) => !prevState);
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
    return (React.createElement(Container, { ref: ref, size: size, style: style, supportingText: supportingText },
        React.createElement(Column, { isActive: isActive, size: size, style: { borderRadius: "50%" } },
            React.createElement(Image, { onClick: handleClick, src: src, alt: alt, size: size, style: style }),
            statusIcon && React.createElement(Indicator, { online: online, size: size, style: style, theme: theme })),
        supportingText && size !== AvatarSizes.xs && (React.createElement(Column, { size: size, style: style },
            React.createElement(Content, { size: size, style: style, theme: theme },
                React.createElement(Typography, { variant: "bodyMedium", fontWeight: "600", content: name, style: style }),
                React.createElement(Typography, { variant: "bodyMedium", content: email, style: style }))))));
};
//# sourceMappingURL=index.js.map