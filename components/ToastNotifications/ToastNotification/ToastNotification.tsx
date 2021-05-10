import { CloseIcon } from "components/Icons/Icons";
import React from "react";
import Translate from "functions/utilFunctions/translate";
import { parseDatetime } from "functions/utilFunctions/parsingFunctions";
interface IToastNotification {
    notification: {
        id: number;
        title: string;
        type: number;
        endDate: string;
        timeLeft?: string;
    };
    removeItem: (id, link?) => void;
}

const ToastNotification = ({
    notification,
    removeItem,
}: IToastNotification) => {
    return (
        <div className={`toastNotification px-10 type-${notification.type}`}>
            <span className="close" onClick={() => removeItem(notification.id)}>
                <CloseIcon width={18} />
            </span>
            <div
                className="notificationContainer d-flex justify-content-between"
                onClick={() =>
                    removeItem(notification.id, `action/${notification.id}`)
                }
            >
                <div className="d-flex flex-column">
                    <span>
                        <Translate text="TIME_LEFT" />:{" "}
                        <b>
                            <Translate text={notification.timeLeft} />
                        </b>{" "}
                    </span>
                    <span>{notification.title}</span>
                </div>
                <span className="align-self-end">
                    {parseDatetime(notification.endDate).slice(0, -3)}
                </span>
            </div>
        </div>
    );
};

export default ToastNotification;
