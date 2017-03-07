import { combineEpics } from "redux-observable";
import getLatestUptime from "./uptime/GetLatestUptime";
import getComponentsCount from "./components/GetComponentsCount";
import getEntitiesCount from "./entities/GetEntitiesCount";

export default combineEpics(
    getLatestUptime,
    getComponentsCount,
    getEntitiesCount
);