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
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files) {
      onUpload(e.dataTransfer.files);
    }
  };

  const handleClick = () => uploadInputRef.current?.click();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files);
    }
  };

  return (
    <Container
      variant={variant}
      style={style}
      theme={theme}
      isDragging={isDragging}
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
              />
            )}
          </ButtonWrapper>
        </Content>
      )}
    </Container>
  );
};
