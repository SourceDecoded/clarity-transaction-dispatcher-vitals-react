import * as ActionTypes from "../../actions/types";

export default function entitiesCount(state = 0, action) {
    if (action.type === ActionTypes.RECEIVED_ENTITIES_COUNT) {
        return action.payload.total;
    } else {
        return state;
    }
};