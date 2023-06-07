import React, { ChangeEvent, DragEvent, forwardRef, useRef, useState } from "react";
import { FileUploadProps } from "./types";
import { Container } from "./styles/container";
import { Content } from "./styles/content";
import { IconWrapper } from "./styles/iconWrapper";
import { TextWrapper } from "./styles/textWrapper";
import { ButtonWrapper } from "./styles/buttonWrapper";
import { Theme } from "../../shared/theme";
import { UploadCloudIcon, XIcon } from "../icon";
import { Typography } from "../typography";
import { Button } from "../button";
import { ControlWrapper } from "./styles/controlWrapper";
import { FileItem, FileList } from "./styles/fileList";

export const FileUpload: React.FC<FileUploadProps> = ({
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
  ...props
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const uploadInputRef = useRef<HTMLInputElement>(null);

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

  const handleClick = (e: any) => {
    e.preventDefault();
    !disabled && uploadInputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setFiles(e.target.files);
      !disabled && onUpload(e.target.files);
    }
  };

  const deleteFile = (index: number) => {
    const dt = new DataTransfer();

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (index !== i) dt.items.add(file);
      }
    }

    setFiles(dt.files);
    !disabled && onUpload(dt.files);
  };

  const defaultNote = `Select file${props.multiple ? "s" : ""} or drag and drop here`;

  return (
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
        <input type="file" ref={uploadInputRef} onChange={handleChange} {...props} />
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
                customButton
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

      {files && (
        <FileList>
          {Array.from(files).map((file, index) => (
            <FileItem theme={theme} key={`${file.name}-${index}`}>
              <Typography variant={"bodySmall"} content={file.name} />
              <XIcon width="10px" height="10px" onClick={() => deleteFile(index)} />
            </FileItem>
          ))}
        </FileList>
      )}
    </Container>
  );
};
