var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useRef, useState } from "react";
import { Theme } from "../../shared/theme";
import { Button } from "../button";
import { UploadCloudIcon, XIcon } from "../icon";
import { Typography } from "../typography";
import { ButtonWrapper } from "./styles/buttonWrapper";
import { Container } from "./styles/container";
import { Content } from "./styles/content";
import { ControlWrapper } from "./styles/controlWrapper";
import { FileItem } from "./styles/fileList";
import { IconWrapper } from "./styles/iconWrapper";
import { TextWrapper } from "./styles/textWrapper";
const copyFileList = (fileList) => {
    const fileArray = Array.from(fileList);
    const dataTransfer = new DataTransfer();
    for (let i = 0; i < fileArray.length; i++) {
        dataTransfer.items.add(fileArray[i]);
    }
    return dataTransfer.files;
};
const mergeFileLists = (list) => {
    const arrayOfFiles = [];
    list.forEach((fileList) => {
        arrayOfFiles.push(...Array.from(fileList));
    });
    const dataTransfer = new DataTransfer();
    for (let i = 0; i < arrayOfFiles.length; i++) {
        dataTransfer.items.add(arrayOfFiles[i]);
    }
    return dataTransfer.files;
};
export const FileUpload = (_a) => {
    var { variant = "primary", buttonVariant = "primary", buttonSize = "sm", onUpload, customContent, customButton, buttonText, note, hint, icon, style, theme = Theme, className, disabled = false, error, onDelete, accept, downloadButton, viewButton, multiple, files } = _a, props = __rest(_a, ["variant", "buttonVariant", "buttonSize", "onUpload", "customContent", "customButton", "buttonText", "note", "hint", "icon", "style", "theme", "className", "disabled", "error", "onDelete", "accept", "downloadButton", "viewButton", "multiple", "files"]);
    const [isDragging, setIsDragging] = useState(false);
    const uploadInputRef = useRef(null);
    const [internalFileList, setInternalFileList] = useState();
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
        e && e.preventDefault();
        !disabled && ((_a = uploadInputRef.current) === null || _a === void 0 ? void 0 : _a.click());
    };
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const newFiles = copyFileList(e.target.files);
            const mergedFileLists = fileList ? mergeFileLists([fileList, newFiles]) : newFiles;
            !disabled && onUpload(mergedFileLists);
            if (newFiles) {
                setInternalFileList((prev) => (prev ? mergeFileLists([prev, newFiles]) : newFiles));
            }
            uploadInputRef.current.value = "";
        }
    };
    const handleDelete = (index) => {
        const dt = new DataTransfer();
        if (internalFileList) {
            for (let i = 0; i < internalFileList.length; i++) {
                const file = internalFileList[i];
                if (index !== i)
                    dt.items.add(file);
            }
        }
        setInternalFileList(dt.files);
        !disabled && onUpload(dt.files);
    };
    const defaultNote = `Select file${multiple ? "s" : ""} or drag and drop here`;
    const fileList = files === undefined ? internalFileList : files;
    return (React.createElement("div", null,
        React.createElement(Container, { variant: variant, style: style, theme: theme, isDragging: isDragging, disabled: disabled, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: className },
            React.createElement(ControlWrapper, { variant: variant },
                React.createElement("input", Object.assign({ accept: accept, multiple: multiple, type: "file", ref: uploadInputRef, onChange: handleChange }, props)),
                icon ? (icon) : (React.createElement(IconWrapper, { customIcon: !!icon },
                    React.createElement(UploadCloudIcon, { stroke: theme.palette.gray900 }))),
                customContent ? (customContent) : (React.createElement(Content, { variant: variant },
                    React.createElement(TextWrapper, { variant: variant, theme: theme },
                        React.createElement(Typography, { variant: "bodySmall", content: note !== null && note !== void 0 ? note : defaultNote }),
                        hint && React.createElement(Typography, { variant: "helperText", content: hint })),
                    React.createElement(ButtonWrapper, { variant: variant }, customButton ? (React.cloneElement(customButton, { onClick: handleClick, disabled })) : (React.createElement(Button, { size: buttonSize, variant: buttonVariant, content: buttonText ? buttonText : "SELECT FILE", onClick: handleClick, theme: theme, disabled: disabled })))))),
            fileList &&
                Array.from(fileList).map((file, index) => (React.createElement(FileItem, { theme: theme, key: `${file.name}-${index}` },
                    React.createElement(Typography, { variant: "bodySmall", content: file.name }),
                    React.createElement(XIcon, { width: "10px", height: "10px", onClick: () => handleDelete(index) }))))),
        error && !disabled && (React.createElement(Typography, { content: error, variant: "helperText", style: { color: theme.palette.error500, marginTop: 10 } }))));
};
//# sourceMappingURL=index.js.map