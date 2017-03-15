import * as ActionTypes from "../../actions/types";
import { receivedEntitiesCount } from "../../actions";
import { dispatcherServer } from "../../../../configs/EnvironmentVariables";

export default function getEntitiesCount(action$) {
    return action$.ofType(ActionTypes.GET_ENTITIES_COUNT)
        .mergeMap(() => fetch(`${dispatcherServer}/api/entities?count=true`)
            .then(result => {
                return result.json();
            }).then(result => {
                return result.data.count
            }))
        .map(count => receivedEntitiesCount(count));
};