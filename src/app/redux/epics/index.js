import { combineEpics } from "redux-observable";
import getLatestUptime from "./uptime/GetLatestUptime";

export default combineEpics(
    getLatestUptime
);