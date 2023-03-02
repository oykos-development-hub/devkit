import React, { useEffect, useRef, useState } from "react";
import { AvatarSizes } from "./types";
import { Container } from "./styles/container";
import { Image } from "./styles/image";
import { Typography } from "../typography";
import { Indicator } from "./styles/indicator";
import { Icon } from "./styles/icon";
import { UserIcon } from "../icon";
import { Theme } from "../../shared/theme";
import { ImageWrapper } from "./styles/imageWrapper";
import { TextWrapper } from "./styles/textWrapper";
import { TypographyVariants } from "../typography/variants";
export const Avatar = ({ src, size = AvatarSizes.lg, statusIcon = true, online = true, supportingText = true, style, alt, name, email, theme = Theme, }) => {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => setIsActive((prevState) => !prevState);
    const [variant, setVariant] = useState(TypographyVariants.bodyMedium);
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
    useEffect(() => {
        if (size === AvatarSizes.sm || AvatarSizes.md)
            setVariant(TypographyVariants.bodySmall);
        else
            setVariant(TypographyVariants.bodyMedium);
    }, [size]);
    return (React.createElement(Container, { ref: ref, size: size, style: style, supportingText: supportingText },
        React.createElement(ImageWrapper, { size: size, style: { borderRadius: "50%" } },
            src ? (React.createElement(Image, { onClick: handleClick, isActive: isActive, src: src, alt: alt, size: size, style: style })) : (React.createElement(Icon, { onClick: handleClick, size: size, style: style, theme: theme },
                React.createElement(UserIcon, null))),
            statusIcon && React.createElement(Indicator, { online: online, size: size, style: style, theme: theme })),
        supportingText && size !== AvatarSizes.xs && (React.createElement(TextWrapper, { size: size, style: style, theme: theme },
            React.createElement(Typography, { variant: variant, content: name, style: { fontWeight: 600 } }),
            React.createElement(Typography, { variant: variant, content: email, style: { color: "#757575" } })))));
};
//# sourceMappingURL=index.js.map