import * as ActionTypes from "../../actions/types";
import { receivedWeeklyTransactionCounts } from "../../actions";
import { monitorServer } from "../../../../configs/EnvironmentVariables";

export default function getWeeklyTransactionCounts(action$) {
    const counts = [];

    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    const filter = {
        createdDate: {
            $gte: startDate,
            $lte: endDate
        }
    };

    const filterString = JSON.stringify(filter);

    return action$.ofType(ActionTypes.GET_ENTITIES_COUNT)
        .mergeMap(() => fetch(`${monitorServer}/api/transactions?filter=${filterString}`)
            .then(result => {
                return result.json();
            }).then(result => {
                added = result.data.count;
            }))
        .mergeMap(() => fetch(`${monitorServer}/api/transactions?filter={"type": "entityComponentUpdated"}&count=true`)
            .then(result => {
                return result.json();
            }).then(result => {
                updated = result.data.count;
            }))
        .mergeMap(() => fetch(`${monitorServer}/api/transactions?filter={"type": "entityComponentRemoved"}&count=true`)
            .then(result => {
                return result.json();
            }).then(result => {
                removed = result.data.count;
            }))
        .mergeMap(() => fetch(`${monitorServer}/api/transactions?filter={"type": "entityComponentRetrieved"}&count=true`)
            .then(result => {
                return result.json();
            }).then(result => {
                retrieved = result.data.count;
            }))
        .map(() => receivedWeeklyTransactionCounts(counts));
};