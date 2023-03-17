import React, { ChangeEvent, DragEvent, useState } from "react";
import { FileUploadProps } from "./types";
import { Container } from "./styles/container";
import { rem } from "polished";
import { Content } from "../datepicker/styles/content";

export const FileUpload: React.FC<FileUploadProps> = ({ multiple = false, onUpload, content, icon, style, theme }) => {
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
      icon={!!icon}
      style={style}
      theme={theme}
      isDragging={isDragging}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label htmlFor="upload">
        <Content>
          <input type="file" onChange={handleChange} multiple={multiple} id="upload" />
          {icon && icon}
          {content && content}
        </Content>
      </label>
    </Container>
  );
};
