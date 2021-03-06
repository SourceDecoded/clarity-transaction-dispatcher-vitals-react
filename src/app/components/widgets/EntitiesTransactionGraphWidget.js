import React, { Component } from "react";
import services from "../../services";
import VerticalBarGraph from "../graphs/VerticalBarGraph";

const styles = {
    titleContainer: {
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        height: "15%",
        color: "rgba(255, 255, 255, 0.85098)",
        fontSize: "1.5vh",
        textAlign: "center"
    },
    graphContainer: {
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        height: "85%"
    }
};

class EntitiesTransactionGraphWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counts: {
                added: 0,
                updated: 0,
                removed: 0,
                retrieved: 0
            }
        };

        this.scales = [];
        this.items = [];

        this.theme = {
            barBackgroundColor: "rgb(25, 118, 210)",
            emptyBarBackgroundColor: "rgba(42, 42, 43, 0.54902)",
            labelColor: "rgba(25, 118, 210, 0.8)",
            scaleLineColor: "rgba(25, 25, 25, .3)"
        };

        this._configureGraph = this._configureGraph.bind(this);
    }

    _configureGraph() {
        const totalCounts = {
            added: this.state.counts.added + this.props.entitiesTransactionCounts.added,
            updated: this.state.counts.updated + this.props.entitiesTransactionCounts.updated,
            removed: this.state.counts.removed + this.props.entitiesTransactionCounts.removed,
            retrieved: this.state.counts.retrieved + this.props.entitiesTransactionCounts.retrieved
        };

        const largestCount = Math.max(totalCounts.added, totalCounts.updated, totalCounts.removed, totalCounts.retrieved);
        const largestScale = (largestCount * 0.05) + largestCount;
        const largestTenScale = (parseInt(largestScale / 10, 10) + 1) * 10;
        const increments = Math.ceil(largestTenScale / 3);

        this.scales = [increments, increments * 2, largestTenScale];

        this.items = [
            { label: "Add", value: totalCounts.added },
            { label: "Edit", value: totalCounts.updated },
            { label: "Fetch", value: totalCounts.retrieved },
            { label: "Delete", value: totalCounts.removed }
        ];
    }

    componentWillMount() {
        services.transactionService.getEntitiesTransactionCountsAsync().then(entityCounts => {
            this.setState({
                counts: {
                    added: entityCounts.added,
                    updated: entityCounts.updated,
                    removed: entityCounts.removed,
                    retrieved: entityCounts.retrieved,
                }
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        this._configureGraph();
        const totalTransactions = this.items.map((item) => item.value).reduce((prevItem, item) => prevItem + item);

        return (
            <div style={this.props.style}>
                <div style={styles.titleContainer}>{"Entity Transactions: " + totalTransactions}</div>
                <div style={styles.graphContainer}>
                    <VerticalBarGraph scales={this.scales} items={this.items} theme={this.theme} />
                </div>
            </div>
        );
    }
}

export default EntitiesTransactionGraphWidget;