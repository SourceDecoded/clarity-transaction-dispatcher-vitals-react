import { combineReducers } from "redux";
import uptime from "./uptime/Uptime";
import componentsCount from "./components/ComponentsCount";
import entitiesCount from "./entities/EntitiesCount";

export default combineReducers({
    uptime,
    componentsCount,
    entitiesCount
});