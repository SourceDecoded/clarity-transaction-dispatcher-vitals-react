import * as ActionTypes from "../types";

export default function receivedComponentsCount(total) {
    return {
        type: ActionTypes.RECEIVED_COMPONENTS_COUNT,
        payload: {
            total
        }
    };
};