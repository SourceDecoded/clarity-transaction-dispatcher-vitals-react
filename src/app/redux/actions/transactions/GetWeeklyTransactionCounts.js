import * as ActionTypes from "../types";

export default function getWeeklyTransactionCounts() {
    return {
        type: ActionTypes.GET_WEEKLY_TRANSACTION_COUNTS
    };
};