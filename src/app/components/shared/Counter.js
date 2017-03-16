import React from "react";

const styles = {
    container: {
        position: "absolute",
        height: "60%",
        width: "60%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto"
    },
    innerText: {
        fill: "rgba(255, 255, 255, 0.85098)",
        transform: "translateY(0.15em)"
    },
    total: {
        fontSize: "6px",
        lineHeight: 1,
        textAnchor: "middle"
    }
};

const Counter = props => {
    return (
        <div style={styles.container}>
            <svg width={"100%"} height={"100%"} viewBox={"0 0 40 42"}>
                <circle cx={"20"} cy={"21"} r={"15.91549430918954"} fill={"transparent"}></circle>
                <circle cx={"20"} cy={"21"} r={"15.91549430918954"} fill={"transparent"} stroke={"rgba(28, 28, 28, 0.6)"} strokeWidth={"5"}></circle>

                <g style={styles.innerText}>
                    <text style={styles.total} x="50%" y="50%">{props.count}</text>
                </g>
            </svg>
        </div>
    );
};

export default Counter;