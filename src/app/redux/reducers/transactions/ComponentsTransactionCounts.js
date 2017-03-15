import * as ActionTypes from "../../actions/types";

export default function componentsTransactionCounts(state = {}, action) {
    if (action.type === ActionTypes.RECEIVED_COMPONENTS_TRANSACTION_COUNTS) {
        return action.payload.counts;
    } else {
        return state;
    }
};