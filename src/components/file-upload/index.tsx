import React, { ChangeEvent, DragEvent, useRef, useState } from "react";
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
import { FileUploadProps } from "./types";

const copyFileList = (fileList: FileList) => {
  const fileArray = Array.from(fileList);
  const dataTransfer = new DataTransfer();

  for (let i = 0; i < fileArray.length; i++) {
    dataTransfer.items.add(fileArray[i]);
  }

  return dataTransfer.files;
};

export const FileUpload = ({
  variant = "primary",
  buttonVariant = "primary",
  buttonSize = "sm",
  onUpload,
  customContent,
  customButton,
  buttonText,
  note,
  hint,
  icon,
  style,
  theme = Theme,
  className,
  disabled = false,
  error,
  onDelete,
  accept,
  downloadButton,
  viewButton,
  multiple,
  files,
  ...props
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const uploadInputRef = useRef<HTMLInputElement>(null);
  // This is for backward compatibility
  const [internalFileList, setInternalFileList] = useState<FileList>();

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    !disabled && setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement> | any) => {
    e.preventDefault();
    !disabled && setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files) {
      !disabled && onUpload(e.dataTransfer.files);
    }
  };

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e && e.preventDefault();
    !disabled && uploadInputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const fileList = copyFileList(e.target.files);

      !disabled && onUpload(fileList);
      setInternalFileList(fileList);
      uploadInputRef.current!.value = "";
    }
  };

  const handleDelete = (index: number) => {
    const dt = new DataTransfer();

    if (internalFileList) {
      for (let i = 0; i < internalFileList.length; i++) {
        const file = internalFileList[i];
        if (index !== i) dt.items.add(file);
      }
    }

    setInternalFileList(dt.files);
    !disabled && onUpload(dt.files);
  };

  const defaultNote = `Select file${multiple ? "s" : ""} or drag and drop here`;

  const fileList = files === undefined ? internalFileList : files;

  return (
    <div>
      <Container
        variant={variant}
        style={style}
        theme={theme}
        isDragging={isDragging}
        disabled={disabled}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={className}
      >
        <ControlWrapper variant={variant}>
          <input
            accept={accept}
            multiple={multiple}
            type="file"
            ref={uploadInputRef}
            onChange={handleChange}
            {...props}
          />
          {icon ? (
            icon
          ) : (
            <IconWrapper customIcon={!!icon}>
              <UploadCloudIcon stroke={theme.palette.gray900} />
            </IconWrapper>
          )}
          {customContent ? (
            customContent
          ) : (
            <Content variant={variant}>
              <TextWrapper variant={variant} theme={theme}>
                <Typography variant={"bodySmall"} content={note ?? defaultNote} />
                {hint && <Typography variant={"helperText"} content={hint} />}
              </TextWrapper>

              <ButtonWrapper variant={variant}>
                {customButton ? (
                  React.cloneElement(customButton, { onClick: handleClick, disabled })
                ) : (
                  <Button
                    size={buttonSize}
                    variant={buttonVariant}
                    content={buttonText ? buttonText : "SELECT FILE"}
                    onClick={handleClick}
                    theme={theme}
                    disabled={disabled}
                  />
                )}
              </ButtonWrapper>
            </Content>
          )}
        </ControlWrapper>

        {fileList &&
          Array.from(fileList).map((file, index) => (
            <FileItem theme={theme} key={`${file.name}-${index}`}>
              <Typography variant={"bodySmall"} content={file.name} />
              <XIcon width="10px" height="10px" onClick={() => handleDelete(index)} />
            </FileItem>
          ))}
      </Container>
      {error && !disabled && (
        <Typography content={error} variant="helperText" style={{ color: theme.palette.error500, marginTop: 10 }} />
      )}
    </div>
  );
};
