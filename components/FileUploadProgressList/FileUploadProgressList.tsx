import {
    ArrowDownIcon,
    ArrowUpload,
    CloseIcon,
    CompletedIcon
} from "../Icons/Icons";

import { Loader } from "devkit/Loader/Loader";
import React from "react";

interface IFileUploadProgressList {
    folder: Array<File> | [] | Array<{ name: string }>;
    completedList: Array<{ completed: number }>;
    visible: boolean;
    hidden?: boolean;
    download?: boolean;
    handleArrowClick?: () => void;
    handleClose?: () => void;
}

const FileUploadProgressList = ({
    completedList,
    folder,
    visible,
    hidden,
    download,
    handleClose,
    handleArrowClick
}: IFileUploadProgressList) => {
    const itemsLeft = completedList.filter(e => e.completed < 100).length;
    const totalProgress = (
        completedList.reduce((a, b) => a + b.completed, 0) /
        completedList.length
    ).toFixed(1);
    return (
        <div
            className={`fileUploadProgressList ${visible ? "visible" : ""} ${
                hidden ? "hidden" : ""
            }`}
        >
            <div className="bar d-flex justify-content-between align-items-center px-10">
                <div className="leftSide d-flex">
                    <div className="completed mr-20 d-flex align-items-center justify-content-center">
                        <ArrowUpload className="arrowUpload" width={14} />
                        <span className="f-s-14 ml-5">{totalProgress}%</span>
                    </div>
                    <div className="left f-s-14 d-flex align-items-center">
                        {itemsLeft !== 0 && <span>{itemsLeft} items left</span>}
                    </div>
                </div>
                <div className="rightSide d-flex align-items-center">
                    <div
                        className="icon mr-10"
                        onClick={() => handleArrowClick && handleArrowClick()}
                    >
                        <ArrowDownIcon
                            className={`pointer transition-2 ${
                                hidden ? "rotate-180" : ""
                            }`}
                            width={14}
                        />
                    </div>
                    <div
                        className="icon"
                        onClick={() => handleClose && handleClose()}
                    >
                        <CloseIcon className="pointer pt-5" width={15} />
                    </div>
                </div>
            </div>
            <div className={`items px-10 pb-5`}>
                {completedList.map((e, index) => (
                    <div
                        className="item d-flex align-items-center d-flex justify-content-between"
                        key={index}
                    >
                        <div className="leftSide d-flex align-items-center">
                            <ArrowUpload
                                className={`arrowUpload ${
                                    download ? "rotate-180" : ""
                                }`}
                                width={14}
                            />
                            <span className="f-s-14 ml-20">
                                {folder.length > 0 && folder[index].name}
                            </span>
                        </div>
                        <div className="rightSide d-flex align-items-center justify-content-center">
                            {e.completed !== 100 ? (
                                <Loader height={40} />
                            ) : (
                                <>
                                    <CompletedIcon
                                        className="theme2Icon pr-5"
                                        height={25}
                                    />
                                </>
                            )}
                        </div>
                        <span
                            className="progressBar"
                            style={{ width: `${e.completed}%` }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileUploadProgressList;
