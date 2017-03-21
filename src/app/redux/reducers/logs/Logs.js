import * as ActionTypes from "../../actions/types";

export default function logs(state = [], action) {
    if (action.type === ActionTypes.RECEIVED_LOGS) {
        return action.payload.logs;
    } else {
        return state;
    }
};