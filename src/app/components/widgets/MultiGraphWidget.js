import React, { Component } from "react";
import { connect, } from "react-redux";
import { getWeeklyTransactionCounts } from "../../redux/actions";
import VerticalBarGraph from "../graphs/VerticalBarGraph";

const styles = {
    headerContainer: {
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        height: "15%"
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
    }

    componentWillMount() {
        this.props.getWeeklyTransactionCounts()
    }

    render() {
        return (
            <div style={this.props.style}>
                <div style={styles.headerContainer}></div>
                <div style={styles.graphContainer}>
                    {/*<VerticalBarGraph />*/}
                </div>
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        counts: state.weeklyTransactionCounts
    };
};

const mapDispatchToProps = {
    getWeeklyTransactionCounts
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiGraphWidget);