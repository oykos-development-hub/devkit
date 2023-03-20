import React, { useState } from "react";
import { Container } from "./styles/container";
import { Content } from "./styles/content";
import { IconWrapper } from "./styles/iconWrapper";
import { TextWrapper } from "./styles/textWrapper";
import { ButtonWrapper } from "./styles/buttonWrapper";
import { Button, Typography, UploadIcon } from "../../index";
import { Theme } from "../../shared/theme";
export const FileUpload = ({ variant = "primary", buttonVariant, multiple = false, onUpload, customContent, buttonText, note, hint, icon, style, theme = Theme, }) => {
    const [isDragging, setIsDragging] = useState(false);
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = () => {
        setIsDragging(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) {
            onUpload(e.dataTransfer.files);
        }
    };
    const handleClick = () => {
        const upload = document.getElementById("upload");
        upload.click();
    };
    const handleChange = (e) => {
        if (e.target.files) {
            onUpload(e.target.files);
        }
    };
    return (React.createElement(Container, { variant: variant, style: style, theme: theme, isDragging: isDragging, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop },
        React.createElement("input", { type: "file", id: "upload", onChange: handleChange, multiple: multiple }),
        icon ? (icon) : (React.createElement(IconWrapper, { customIcon: !!icon },
            React.createElement(UploadIcon, null))),
        customContent ? (customContent) : (React.createElement(Content, { variant: variant },
            React.createElement(TextWrapper, { variant: variant, theme: theme },
                note && React.createElement(Typography, { variant: "bodySmall", content: note }),
                hint && React.createElement(Typography, { variant: "helperText", content: hint })),
            React.createElement(ButtonWrapper, { variant: variant },
                React.createElement(Button, { variant: buttonVariant ? buttonVariant : "primary", content: buttonText ? buttonText : "SELECT FILE", onClick: handleClick }))))));
};
//# sourceMappingURL=index.js.map