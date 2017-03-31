import Observable from "./Observable";

export default class EntityService extends Observable {
    constructor(config) {
        super();

        this.host = config.host;
        this.defaultHeaders = config.headers;
    }

    _postAsync(formData) {
        return fetch(this.host + "/api/entities", {
            headers: Object.assign({}, this.defaultHeaders),
            method: "POST",
            body: formData
        }).then((response) => {
            var entity = response.json().data;

            this.notify({
                type: "added",
                entity: entity,
                response: response
            });
        }).catch((error) => {
            this.notify({
                type: "added_failed",
                entity: content,
                error: error
            });
        });
    }

    addAsFileAsync(file, compoennts) {
        var formData = new FormData();
        formData.append("content", file);
        formData.components = JSON.stringify(components);

        return this._postAsync(formData);
    }

    addAsync(content, components) {
        var formData = new FormData();
        formData.content = typeof content === "string" ? content : JSON.stringify(content);
        formData.components = JSON.stringify(components);

        return this._postAsync(formData);
    }

    updateAsync(entity) { }

    removeAsync(id) { }

    getAsync(id) { }

    getNextBatch(lastId) {

    }
}