import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileUploadProps } from "./types";
import { Container } from "./styles/container";

export const FileUpload: React.FC<FileUploadProps> = ({ multiple, onFileUpload, content, icon, style, theme }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFileUpload(acceptedFiles);
      setIsDragging(false);
    },
    [onFileUpload],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: multiple,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    onDropRejected: () => setIsDragging(false),
  });

  return (
    <Container {...getRootProps()} isDragging={isDragging} icon={!!icon} style={style} theme={theme}>
      <input {...getInputProps()} />
      {icon && icon}
      {content && content}
    </Container>
  );
};
