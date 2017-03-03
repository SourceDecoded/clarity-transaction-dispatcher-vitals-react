import React, { Component } from "react";
import io from "socket.io-client";
import TransactionGraph from "../components/screens/dashboard/TransactionGraph";

const styles = {
    transactionGraph: {
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgb(35, 35, 36)",
        height: "400px",
        width: "70%"
    }
};

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.socket = io("127.0.0.1:3006");
    }

    componentWillMount() {
        this.socket.on("entityRetrieved", data => {
            console.log(data);
        });
    }

    render() {
        return (
            <div style={this.props.style}>
                <TransactionGraph style={styles.transactionGraph}  />
            </div>
        );
    }
}

export default Dashboard;