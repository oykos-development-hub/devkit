import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Container } from "./styles/container";
export const FileUpload = ({ multiple, onFileUpload, content, icon, style, theme }) => {
    const [isDragging, setIsDragging] = useState(false);
    const onDrop = useCallback((acceptedFiles) => {
        onFileUpload(acceptedFiles);
        setIsDragging(false);
    }, [onFileUpload]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: multiple,
        onDragEnter: () => setIsDragging(true),
        onDragLeave: () => setIsDragging(false),
        onDropRejected: () => setIsDragging(false),
    });
    return (React.createElement(Container, Object.assign({}, getRootProps(), { isDragging: isDragging, icon: !!icon, style: style, theme: theme }),
        React.createElement("input", Object.assign({}, getInputProps())),
        icon && icon,
        content && content));
};
//# sourceMappingURL=index.js.map