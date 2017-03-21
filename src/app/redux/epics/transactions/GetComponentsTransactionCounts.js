import * as ActionTypes from "../../actions/types";
import { receivedComponentsTransactionCounts } from "../../actions";
import { monitorServer } from "../../../../configs/EnvironmentVariables";

export default function getComponentsTransactionCounts(action$) {
    let added = 0;
    let updated = 0;
    let removed = 0;
    let retrieved = 0;

    //TODO: Refactor this ugly code with a loop.
    return action$.ofType(ActionTypes.GET_ENTITIES_COUNT)
        .mergeMap(() => fetch(`${monitorServer}/api/transactions?filter={"type": "entityComponentAdded"}&count=true`)
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
        .map(() => receivedComponentsTransactionCounts({ added, updated, removed, retrieved }));
};