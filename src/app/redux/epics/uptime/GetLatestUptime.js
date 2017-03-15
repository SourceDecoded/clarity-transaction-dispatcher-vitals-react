import * as ActionTypes from "../../actions/types";
import { receivedLatestUptime } from "../../actions";
import { monitorServer } from "../../../../configs/EnvironmentVariables";

export default function getLatestUptime(action$) {
    return action$.ofType(ActionTypes.GET_LATEST_UPTIME)
        .mergeMap(() => fetch(`${monitorServer}/api/uptimes`)
            .then(result => {
                return result.json();
            }).then(result => {
                return result.data.uptime;
            }))
        .map(uptime => receivedLatestUptime(uptime));
};