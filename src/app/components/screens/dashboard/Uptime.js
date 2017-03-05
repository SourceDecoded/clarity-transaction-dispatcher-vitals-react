import React from "react";

const styles = {
    container: {
        position: "relative",
        height: "100%",
        width: "100%"
    },
    centerContent: {
        height: "70%",
        width: "70%",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto"
    },
    arc: {
        height: "80%",
        width: "100%"
    }
};

const Uptime = props => {
    return (
        <div style={props.style}>
            <div style={styles.container}>
                <div style={styles.centerContent}>
                    <div style={styles.arc}></div>
                </div>
            </div>
        </div>
    );
};

export default Uptime;