class Observer {

    constructor(callback, unbind) {
        if (typeof unbind !== "function") {
            throw new Error("There needs to be a unbind function.");
        }

        if (typeof callback !== "function") {
            throw new Error("There needs to be a callback function.");
        }

        this.unbind = unbind;
        this.callback = callback;
        this.isStopped = false;
        this.isDisposed = false;
    }

    stop() {
        this.isStopped = true;
    }

    start() {
        this.isStopped = false;
    }

    dispose() {
        this.isDisposed = true;
        this.unbind();
    }

    notify(event) {
        if (!this.isDisposed && !this.isStopped) {
            callback(event);
        }
    }
}

class Observable {
    constructor() {
        this.observersByType = {};
    }

    _getObserversByType(type) {
        var observers = this.observersByType[type];

        if (observers == null) {
            observers = this.observersByType[type] = [];
        }

        return observers;
    }

    notify(event) {

        var type = event.type;

        if (type == null) {
            throw new Error("The event needs to have a type.");
        }

        this._getObserversByType(type).forEach((observer) => {
            observer.notify(event);
        });
    }

    observe(type, callback) {
        var observers = this._getObserversByType(type);

        var observer = new Observer(callback, () => {
            var index = observers.indexOf(observer);
            if (index > -1) {
                observers.splice(index, 1);
            }
        });

        observers.push(observer);

        return observer;
    }
}

export default Observable;
