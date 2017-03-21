import * as ActionTypes from "../types";

export default function receivedLogs(logs) {
    return {
        type: ActionTypes.RECEIVED_LOGS,
        payload: {
            logs
        }
    };
};