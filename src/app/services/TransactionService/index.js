import Observable from "../Observable";

export default class TransactionService extends Observable {
    constructor(config) {
        super();

        this.host = config.host;
        this.defaultHeaders = config.headers;
    }

    getEntitiesTransactionCountsAsync() {
        let added = 0;
        let updated = 0;
        let removed = 0;
        let retrieved = 0;

        return fetch(this.host + `/api/transactions?getCount=true&filter={"type": "entityAdded"}`).then(result => {
            return result.json();
        }).then(addedCount => {
            added = addedCount;
            return fetch(this.host + `/api/transactions?getCount=true&filter={"type": "entityUpdated"}`);
        }).then(result => {
            return result.json();
        }).then(updatedCount => {
            updated = updatedCount;
            return fetch(this.host + `/api/transactions?getCount=true&filter={"type": "entityRemoved"}`);
        }).then(result => {
            return result.json();
        }).then(removedCount => {
            removed = removedCount;
            return fetch(this.host + `/api/transactions?getCount=true&filter={"type": "entityRetrieved"}`);
        }).then(result => {
            return result.json();
        }).then(retrievedCount => {
            retrieved = retrievedCount;
            return { added, updated, removed, retrieved };
        }).catch((error) => {
            throw error;
        });
    }

    getWeeklyTransactionCountsAsync() {
        const counts = [];

        const getFilterString = (day) => {
            const startDate = new Date();
            startDate.setHours(0, 0, 0, 0);
            startDate.setDate(startDate.getDate() - day);

            const endDate = new Date();
            endDate.setHours(24, 0, 0, 0);
            endDate.setDate(endDate.getDate() - day);

            const filter = {
                createdDate: {
                    $gte: { "$date": startDate },
                    $lt: { "$date": endDate }
                }
            };

            return JSON.stringify(filter);
        };

        return fetch(this.host + `/api/transactions?getCount=true&filter=${getFilterString(6)}`).then(result => {
            return result.json();
        }).then(count => {
            counts.push(count);
            return fetch(this.host + `/api/transactions?getCount=true&filter=${getFilterString(5)}`);
        }).then(result => {
            return result.json();
        }).then(count => {
            counts.push(count);
            return fetch(this.host + `/api/transactions?getCount=true&filter=${getFilterString(4)}`);
        }).then(result => {
            return result.json();
        }).then(count => {
            counts.push(count);
            return fetch(this.host + `/api/transactions?getCount=true&filter=${getFilterString(3)}`);
        }).then(result => {
            return result.json();
        }).then(count => {
            counts.push(count);
            return fetch(this.host + `/api/transactions?getCount=true&filter=${getFilterString(2)}`);
        }).then(result => {
            return result.json();
        }).then(count => {
            counts.push(count);
            return fetch(this.host + `/api/transactions?getCount=true&filter=${getFilterString(1)}`);
        }).then(result => {
            return result.json();
        }).then(count => {
            counts.push(count);
            return fetch(this.host + `/api/transactions?getCount=true&filter=${getFilterString(0)}`);
        }).then(result => {
            return result.json();
        }).then(count => {
            counts.push(count);
            return counts;
        }).catch((error) => {
            throw error;
        });
    }
}