import * as ActionTypes from "../../actions/types";
import { receivedEntitiesTransactionCounts } from "../../actions";
import { monitorServer } from "../../../../configs/EnvironmentVariables";

export default function getEntitiesTransactionCounts(action$) {
    let added = 0;
    let updated = 0;
    let removed = 0;
    let retrieved = 0;

    return action$.ofType(ActionTypes.GET_ENTITIES_COUNT)
        .mergeMap(() => fetch(`${monitorServer}/api/transactions?filter={"type": "entityAdded"}&count=true`)
            .then(result => {
                return result.json();
            }).then(result => {
                added = result.data.count;
            }))
        .mergeMap(() => fetch(`${monitorServer}/api/transactions?filter={"type": "entityUpdated"}&count=true`)
            .then(result => {
                return result.json();
            }).then(result => {
                updated = result.data.count;
            }))
        .mergeMap(() => fetch(`${monitorServer}/api/transactions?filter={"type": "entityRemoved"}&count=true`)
            .then(result => {
                return result.json();
            }).then(result => {
                removed = result.data.count;
            }))
        .mergeMap(() => fetch(`${monitorServer}/api/transactions?filter={"type": "entityRetrieved"}&count=true`)
            .then(result => {
                return result.json();
            }).then(result => {
                retrieved = result.data.count;
            }))
        .map(() => receivedEntitiesTransactionCounts({ added, updated, removed, retrieved }));
};