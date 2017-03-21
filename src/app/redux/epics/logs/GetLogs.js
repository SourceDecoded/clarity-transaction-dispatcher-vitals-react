import * as ActionTypes from "../../actions/types";
import { receivedLogs } from "../../actions";
import { monitorServer } from "../../../../configs/EnvironmentVariables";

export default function getLogs(action$) {
    return action$.ofType(ActionTypes.GET_LOGS)
        .mergeMap((action) => fetch(`${monitorServer}/api/logs?lastId=${action.payload.lastId}&pageSize=${action.payload.pageSize}`)
            .then(result => {
                return result.json();
            }).then(result => {
                return result.data.logs
            }))
        .map(logs => receivedLogs(logs));
};