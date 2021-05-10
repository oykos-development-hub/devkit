import React, { Component } from "react";

import { StoreService } from "services/store.service";
import ToastNotification from "./ToastNotification/ToastNotification";
import { getTimeRemaining } from "functions/utilFunctions/parsingFunctions";

class ToastNotifications extends Component<any> {
    state = {
        actionsToShow: [],
    };

    checkForActions = () => {
        const actions = StoreService.getStoreProperty("actions");
        let actionToShow = {};
        actions.forEach((a) => {
            const timeRemaining = getTimeRemaining(a.endDate);
            const { days, hours, minutes } = timeRemaining;
            if (days === 0 && hours === 3 && minutes === 0) {
                actionToShow = {
                    id: a.id,
                    type: 1,
                    title: a.title,
                    endDate: a.endDate,
                    timeLeft: "THREE_HOURS",
                };
            }
            if (days === 0 && hours === 2 && minutes === 0) {
                actionToShow = {
                    id: a.id,
                    type: 1,
                    title: a.title,
                    endDate: a.endDate,
                    timeLeft: "TWO_HOURS",
                };
            }
            if (days === 0 && hours === 1 && minutes === 0) {
                actionToShow = {
                    id: a.id,
                    type: 2,
                    title: a.title,
                    endDate: a.endDate,
                    timeLeft: "ONE_HOUR",
                };
            }
            if (days === 0 && hours === 0 && minutes === 30) {
                actionToShow = {
                    id: a.id,
                    type: 3,
                    title: a.title,
                    endDate: a.endDate,
                    timeLeft: "THIRTY_MINUTES",
                };
            }
            if (days === 0 && hours === 0 && minutes === 15) {
                actionToShow = {
                    id: a.id,
                    type: 4,
                    title: a.title,
                    endDate: a.endDate,
                    timeLeft: "FIFTEEN_MINUTES",
                };
            }
            if (
                (days === 0 || days === -1) &&
                (hours === 0 || hours === -1) &&
                (minutes === 0 || minutes === -1)
            ) {
                actionToShow = {
                    id: a.id,
                    type: 5,
                    title: a.title,
                    endDate: a.endDate,
                    timeLeft: "TIME_ELAPSED",
                };
            }
        });
        if (Object.keys(actionToShow).length > 0) {
            this.setState((prevState: any) => ({
                actionsToShow: [...prevState.actionsToShow, actionToShow],
            }));
        }
    };

    checkForActionsInterval;

    componentDidMount() {
        this.checkForActions();
        this.checkForActionsInterval = setInterval(this.checkForActions, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.checkForActionsInterval);
    }

    removeItem = (id, link?) => {
        const { actionsToShow } = this.state;
        const newActions = actionsToShow.filter((e: any) => e.id !== id);

        this.setState({ actionsToShow: newActions });
        if (link) {
            this.props.handleRedirect(link);
        }
    };

    render() {
        const { actionsToShow } = this.state;
        return (
            <div
                className={`toastNotifications pt-10 pl-10 pr-20 ${
                    actionsToShow.length > 0 ? "visible" : ""
                }`}
            >
                {actionsToShow.length > 0 &&
                    actionsToShow.map((e) => (
                        <ToastNotification
                            notification={e}
                            removeItem={this.removeItem}
                        />
                    ))}
            </div>
        );
    }
}

export default ToastNotifications;
