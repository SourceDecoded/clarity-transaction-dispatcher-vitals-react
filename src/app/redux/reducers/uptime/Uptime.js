import * as ActionTypes from "../../actions/types";

export default function uptime(state = {}, action) {
  if (action.type === ActionTypes.RECEIVED_LATEST_UPTIME) {
    return action.payload.uptime;
  } else {
    return state;
  }
};