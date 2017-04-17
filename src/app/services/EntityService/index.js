import Observable from "../Observable";

export default class EntityService extends Observable {
    constructor(config) {
        super();

        this.host = config.host;
        this.defaultHeaders = config.headers;
    }

    getEntitiesCountAsync() {
        return fetch(this.host + "/api/entities?getCount=true", {
            headers: Object.assign({}, this.defaultHeaders),
            method: "GET"
        }).then(result => {
            return result.json();
        }).then(count => {
            return count;
        }).catch((error) => {
            throw error;
        });
    }
}