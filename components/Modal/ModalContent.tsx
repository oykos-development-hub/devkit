import React from "react";
import CustomButton from "devkit/Form/CustomButton/CustomButton";
import Translate from "functions/utilFunctions/translate";
import { SuccessIcon, WarningIcon } from "../../components/Icons/Icons";

interface IModalContent {
    type: "success" | "warning" | "failure" | "question";
    modalName: string;
    item?: any;
    text: string;
    title: string;
    buttonText?: string;
    toggleModal: (modalName: string) => void;
    deleteItem?: (item?: any) => void;
    cancelDelete?: (modalName: string) => void;
}

export const ModalContent = ({
    type,
    modalName,
    title,
    item,
    toggleModal,
    text,
    buttonText,
    deleteItem,
    cancelDelete,
}: IModalContent) => {
    return (
        <div className="modal-content d-flex flex-column align-items-center justify-content-between min-h-200">
            <span className="title text-center w-100perc f-s-18 uppercase py-10">
                <Translate text={title} />
            </span>
            <div className="w-300 d-flex f-s-16 px-10">
                {type === "warning" || type === "failure" ? (
                    <WarningIcon width={80} className="mr-30" />
                ) : (
                    <SuccessIcon width={60} className="mr-30" />
                )}
                <Translate text={text} />
            </div>
            {type === "warning" ? (
                <div className="modal-buttons d-flex justify-content-center w-100perc pt-10">
                    <CustomButton
                        className="btn-primary w-150 mr-10"
                        type="button"
                        onClick={() => deleteItem && deleteItem(item)}
                    >
                        <Translate text={buttonText ? buttonText : "DELETE"} />
                    </CustomButton>
                    <CustomButton
                        className="btn-cancel"
                        type="button"
                        onClick={() => cancelDelete && cancelDelete(modalName)}
                    >
                        <Translate text="CANCEL" />
                    </CustomButton>
                </div>
            ) : (
                <div className="modal-buttons d-flex justify-content-center w-100perc pt-10">
                    <CustomButton
                        className="btn-primary w-150"
                        type="button"
                        onClick={() => toggleModal && toggleModal(modalName)}
                    >
                        <Translate text="OK" />
                    </CustomButton>
                </div>
            )}
        </div>
    );
};
