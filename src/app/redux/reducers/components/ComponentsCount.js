import * as ActionTypes from "../../actions/types";

export default function componentsCount(state = 0, action) {
    if (action.type === ActionTypes.RECEIVED_COMPONENTS_COUNT) {
        return action.payload.total;
    } else {
        return state;
    }
};