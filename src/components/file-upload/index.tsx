import React, { ChangeEvent, DragEvent, useState } from "react";
import { FileUploadProps } from "./types";
import { Container } from "./styles/container";
import { ContentWrapper, IconWrapper, ButtonWrapper, TextWrapper } from "./styles/content";
import { Button, Typography } from "../../index";

export const FileUpload: React.FC<FileUploadProps> = ({
  variant = "primary",
  multiple = false,
  onUpload,
  customContent,
  icon,
  style,
  theme,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files) {
      onUpload(e.dataTransfer.files);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files);
    }
  };

  return (
    <Container
      variant={variant}
      icon={!!icon}
      style={style}
      theme={theme}
      isDragging={isDragging}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input type="file" id="upload" onChange={handleChange} multiple={multiple} />
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {customContent ? (
        customContent
      ) : (
        <ContentWrapper variant={variant}>
          <TextWrapper variant={variant}>
            <Typography variant={"bodySmall"} content={"Select a file or drag and drop here"} />
            <Typography variant={"helperText"} content={"JPG, PNG or PDF, file size no more than 10MB"} />
          </TextWrapper>

          <ButtonWrapper variant={variant}>
            <Button
              variant={"primary"}
              content={"SELECT FILE"}
              onClick={() => {
                const upload = document.getElementById("upload") as HTMLInputElement;
                upload.click();
              }}
            />
          </ButtonWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};
