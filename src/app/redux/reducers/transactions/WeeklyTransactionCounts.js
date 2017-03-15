import * as ActionTypes from "../../actions/types";

export default function weeklyTransactionCounts(state = [], action) {
    if (action.type === ActionTypes.RECEIVED_WEEKLY_TRANSACTION_COUNTS) {
        return action.payload.counts;
    } else {
        return state;
    }
};