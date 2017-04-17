import Observable from "../Observable";

export default class UptimeService extends Observable {
    constructor(config) {
        super();

        this.host = config.host;
        this.defaultHeaders = config.headers;
    }

    getLatestUptimeAsync() {
        return fetch(this.host + `/api/uptimes?getLatest=true`).then(result => {
            return result.json();
        }).then(uptime => {
            return uptime;
        }).catch(error => {
            throw error;
        });
    }
}