import React, { ChangeEvent, DragEvent, useRef, useState } from "react";
import { FileUploadProps } from "./types";
import { Container } from "./styles/container";
import { Content } from "./styles/content";
import { IconWrapper } from "./styles/iconWrapper";
import { TextWrapper } from "./styles/textWrapper";
import { ButtonWrapper } from "./styles/buttonWrapper";
import { Theme } from "../../shared/theme";
import { UploadCloudIcon } from "../icon";
import { Typography } from "../typography";
import { Button } from "../button";

export const FileUpload: React.FC<FileUploadProps> = ({
  variant = "primary",
  buttonVariant = "primary",
  buttonSize = "sm",
  multiple = false,
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
}) => {
  const [isDragging, setIsDragging] = useState(false);
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
      !disabled && onUpload(e.target.files);
    }
  };

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
      <input type="file" ref={uploadInputRef} onChange={handleChange} multiple={multiple} />
      {icon ? (
        icon
      ) : (
        <IconWrapper customIcon={!!icon}>
          <UploadCloudIcon />
        </IconWrapper>
      )}
      {customContent ? (
        customContent
      ) : (
        <Content variant={variant}>
          <TextWrapper variant={variant} theme={theme}>
            {note && <Typography variant={"bodySmall"} content={note} />}
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
    </Container>
  );
};
