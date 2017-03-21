import { combineEpics } from "redux-observable";
import getLatestUptime from "./uptime/GetLatestUptime";
import getComponentsCount from "./components/GetComponentsCount";
import getEntitiesCount from "./entities/GetEntitiesCount";
import getEntitiesTransactionCounts from "./transactions/GetEntitiesTransactionCounts";
import getComponentsTransactionCounts from "./transactions/GetComponentsTransactionCounts";
import getWeeklyTransactionCounts from "./transactions/GetWeeklyTransactionCounts";
import getLogs from "./logs/GetLogs";

export default combineEpics(
    getLatestUptime,
    getComponentsCount,
    getEntitiesCount,
    getEntitiesTransactionCounts,
    getComponentsTransactionCounts,
    getWeeklyTransactionCounts,
    getLogs
);