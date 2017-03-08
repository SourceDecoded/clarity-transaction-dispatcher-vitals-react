import React from "react";
import VerticalBarGraph from "../../core/graphs/VerticalBarGraph";

const styles = {
    titleContainer: {
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

const TransactionGraphWidget = props => {
    return (
        <div style={props.style}>
            <div style={styles.titleContainer}>

            </div>
            <div style={styles.graphContainer}>
                <VerticalBarGraph config={{
                    scales: [
                        { color: "rgba(239, 108, 0, 0.8)", value: "50" },
                        { color: "rgba(239, 108, 0, 0.8)", value: "100" },
                        { color: "rgba(239, 108, 0, 0.8)", value: "150" }
                    ],
                    items: [
                        { label: "Add", value: 70, color: "rgba(239, 108, 0, 0.8)", backgroundColor: "rgb(239, 108, 0)", emptyBackgroundColor: "rgba(42, 42, 43, 0.54902)" },
                        { label: "Edit", value: 30, color: "rgba(239, 108, 0, 0.8)", backgroundColor: "rgb(239, 108, 0)", emptyBackgroundColor: "rgba(42, 42, 43, 0.54902)" },
                        { label: "Fetch", value: 125, color: "rgba(239, 108, 0, 0.8)", backgroundColor: "rgb(239, 108, 0)", emptyBackgroundColor: "rgba(42, 42, 43, 0.54902)" },
                        { label: "Delete", value: 10, color: "rgba(239, 108, 0, 0.8)", backgroundColor: "rgb(239, 108, 0)", emptyBackgroundColor: "rgba(42, 42, 43, 0.54902)" },
                        { label: "Test", value: 100, color: "rgba(239, 108, 0, 0.8)", backgroundColor: "rgb(239, 108, 0)", emptyBackgroundColor: "rgba(42, 42, 43, 0.54902)" },
                        { label: "Test 2", value: 150, color: "rgba(239, 108, 0, 0.8)", backgroundColor: "rgb(239, 108, 0)", emptyBackgroundColor: "rgba(42, 42, 43, 0.54902)" }
                    ]
                }} />
            </div>

        </div>
    );
};

export default TransactionGraphWidget;