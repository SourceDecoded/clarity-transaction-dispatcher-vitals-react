import React, { Component } from "react";
import io from "socket.io-client";
import TransactionGraph from "../components/screens/dashboard/TransactionGraph";
import Uptime from "../components/screens/dashboard/Uptime";

//TODO: Set min-width and min-height (1200 x 800)

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    transactionGraph: {
        position: "absolute",
        left: 0,
        backgroundColor: "rgb(35, 35, 36)",
        height: "40%",
        width: "65%"
    },
    uptimeContainer: {
        position: "absolute",
        right: 0,
        paddingLeft: "24px",
        width: "35%",
        height: "40%"
    },
    uptime: {
        backgroundColor: "rgb(35, 35, 36)",
        height: "100%",
        padding: "24px"
    }
};

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        // this.socket = io("127.0.0.1:3006");
    }

    componentWillMount() {
        // this.socket.on("entityRetrieved", data => {
        //     console.log(data);
        // });
    }

    render() {
        return (
            <div style={this.props.style}>
                <div style={styles.container}>
                    <TransactionGraph style={styles.transactionGraph} data={this.state.graphData} />
                    <div style={styles.uptimeContainer}>
                        <Uptime style={styles.uptime} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;