import * as ActionTypes from "../types";

export default function receivedComponentsTransactionCounts(counts) {
    return {
        type: ActionTypes.RECEIVED_COMPONENTS_TRANSACTION_COUNTS,
        payload: {
            counts
        }
    };
};