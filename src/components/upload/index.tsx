import React, { useRef, useState } from "react";
import { UploadProps } from "./types";
import { Button } from "../button";
import { Uploader } from "./styles";
import { Typography } from "../typography";
import EyeIcon from "../icon/variations/EyeIcon";
import TrashIcon from "../icon/variations/TrashIcon";
import ListIcon from "../icon/variations/ListIcon";
import UploadIcon from "../icon/variations/UploadIcon";

interface Map {
  [key: string]: any;
}

const FileUpload: React.FC<UploadProps> = ({
  handleUpload,
  maxFileSizeInBytes = 500000,
  multiple = false,
  showList = false,
  dropZone = false,
  dragNDropTitle = "Drag & drop folder here",
  buttonContent = "Choose folder",
  ...props
}) => {
  const fileInputField = useRef<any | null>(null);
  const [files, setFiles] = useState<Map>({});
  const [error, setError] = useState<string[]>([]);

  const convertNestedObjectToArray = (nestedObj: any): File[] => Object.keys(nestedObj).map((key) => nestedObj[key]);

  const handleUploadBtnClick = () => {
    fileInputField?.current?.click();
  };

  const handleNewFileUpload = (e: any) => {
    const { files: newFiles } = e.target;

    if (newFiles.length) {
      const updatedFiles = addNewFiles(newFiles);

      setFiles(updatedFiles);
      callUpdateFiles(updatedFiles);
    }
  };

  const addNewFiles = (newFiles: any) => {
    if (!multiple) {
      if (newFiles[0]?.size < maxFileSizeInBytes) {
        newFiles[0].url = URL.revokeObjectURL(newFiles[0]);

        setError([]);
        return newFiles[0];
      }
      return setError([newFiles[0].name]);
    }

    Object.keys(newFiles).forEach((file: any) => {
      if (newFiles[file].size < maxFileSizeInBytes) {
        newFiles[file].url = URL.createObjectURL(newFiles[file]);
        files[newFiles[file].name] = newFiles[file];
      } else {
        setError([...error, newFiles[file].name]);
      }
    });

    return { ...files };
  };

  const callUpdateFiles = (items: any) => {
    if (!multiple && handleUpload) return handleUpload(items);

    const filesAsArray = convertNestedObjectToArray(items);

    if (handleUpload) handleUpload(filesAsArray);
  };

  const removeFile = (fileName: string) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFiles({ ...files });
  };

  const viewFile = (file: any) => {
    window.open(file?.url, "_blank");
  };

  const renderErrorMessage = () =>
    error.length == 1 ? `File ${error[0]} is too large!` : `Files ${error.join(", ")} are too large!`;

  return (
    <Uploader {...props} hasList={files && !!Object.keys(files).length && showList}>
      <div className={`${dropZone ? "upload-drop-zone" : ""}`}>
        {dropZone && (
          <>
            <UploadIcon />
            <Typography content={dragNDropTitle} variant="body1" />
          </>
        )}

        <Button onClick={handleUploadBtnClick} content={buttonContent} />
        <input type="file" ref={fileInputField} onInput={handleNewFileUpload} title="" value="" multiple={multiple} />
      </div>

      {!!error.length && (
        // <Notification
        //   variant="error"
        //   message={renderErrorMessage()}
        //   closeIcon
        //   className="bottom-left"
        //   onClose={() => setError([])}
        // />
        <p>{renderErrorMessage()}</p>
      )}

      {showList && (
        <div id="upload-list">
          {Object.keys(files).map((fileName) => {
            const file = files[fileName];

            return (
              <div key={fileName}>
                <div>
                  <ListIcon />
                  <Typography content={file?.name} variant="body1" />
                </div>

                <div className="action-buttons">
                  <span
                    onClick={() => {
                      viewFile(file);
                    }}
                  >
                    <EyeIcon size="1.25em" />
                  </span>
                  <span
                    onClick={() => {
                      removeFile(file.name);
                    }}
                  >
                    <TrashIcon size="1.25em" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Uploader>
  );
};

export default FileUpload;
