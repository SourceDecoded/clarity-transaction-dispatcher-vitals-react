import React, { Component } from "react";

const styles = {
    container: {
        position: "absolute",
        height: "80%",
        width: "80%",
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
        fontSize: "8px",
        lineHeight: 1,
        textAnchor: "middle",
        transform: "translateY(-0.25em)"
    },
    label: {
        fontSize: "4px",
        textAnchor: "middle",
        transform: "translateY(0.7em)"
    }
}

class DonutGraph extends Component {
    getStrokeDashArray(percentage) {
        const percentFull = Math.floor(percentage);
        const percentEmpty = 100 - percentFull;

        return percentFull + " " + percentEmpty;
    }

    render() {
        return (
            <div style={styles.container}>
                <svg width={"100%"} height={"100%"} viewBox={"0 0 40 42"}>
                    <circle cx={"20"} cy={"21"} r={"15.91549430918954"} fill={"transparent"}></circle>
                    <circle cx={"20"} cy={"21"} r={"15.91549430918954"} fill={"transparent"} stroke={"rgba(28, 28, 28, 0.6)"} strokeWidth={"5"}></circle>
                    <circle cx={"20"} cy={"21"} r={"15.91549430918954"} fill={"transparent"} stroke={"rgb(106, 27, 154)"} strokeWidth={"5"}
                        strokeDasharray={this.getStrokeDashArray(this.props.percentage)} strokeDashoffset={"25"}></circle>

                    <g style={styles.innerText}>
                        <text style={styles.total} x="50%" y="50%">{this.props.total}</text>
                        <text style={styles.label} x="50%" y="50%">{this.props.label}</text>
                    </g>
                </svg>
            </div>
        );
    }
}

export default DonutGraph;