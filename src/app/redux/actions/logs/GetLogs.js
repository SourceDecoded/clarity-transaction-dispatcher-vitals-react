import * as ActionTypes from "../types";

export default function getLogs(lastId, pageSize) {
    return {
        type: ActionTypes.GET_LOGS,
        payload: {
            lastId,
            pageSize
        }
    };
};