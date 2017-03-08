import React, { Component } from "react";
import io from "socket.io-client";
import { connect, } from "react-redux";
import { socketMonitorServer } from "../../configs/EnvironmentVariables";
import { getLatestUptime, getComponentsCount, getEntitiesCount } from "../redux/actions";

// import { dashboard as styles } from "../css";

import TransactionGraph from "../components/screens/dashboard/TransactionGraph";

import UptimeWidget from "../components/screens/dashboard/UptimeWidget";
import TransactionGraphWidget from "../components/screens/dashboard/TransactionGraphWidget";
import CounterWidget from "../components/screens/dashboard/CounterWidget";
import LoggerWidget from "../components/screens/dashboard/LoggerWidget";

//TODO: Set min-width and min-height (1200 x 800)

export const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    widget: {
        backgroundColor: "rgb(35, 35, 36)",
        height: "100%",
        padding: "24px"
    },
    uptimeWidget: {
        position: "absolute",
        right: 0,
        paddingLeft: "24px",
        width: "35%",
        height: "40%"
    },
    entitiesTransactionWidget: {
        position: "absolute",
        top: "40%",
        paddingTop: "24px",
        left: 0,
        width: "calc(32.5% - 12px)",
        height: "30%"
    },
    componentsTransactionWidget: {
        position: "absolute",
        top: "40%",
        paddingTop: "24px",
        paddingLeft: "24px",
        left: "calc(32.5% - 12px)",
        width: "calc(32.5% + 12px)",
        height: "30%"
    },
    entitiesCounterWidget: {
        position: "absolute",
        top: "70%",
        paddingTop: "24px",
        left: 0,
        width: "calc(32.5% - 12px)",
        height: "30%"
    },
    componentsCounterWidget: {
        position: "absolute",
        top: "70%",
        paddingTop: "24px",
        paddingLeft: "24px",
        left: "calc(32.5% - 12px)",
        width: "calc(32.5% + 12px)",
        height: "30%"
    },
    loggerWidget: {
        position: "absolute",
        top: "40%",
        right: 0,
        paddingTop: "24px",
        paddingLeft: "24px",
        width: "35%",
        height: "60%"
    },





    transactionGraph: {
        position: "absolute",
        left: 0,
        backgroundColor: "rgb(35, 35, 36)",
        height: "40%",
        width: "65%"
    }
};

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uptime: null,
            entitiesTransactionGraph: {},
            componentsTransactionGraph: {},



            graphData: {
                weekly: {
                    header: {
                        type: "Transactions",
                        total: 590
                    },
                    columns: [
                        { label: "2/26", total: 20 }, { label: "2/27", total: 50 }, { label: "2/28", total: 80 },
                        { label: "3/1", total: 140 }, { label: "3/2", total: 110 }, { label: "3/3", total: 65 }, { label: "3/4", total: 125 }
                    ],
                    scale: [50, 100, 150]
                }
            }
        }

        this.socket = io(socketMonitorServer);
    }


    componentWillMount() {
        this.props.getLatestUptime();

        this.socket.on("allTransactions", data => {
            console.log(data);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.uptime !== nextProps.uptime) {
            this.setState({
                uptime: nextProps.uptime
            });
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <div style={styles.container}>


                    <TransactionGraph style={styles.transactionGraph} data={this.state.graphData} />





                    <div style={styles.uptimeWidget}>
                        <UptimeWidget style={styles.widget} uptime={this.state.uptime} />
                    </div>

                    <div style={styles.entitiesTransactionWidget}>
                        <TransactionGraphWidget style={styles.widget} />
                    </div>

                    <div style={styles.componentsTransactionWidget}>
                        <TransactionGraphWidget style={styles.widget} />
                    </div>

                    <div style={styles.entitiesCounterWidget}>
                        <CounterWidget style={styles.widget} />
                    </div>

                    <div style={styles.componentsCounterWidget}>
                        <CounterWidget style={styles.widget} />
                    </div>

                    <div style={styles.loggerWidget}>
                        <LoggerWidget style={styles.widget} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        uptime: state.uptime,
        componentsCount: state.componentsCount,
        entitiesCount: state.entitiesCount
    };
};

const mapDispatchToProps = {
    getLatestUptime,
    getComponentsCount,
    getEntitiesCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);