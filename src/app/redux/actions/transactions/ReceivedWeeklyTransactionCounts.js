import * as ActionTypes from "../types";

export default function receivedWeeklyTransactionCounts(counts) {
    return {
        type: ActionTypes.RECEIVED_WEEKLY_TRANSACTION_COUNTS,
        payload: {
            counts
        }
    };
};