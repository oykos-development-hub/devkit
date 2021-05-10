import React, { useState } from "react";
import Translate from "../../functions/utilFunctions/translate";
import { ArrowDownIcon } from "../../components/Icons/Icons";

interface ITableHead {
    value: string;
    sortable?: boolean;
    sortableType?: string;
    sortableName?: any;
}

interface ITable {
    theads: Array<ITableHead>;
    children: JSX.Element[] | string;
    className?: string;
    theadsClassname?: string;
    handleSort?: (
        sortableName: string,
        direction: boolean,
        type: string
    ) => void;
    sortName?: string;
    arrayToSort?: Array<any>;
}

const Table = ({
    className,
    theads,
    children,
    theadsClassname,
    handleSort,
}: ITable) => {
    const [sort, setSortName] = useState(null);
    const [direction, setDirection] = useState(false);

    const handleSorting = (sortable, sortableName, type) => {
        if (sortable) {
            if (sortableName !== sort || !sort) {
                setSortName(sortableName);
                setDirection(true);
                if (handleSort) {
                    handleSort(sortableName, false, type);
                }
            } else {
                setDirection((prevState) => !prevState);
                if (handleSort) {
                    handleSort(sortableName, direction, type);
                }
            }
        }
    };

    return (
        <table className={`${className} table`}>
            <thead className="thead">
                <tr className={`th ${theadsClassname}`}>
                    {theads.map((e, index) => {
                        return (
                            <th
                                className={`f-s-16 text-left text-color-font-l f-w-4 px-10 ${
                                    theadsClassname ? theadsClassname : ""
                                } ${e.sortable ? "pointer" : ""}`}
                                key={index}
                                onClick={() =>
                                    handleSorting(
                                        e.sortable,
                                        e.sortableName,
                                        e.sortableType
                                    )
                                }
                            >
                                <div className="wrapper d-flex align-items-center justify-content-between">
                                    <Translate text={e.value} />
                                    {e.sortable ? (
                                        <ArrowDownIcon
                                            width={15}
                                            className={`ml-20 transition-1 ${
                                                direction ? "rotate-180" : ""
                                            } ${
                                                e.sortableName === sort
                                                    ? "opacity-1"
                                                    : "opacity-0"
                                            }`}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody className="tbody">
                {children.length ? (
                    children
                ) : (
                    <div className="p-f center-f-h bottom-20 big-text light-4">
                        <Translate text="NO_DATA" />
                    </div>
                )}
            </tbody>
        </table>
    );
};

export default Table;
