import * as ActionTypes from "../types";

export default function receivedEntitiesTransactionCounts(counts) {
    return {
        type: ActionTypes.RECEIVED_ENTITIES_TRANSACTION_COUNTS,
        payload: {
            counts
        }
    };
};