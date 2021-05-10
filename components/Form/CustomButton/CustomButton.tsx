import React, { ReactChildren } from "react";

interface ICustomButton {
    onClick: (e) => void;
    children: ReactChildren | string | JSX.Element | Array<JSX.Element>;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
}

const _cb = ({
    className,
    onClick,
    children,
    type,
    disabled,
}: ICustomButton) => {
    return (
        <button
            className={`${className} btn btn-primary f-s-16`}
            onClick={(e) => onClick(e)}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default _cb;
