import * as ActionTypes from "../../actions/types";

export default function entitiesTransactionCounts(state = {}, action) {
    if (action.type === ActionTypes.RECEIVED_ENTITIES_TRANSACTION_COUNTS) {
        return action.payload.counts;
    } else {
        return state;
    }
};