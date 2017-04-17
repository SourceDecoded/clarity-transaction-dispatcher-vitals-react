import EntityService from "./EntityService";
import TransactionService from "./TransactionService";
import UptimeService from "./UptimeService";
import LogService from "./LogService";

export default {
    entityService: new EntityService({ host: "http://10.0.14.152:3005" }),
    transactionService: new TransactionService({ host: "http://10.0.14.152:3006" }),
    uptimeService: new UptimeService({ host: "http://10.0.14.152:3006" }),
    logService: new LogService({ host: "http://10.0.14.152:3006" })
};