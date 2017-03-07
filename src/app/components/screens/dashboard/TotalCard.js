import React from "react";

const styles = {
    container: {
        position: "relative",
        height: "100%",
        width: "100%"
    },
    header: {
        color: "rgba(255, 255, 255, 0.85098)",
        fontSize: "1.7vh",
        textAlign: "center"
    },
    total: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        color: "rgba(255, 255, 255, 0.85098)",
        fontSize: "5vh"
    }
};

const TotalCard = props => {
    return (
        <div style={props.style}>
            <div style={styles.container}>
                <div style={styles.header}>
                    {props.config.type}
                </div>
                <div style={styles.total}>
                    {props.config.total}
                </div>
            </div>
        </div>
    );
};

export default TotalCard;