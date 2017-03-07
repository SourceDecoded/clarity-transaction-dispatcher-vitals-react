import * as ActionTypes from "../types";

export default function receivedEntitiesCount(total) {
    return {
        type: ActionTypes.RECEIVED_ENTITIES_COUNT,
        payload: {
            total
        }
    };
};