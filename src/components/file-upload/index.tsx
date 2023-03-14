import React, { useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import { FileUploadProps } from "./types";

const UploadWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  padding: 30px;
`;

const UploadLabel = styled.p`
  font-size: 18px;
  color: #555;
`;

export const FileUpload: React.FC<FileUploadProps> = ({ multiple, style, theme, ...rest }) => {
  const [file, setFile] = useState<any>([]);

  const handleDrop = (acceptedFiles: React.SetStateAction<null>[] | any) => {
    setFile(acceptedFiles[0]);
  };

  return (
    <Dropzone onDrop={handleDrop} multiple={multiple} {...rest}>
      {({ getRootProps, getInputProps }) => (
        <UploadWrapper {...getRootProps()}>
          <input {...getInputProps()} />
          {file ? (
            <UploadLabel>File uploaded: {file?.name}</UploadLabel>
          ) : (
            <UploadLabel>Drag and drop your file here, or click to select a file</UploadLabel>
          )}
        </UploadWrapper>
      )}
    </Dropzone>
  );
};
