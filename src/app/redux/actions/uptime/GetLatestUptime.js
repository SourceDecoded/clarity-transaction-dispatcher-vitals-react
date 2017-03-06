import * as ActionTypes from "../types";

export default function getLatestUptime() {
  return {
    type: ActionTypes.GET_LATEST_UPTIME
  };
};