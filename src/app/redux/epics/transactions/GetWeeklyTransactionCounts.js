import * as ActionTypes from "../../actions/types";
import { receivedWeeklyTransactionCounts } from "../../actions";
import { monitorServer } from "../../../../configs/EnvironmentVariables";

export default function getWeeklyTransactionCounts(action$) {
    const counts = [];

    const getFilterString = (day) => {
        const startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - day);

        const endDate = new Date();
        endDate.setHours(24, 0, 0, 0);
        endDate.setDate(endDate.getDate() - day);

        const filter = {
            createdDate: {
                $gte: { "$date": startDate },
                $lt: { "$date": endDate }
            }
        };

        return JSON.stringify(filter);
    };

//TODO: Refactor this ugly code with a loop.
    return action$.ofType(ActionTypes.GET_ENTITIES_COUNT)
        .mergeMap(() => {
            const filterString = getFilterString(6);
            return fetch(`${monitorServer}/api/transactions?filter=${filterString}&count=true`)
                .then(result => {
                    return result.json();
                }).then(result => {
                    counts.push(result.data.count);
                })
        })
        .mergeMap(() => {
            const filterString = getFilterString(5);
            return fetch(`${monitorServer}/api/transactions?filter=${filterString}&count=true`)
                .then(result => {
                    return result.json();
                }).then(result => {
                    counts.push(result.data.count);
                })
        })
        .mergeMap(() => {
            const filterString = getFilterString(4);
            return fetch(`${monitorServer}/api/transactions?filter=${filterString}&count=true`)
                .then(result => {
                    return result.json();
                }).then(result => {
                    counts.push(result.data.count);
                })
        })
        .mergeMap(() => {
            const filterString = getFilterString(3);
            return fetch(`${monitorServer}/api/transactions?filter=${filterString}&count=true`)
                .then(result => {
                    return result.json();
                }).then(result => {
                    counts.push(result.data.count);
                })
        })
        .mergeMap(() => {
            const filterString = getFilterString(2);
            return fetch(`${monitorServer}/api/transactions?filter=${filterString}&count=true`)
                .then(result => {
                    return result.json();
                }).then(result => {
                    counts.push(result.data.count);
                })
        })
        .mergeMap(() => {
            const filterString = getFilterString(1);
            return fetch(`${monitorServer}/api/transactions?filter=${filterString}&count=true`)
                .then(result => {
                    return result.json();
                }).then(result => {
                    counts.push(result.data.count);
                })
        })
        .mergeMap(() => {
            const filterString = getFilterString(0);
            return fetch(`${monitorServer}/api/transactions?filter=${filterString}&count=true`)
                .then(result => {
                    return result.json();
                }).then(result => {
                    counts.push(result.data.count);
                })
        })
        .map(() => receivedWeeklyTransactionCounts(counts));
};