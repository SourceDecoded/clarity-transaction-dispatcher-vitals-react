import Observable from "../Observable";

export default class LogService extends Observable {
    constructor(config) {
        super();

        this.host = config.host;
        this.defaultHeaders = config.headers;
    }

    getLogsAsync(lastId, pageSize) {
        return fetch(this.host + `/api/logs?lastId=${lastId}&pageSize=${pageSize}`).then(result => {
            return result.json();
        }).then(logs => {
            return logs;
        }).catch((error) => {
            throw error;
        });
    }
}