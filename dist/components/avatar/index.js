import React, { useEffect, useRef, useState } from "react";
import { AvatarSizes } from "./types";
import { Container } from "./styles/container";
import { Image } from "./styles/image";
import { Typography } from "../typography";
import { Indicator } from "./styles/indicator";
import { Column } from "./styles/column";
import { Content } from "./styles/content";
export var Avatar = function (_a) {
    var src = _a.src, _b = _a.size, size = _b === void 0 ? AvatarSizes.lg : _b, _c = _a.statusIcon, statusIcon = _c === void 0 ? true : _c, _d = _a.online, online = _d === void 0 ? true : _d, _e = _a.supportingText, supportingText = _e === void 0 ? true : _e, style = _a.style, alt = _a.alt, name = _a.name, email = _a.email, theme = _a.theme;
    var ref = useRef(null);
    var _f = useState(false), isActive = _f[0], setIsActive = _f[1];
    var handleClick = function () { return setIsActive(function (prevState) { return !prevState; }); };
    useEffect(function () {
        var handleClickOutside = function (e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsActive(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
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