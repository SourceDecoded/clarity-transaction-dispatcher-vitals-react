import React, { Component } from "react";
import { connect, } from "react-redux";
import { getWeeklyTransactionCounts } from "../../redux/actions";
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

class MultiGraphWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weeklyCounts: [0, 0, 0, 0, 0, 0, 0]
        };

        this.scales = [];
        this.items = [];

        this.theme = {
            barBackgroundColor: "rgb(239, 108, 0)",
            emptyBarBackgroundColor: "rgba(42, 42, 43, 0.54902)",
            labelColor: "rgba(239, 108, 0, 0.8)",
            scaleLineColor: "rgba(25, 25, 25, .3)"
        };

        this._configureGraph = this._configureGraph.bind(this);
    }

    _configureGraph() {
        let totalWeeklyCounts = this.state.weeklyCounts.slice(0);
        totalWeeklyCounts[6] += this.props.todaysTransactionCount;

        const largestCount = Math.max.apply(null, totalWeeklyCounts);
        const largestScale = (largestCount * 0.05) + largestCount;
        const largestTenScale = (parseInt(largestScale / 10, 10) + 1) * 10;
        const increments = Math.ceil(largestTenScale / 3);

        this.scales = [increments, increments * 2, largestTenScale];

        this.items = totalWeeklyCounts.map((count, index) => {
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - (6 - index));

            return { label: (currentDate.getUTCMonth() + 1) + "/" + currentDate.getUTCDate(), value: count };
        });
    }

    componentWillMount() {
        this.props.getWeeklyTransactionCounts()
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.weeklyCounts !== nextProps.weeklyCounts) {
            this.setState({
                weeklyCounts: nextProps.weeklyCounts
            });
        }
    }

    render() {
        this._configureGraph();
        const totalTransactions = this.items.map((item) => item.value).reduce((prevItem, item) => prevItem + item);

        return (
            <div style={this.props.style}>
                <div style={styles.titleContainer}>{"Weekly Transactions: " + totalTransactions}</div>
                <div style={styles.graphContainer}>
                    <VerticalBarGraph scales={this.scales} items={this.items} theme={this.theme} />
                </div>
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        weeklyCounts: state.weeklyTransactionCounts
    };
};

const mapDispatchToProps = {
    getWeeklyTransactionCounts
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiGraphWidget);