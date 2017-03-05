import React from "react";
import WeeklyGraph from "./graphs/WeeklyGraph";

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
        padding: "24px"
    },
    graph: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: "inherit",
    }
}

const TransactionGraph = props => {
    return (
        <div style={props.style}>
            <div style={styles.container}>
                <WeeklyGraph style={styles.graph} data={props.data.weekly}/>
            </div>
        </div>
    );
};

export default TransactionGraph;