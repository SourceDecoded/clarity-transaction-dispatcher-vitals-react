import * as ActionTypes from "../types";

export default function receivedWeeklyTransactionCounts(counts) {
    console.log(counts)
    return {
        type: ActionTypes.RECEIVED_WEEKLY_TRANSACTION_COUNTS,
        payload: {
            counts
        }
    };
};