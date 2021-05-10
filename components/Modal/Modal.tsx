import React, { Component } from "react";

interface IModal {
    modalName: string;
    toggleModal: (modalName: string) => void;
    className?: string;
    modalWrapperClasses?: string;
}

class Modal extends Component<IModal> {
    render() {
        return (
            <div
                onClick={() => this.props.toggleModal(this.props.modalName)}
                className={`modal ${this.props.className} d-flex align-items-center justify-content-center`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => e.preventDefault()}
            >
                <div
                    className={`modalWrapper ${this.props.modalWrapperClasses}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;
