import React, { ReactChildren, useEffect, useState } from "react";
import { ShowMoreIcon } from "../../components/Icons/Icons";

interface IShowMore {
    children: ReactChildren | string | JSX.Element | Array<JSX.Element>;
    className?: string;
}

const ShowMore = ({ className, children }: IShowMore) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("click", () => {
            setVisible(false);
        });
        return () => {
            document.removeEventListener("click", () => {
                setVisible(false);
            });
        };
    }, []);

    const toggleVisible = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setVisible((prevState) => !prevState);
    };

    return (
        <div
            className={`pointer d-flex align-items-center justify-content-center showMore ${
                className ? className : ""
            }`}
            onClick={toggleVisible}
        >
            <ShowMoreIcon width={30} className="showMoreIcon" />
            <div className={`showMoreItems ${visible ? "visible" : ""}`}>
                {children}
            </div>
        </div>
    );
};

export default ShowMore;
