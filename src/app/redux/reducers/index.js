import { combineReducers } from "redux";
import uptime from "./uptime/Uptime";
import componentsCount from "./components/ComponentsCount";
import entitiesCount from "./entities/EntitiesCount";
import entitiesTransactionCounts from "./transactions/EntitiesTransactionCounts";
import componentsTransactionCounts from "./transactions/ComponentsTransactionCounts";
import weeklyTransactionCounts from "./transactions/WeeklyTransactionCounts";
import logs from "./logs/Logs";

export default combineReducers({
    uptime,
    componentsCount,
    entitiesCount,
    entitiesTransactionCounts,
    componentsTransactionCounts,
    weeklyTransactionCounts,
    logs
});