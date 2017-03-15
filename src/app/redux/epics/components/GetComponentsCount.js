import * as ActionTypes from "../../actions/types";
import { receivedComponentsCount } from "../../actions";
import { dispatcherServer } from "../../../../configs/EnvironmentVariables";

export default function getComponentsCount(action$) {
    return action$.ofType(ActionTypes.GET_COMPONENTS_COUNT)
        .mergeMap(() => fetch(`${dispatcherServer}/api/components?count=true`)
            .then(result => {
                return result.json();
            }).then(result => {
                return result.data.count
            }))
        .map(count => receivedComponentsCount(count));
};