import * as ActionTypes from "../types";

export default function receivedLatestUptime(uptime) {
    return {
        type: ActionTypes.RECEIVED_LATEST_UPTIME,
        payload: {
            uptime
        }
    };
};