import React, { useRef, useState } from "react";
import { Container } from "./styles/container";
import { Content } from "./styles/content";
import { IconWrapper } from "./styles/iconWrapper";
import { TextWrapper } from "./styles/textWrapper";
import { ButtonWrapper } from "./styles/buttonWrapper";
import { Theme } from "../../shared/theme";
import { UploadCloudIcon } from "../icon";
import { Typography } from "../typography";
import { Button } from "../button";
export const FileUpload = ({ variant = "primary", buttonVariant = "primary", buttonSize = "sm", multiple = false, onUpload, customContent, customButton, buttonText, note, hint, icon, style, theme = Theme, className, disabled = false, }) => {
    const [isDragging, setIsDragging] = useState(false);
    const uploadInputRef = useRef(null);
    const handleDragOver = (e) => {
        e.preventDefault();
        !disabled && setIsDragging(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        !disabled && setIsDragging(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) {
            !disabled && onUpload(e.dataTransfer.files);
        }
    };
    const handleClick = (e) => {
        var _a;
        e.preventDefault();
        !disabled && ((_a = uploadInputRef.current) === null || _a === void 0 ? void 0 : _a.click());
    };
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files) {
            !disabled && onUpload(e.target.files);
        }
    };
    return (React.createElement(Container, { variant: variant, style: style, theme: theme, isDragging: isDragging, disabled: disabled, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: className },
        React.createElement("input", { type: "file", ref: uploadInputRef, onChange: handleChange, multiple: multiple }),
        icon ? (icon) : (React.createElement(IconWrapper, { customIcon: !!icon },
            React.createElement(UploadCloudIcon, { stroke: theme.palette.gray900 }))),
        customContent ? (customContent) : (React.createElement(Content, { variant: variant },
            React.createElement(TextWrapper, { variant: variant, theme: theme },
                note && React.createElement(Typography, { variant: "bodySmall", content: note }),
                hint && React.createElement(Typography, { variant: "helperText", content: hint })),
            React.createElement(ButtonWrapper, { variant: variant }, customButton ? (customButton) : (React.createElement(Button, { size: buttonSize, variant: buttonVariant, content: buttonText ? buttonText : "SELECT FILE", onClick: handleClick, theme: theme, disabled: disabled })))))));
};
//# sourceMappingURL=index.js.map