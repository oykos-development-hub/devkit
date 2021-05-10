import React, { ReactChildren } from "react";

interface IContextMenu {
    top: number;
    left: number;
    height: number;
    visible: boolean;
    children: ReactChildren | string | JSX.Element | Array<JSX.Element>;
}

const ContextMenu = ({
    top,
    left,
    height,
    visible,
    children,
}: IContextMenu) => {
    return (
        <ul
            id="contextMenu"
            style={{
                top: `${top}px`,
                left: `${left}px`,
                height: `${height}px`,
                display: visible ? "block" : "none",
            }}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </ul>
    );
};

export default ContextMenu;
